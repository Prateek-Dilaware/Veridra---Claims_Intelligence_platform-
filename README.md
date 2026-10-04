# 🛡️ Claim Audit Agent — Autonomous Two-Sided Claim Auditing SaaS

> ⚠️ **Status: Under Active Development**  
> *This repository is under active development. This README is a living document and will be iteratively updated as new agent capabilities, modules, and platform features are shipped.*

---

## 📌 Executive Overview

**Claim Audit Agent** is an enterprise-grade, **fully agentic Software-as-a-Service (SaaS)** platform engineered to automate and revolutionize the health insurance and corporate benefits claim auditing lifecycle.

Built as a **two-sided platform**, it is architected from the ground up to serve the distinct yet interconnected needs of:

1. **Enterprise & Insurer Side (Companies, HR/Benefits Admins, TPAs, Underwriters & Auditors)**:
   - Centrally manage corporate insurance policies, coverage periods, and document repositories.
   - Automate policy rule parsing and exclusion extraction using autonomous AI agents.
   - Synchronize employee and dependent rosters across dynamic tier structures.
   - Run autonomous, audit-grade verification on high-volume incoming claims with fraud and anomaly detection.
   - Access comprehensive audit trails, rule-level citations, and financial leakage analytics.

2. **User & Member Side (Employees, Policyholders & Dependents)**:
   - Understand exact policy coverage, room-rent limits, copays, and waiting periods in plain, human-friendly language.
   - Pre-audit or submit claims seamlessly with immediate feedback on documentation completeness.
   - Receive transparent, explainable audit decisions backed by direct references to policy clauses.
   - Interact with agentic assistants to address coverage inquiries, dispute resolutions, and claim status checks.

---

## 🚀 Key Vision: A Fully Agentic Paradigm

Traditional claim audit workflows rely on manual scrutiny of dense, 100+ page policy wordings and static rule engines that break whenever policy formats change. 

**Claim Audit Agent** replaces rigid, brittle processes with **autonomous AI agents**:

```
 ┌──────────────────────┐         ┌────────────────────────┐
 │   Policy Documents   │         │  Corporate Rosters &   │
 │   (PDFs, Schedules)  │         │   Member Dependents    │
 └──────────┬───────────┘         └───────────┬────────────┘
            │                                 │
            ▼                                 ▼
   ┌──────────────────────────────────────────────────┐
   │         Agentic Policy Knowledge Extractor       │
   │  (Clauses • Exclusions • Limits • Rule Mappings) │
   └────────────────────────┬─────────────────────────┘
                            │
                            ▼
     ┌──────────────────────────────────────────────┐
     │          Two-Sided Claim Audit Engine        │
     │   • Real-time Member Coverage Verification   │
     │   • Clause-Grounded Compliance Validation    │
     │   • Fraud & Duplicate Anomaly Detection      │
     │   • Explainable Verdict & Citation Generator │
     └──────────────────────┬───────────────────────┘
                            │
            ┌───────────────┴───────────────┐
            ▼                               ▼
 ┌──────────────────────┐       ┌──────────────────────┐
 │   Enterprise Admin   │       │   Member / Employee  │
 │   • Audit Reports    │       │   • Plain Summaries  │
 │   • Leakage Analysis │       │   • Claim Guidance   │
 │   • Rule Overrides   │       │   • Explainability   │
 └──────────────────────┘       └──────────────────────┘
```

---

## ✨ Core Platform Capabilities

### 1. Agentic Policy Knowledge Engine
- **Document Preservation**: Secure storage of source policy contracts, amendments, and riders in isolated Supabase storage buckets.
- **Intelligent Decomposition**: Autonomous extraction and categorization of unstructured text into structured knowledge types:
  - Clauses, Definitions, Benefit Schedules, and Annexures.
  - Exclusions (Permanent, 2-Year/4-Year Pre-Existing Conditions, Specific Illnesses).
  - Procedures, Copayments, Room Rent Sub-limits, and Deductibles.
- **Traceable Rule Lineage**: Every extracted rule retains metadata linking directly back to its source document, version, and page number.

### 2. Enterprise Member & Dependent Hierarchy
- **Multi-Tenant Isolation**: Granular company partitioning ensuring data security across corporate clients.
- **Relational Member Mapping**: Unified tracking of primary employees and dependent families (spouses, children, parents).
- **Tier-Based Entitlements**: Support for graded corporate coverage tiers (e.g., Executive, Standard, Base) with distinct sub-limits.
- **Roster Ingestion Pipeline**: Scalable ingestion architecture for enterprise HRMS and Excel/CSV rosters.

### 3. Two-Sided Claim Auditing Workflow
- **Pre-Audit & Live Audit**: Capability to simulate audit outcomes before formal filing or adjudicate submitted claims in batch.
- **Multi-Agent Evaluation**: Independent verification agents cross-check:
  - Active coverage and membership status on treatment dates.
  - Diagnosis and treatment eligibility against policy exclusions.
  - Reasonable and customary (R&C) charges and itemized billing caps.
- **Explainable Decisions**: Every audit result includes clear approval/partial/denial reasoning with exact policy clause citations.

---

## 🏗️ System Architecture & Technology Stack

The platform is designed with a modern, modular, type-safe architecture:

### Tech Stack Matrix

| Layer | Technologies |
|---|---|
| **Frontend** | React 19, TypeScript, Vite, Tailwind CSS v4, TanStack Query, Zustand, React Router 7, Lucide Icons |
| **Backend API** | Node.js (ESM), Express 5, TypeScript, Zod Schema Validation |
| **Database & Storage** | Supabase (PostgreSQL with Row Level Security, Automated Triggers, Storage Buckets) |
| **AI / Agent Core** | Swappable AI Agent abstraction (`AIAgent`, `AgentContext`, `AgentResult`), Provider-agnostic LLM integration (Gemini / Anthropic / OpenAI) |
| **Testing & Quality** | Vitest, Supertest, ESLint, TypeScript Strict Mode |

### High-Level Folder Structure

```
Claim_Audit_agent/
├── backend/                      # Express REST API & Agent Orchestration
│   ├── src/
│   │   ├── agents/               # Swappable AI agent interfaces & implementations
│   │   │   ├── base.agent.ts     # Core AIAgent contract
│   │   │   └── index.ts
│   │   ├── config/               # Environment & Supabase client configuration
│   │   ├── controllers/          # Request handlers (Company, Policy, Member, Audit, Health)
│   │   ├── middleware/           # Centralized error handling & route middleware
│   │   ├── repositories/         # Supabase database access layer
│   │   ├── routes/               # API route definitions
│   │   ├── services/             # Core business logic layer
│   │   ├── types/                # Domain type definitions & interfaces
│   │   ├── utils/                # Logger & standard API response helpers
│   │   └── validators/           # Zod schema validators
│   └── tests/                    # Integration and unit tests (Vitest + Supertest)
│
├── frontend/                     # Modern React Single Page Application (SPA)
│   ├── src/
│   │   ├── api/                  # Typed HTTP client layer
│   │   ├── components/layout/    # App shell, responsive header, sidebar navigation
│   │   ├── features/             # Domain modules
│   │   │   ├── audits/           # Claims auditing dashboard & audit views
│   │   │   ├── members/          # Member rosters & dependent relationship tracking
│   │   │   └── policies/         # Policy management & document knowledge views
│   │   ├── hooks/                # Custom React & data fetching hooks
│   │   ├── lib/                  # State stores (Zustand) & utility helpers
│   │   └── pages/                # High-level route views (Dashboard, etc.)
│   └── public/                   # Static branding assets and vector icons
│
└── supabase/
    └── migrations/               # PostgreSQL DDL migrations, RLS policies, triggers
```

---

## 🚦 Roadmap & Implementation Status

| Milestone | Phase | Description | Status |
|---|---|---|---|
| **Foundation & Architecture** | Phase 1 | Database schema (Companies, Policies, Documents, Knowledge, Members), RLS policies, Storage buckets, Express 5 backend shell, and modern React 19 UI shell. | ✅ Complete |
| **Policy Knowledge Extractor** | Phase 2 | Document upload pipeline, OCR/text extraction, and LLM-powered extraction agent for clauses, exclusions, and benefit rules. | 🔄 In Progress |
| **Enterprise Roster Ingestion** | Phase 3 | Bulk Excel/CSV upload pipeline, member status synchronization, and tier mapping engine. | 📅 Scheduled |
| **Autonomous Claim Audit Engine** | Phase 4 | Full claim payload ingestion, multi-agent evaluation against extracted knowledge, fraud detection, and explainability reports. | 📅 Scheduled |
| **Two-Sided Portals & Self-Service** | Phase 5 | Dedicated Member Self-Service portal, HR Administrator portal, interactive appeal agent, and advanced analytics dashboards. | 📅 Scheduled |

---

## ⚙️ Local Development Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+ recommended)
- [npm](https://www.npmjs.com/) (v10+ recommended)
- A [Supabase](https://supabase.com/) project (hosted or local CLI)

---

### 1. Database Setup (Supabase)

1. Navigate to your Supabase project's **SQL Editor**.
2. Run the migration script located at:
   ```bash
   supabase/migrations/0001_create_initial_schema.sql
   ```
   This will initialize:
   - Core tables (`companies`, `policies`, `policy_documents`, `policy_knowledge`, `members`)
   - Automatic `updated_at` triggers and performance indexes
   - Row Level Security (RLS) policies
   - The `policy-documents` private storage bucket

---

### 2. Backend Setup

1. Open a terminal and navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your Supabase credentials:
   ```env
   PORT=4000
   NODE_ENV=development
   CLIENT_ORIGIN=http://localhost:5173
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
   ```
4. Start the backend development server:
   ```bash
   npm run dev
   ```
   The backend API will run at `http://localhost:4000` (Health check at `http://localhost:4000/api/health`).

---

### 3. Frontend Setup

1. Open a second terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` as needed:
   ```env
   VITE_API_BASE_URL=http://localhost:4000
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```
4. Start the frontend Vite development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173` to access the application dashboard.

---

### 4. Running Tests

To run the backend test suite:
```bash
cd backend
npm run test
```

---

## 📄 Documentation Updates

This project is actively evolving. As we introduce new agent workflows, claim ingestion pipelines, and client-facing interfaces, this document will be updated to reflect the latest architectural decisions and setup steps.

---

## 👥 Contributors & Acknowledgements

- **Architect & Developer**: Prateek Dilaware
- Developed as an intelligent, autonomous, two-sided SaaS ecosystem for insurance claim governance.
