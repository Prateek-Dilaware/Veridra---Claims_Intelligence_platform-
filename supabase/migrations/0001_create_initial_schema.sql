-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = ''
AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$;

-- 1. companies
CREATE TABLE IF NOT EXISTS public.companies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    code TEXT NOT NULL UNIQUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER update_companies_updated_at
    BEFORE UPDATE ON public.companies
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- 2. policies
CREATE TABLE IF NOT EXISTS public.policies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
    policy_number TEXT NOT NULL,
    policy_name TEXT NOT NULL,
    policy_period_from DATE,
    policy_period_to DATE,
    status TEXT NOT NULL DEFAULT 'active',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uk_policies_company_number UNIQUE (company_id, policy_number)
);

CREATE INDEX IF NOT EXISTS idx_policies_company_id ON public.policies(company_id);

CREATE TRIGGER update_policies_updated_at
    BEFORE UPDATE ON public.policies
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- 3. policy_documents
CREATE TABLE IF NOT EXISTS public.policy_documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    policy_id UUID NOT NULL REFERENCES public.policies(id) ON DELETE CASCADE,
    file_name TEXT NOT NULL,
    storage_path TEXT NOT NULL,
    file_type TEXT,
    document_hash TEXT,
    version INTEGER NOT NULL DEFAULT 1,
    extraction_status TEXT NOT NULL DEFAULT 'pending',
    uploaded_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_policy_documents_policy_id ON public.policy_documents(policy_id);

CREATE TRIGGER update_policy_documents_updated_at
    BEFORE UPDATE ON public.policy_documents
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- 4. policy_knowledge
CREATE TABLE IF NOT EXISTS public.policy_knowledge (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    policy_id UUID NOT NULL REFERENCES public.policies(id) ON DELETE CASCADE,
    policy_document_id UUID REFERENCES public.policy_documents(id) ON DELETE SET NULL,
    reference TEXT,
    title TEXT,
    knowledge_type TEXT NOT NULL,
    content TEXT NOT NULL,
    page_start INTEGER,
    page_end INTEGER,
    rule_code TEXT,
    metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_policy_knowledge_policy_id ON public.policy_knowledge(policy_id);
CREATE INDEX IF NOT EXISTS idx_policy_knowledge_document_id ON public.policy_knowledge(policy_document_id);
CREATE INDEX IF NOT EXISTS idx_policy_knowledge_type ON public.policy_knowledge(knowledge_type);

CREATE TRIGGER update_policy_knowledge_updated_at
    BEFORE UPDATE ON public.policy_knowledge
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- 5. members
CREATE TABLE IF NOT EXISTS public.members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
    policy_id UUID REFERENCES public.policies(id) ON DELETE SET NULL,
    employee_id TEXT NOT NULL,
    member_id TEXT NOT NULL,
    name TEXT NOT NULL,
    relationship TEXT NOT NULL DEFAULT 'employee',
    tier TEXT,
    date_of_birth DATE,
    effective_date DATE,
    end_date DATE,
    status TEXT NOT NULL DEFAULT 'active',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uk_members_company_member_id UNIQUE (company_id, member_id)
);

CREATE INDEX IF NOT EXISTS idx_members_company_id ON public.members(company_id);
CREATE INDEX IF NOT EXISTS idx_members_policy_id ON public.members(policy_id);
CREATE INDEX IF NOT EXISTS idx_members_company_employee ON public.members(company_id, employee_id);

CREATE TRIGGER update_members_updated_at
    BEFORE UPDATE ON public.members
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Enable Row Level Security (RLS) on all public tables
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.policies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.policy_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.policy_knowledge ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.members ENABLE ROW LEVEL SECURITY;

-- Storage Bucket for Policy Documents (Private)
INSERT INTO storage.buckets (id, name, public)
VALUES ('policy-documents', 'policy-documents', false)
ON CONFLICT (id) DO NOTHING;
