export type ExtractionStatus = 'pending' | 'processing' | 'completed' | 'failed';

export type PolicyStatus = 'active' | 'expired' | 'draft' | 'cancelled';

export type MemberStatus = 'active' | 'inactive' | 'terminated' | 'suspended';

export type KnowledgeType =
  | 'clause'
  | 'definition'
  | 'schedule'
  | 'annexure'
  | 'exclusion'
  | 'procedure'
  | 'rule_mapping'
  | 'endorsement'
  | 'table'
  | 'other';

export interface Company {
  id: string;
  name: string;
  code: string;
  created_at: string;
  updated_at: string;
}

export interface Policy {
  id: string;
  company_id: string;
  policy_number: string;
  policy_name: string;
  policy_period_from: string | null;
  policy_period_to: string | null;
  status: PolicyStatus;
  created_at: string;
  updated_at: string;
}

export interface PolicyDocument {
  id: string;
  policy_id: string;
  file_name: string;
  storage_path: string;
  file_type: string | null;
  document_hash: string | null;
  version: number;
  extraction_status: ExtractionStatus;
  uploaded_at: string;
  created_at: string;
  updated_at: string;
}

export interface PolicyKnowledge {
  id: string;
  policy_id: string;
  policy_document_id: string | null;
  reference: string | null;
  title: string | null;
  knowledge_type: KnowledgeType;
  content: string;
  page_start: number | null;
  page_end: number | null;
  rule_code: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

export interface Member {
  id: string;
  company_id: string;
  policy_id: string | null;
  employee_id: string;
  member_id: string;
  name: string;
  relationship: string;
  tier: string | null;
  date_of_birth: string | null;
  effective_date: string | null;
  end_date: string | null;
  status: MemberStatus;
  created_at: string;
  updated_at: string;
}
