import { z } from 'zod';

export const createPolicySchema = z.object({
  company_id: z.string().uuid('Invalid company ID'),
  policy_number: z.string().min(1, 'Policy number is required'),
  policy_name: z.string().min(1, 'Policy name is required'),
  policy_period_from: z.string().date().optional().nullable(),
  policy_period_to: z.string().date().optional().nullable(),
  status: z.enum(['active', 'expired', 'draft', 'cancelled']).default('active'),
});

export const updatePolicySchema = createPolicySchema.partial();

export const createPolicyKnowledgeSchema = z.object({
  policy_id: z.string().uuid('Invalid policy ID'),
  policy_document_id: z.string().uuid('Invalid policy document ID').optional().nullable(),
  reference: z.string().optional().nullable(),
  title: z.string().optional().nullable(),
  knowledge_type: z.enum([
    'clause',
    'definition',
    'schedule',
    'annexure',
    'exclusion',
    'procedure',
    'rule_mapping',
    'endorsement',
    'table',
    'other',
  ]),
  content: z.string().min(1, 'Content is required'),
  page_start: z.number().int().positive().optional().nullable(),
  page_end: z.number().int().positive().optional().nullable(),
  rule_code: z.string().optional().nullable(),
  metadata: z.record(z.string(), z.unknown()).default({}),
});

export type CreatePolicyInput = z.infer<typeof createPolicySchema>;
export type UpdatePolicyInput = z.infer<typeof updatePolicySchema>;
export type CreatePolicyKnowledgeInput = z.infer<typeof createPolicyKnowledgeSchema>;
