import { z } from 'zod';

export const createMemberSchema = z.object({
  company_id: z.string().uuid('Invalid company ID'),
  policy_id: z.string().uuid('Invalid policy ID').optional().nullable(),
  employee_id: z.string().min(1, 'Employee ID is required'),
  member_id: z.string().min(1, 'Member ID is required'),
  name: z.string().min(1, 'Member name is required'),
  relationship: z.string().min(1, 'Relationship is required').default('employee'),
  tier: z.string().optional().nullable(),
  date_of_birth: z.string().date().optional().nullable(),
  effective_date: z.string().date().optional().nullable(),
  end_date: z.string().date().optional().nullable(),
  status: z.enum(['active', 'inactive', 'terminated', 'suspended']).default('active'),
});

export const updateMemberSchema = createMemberSchema.partial();

export type CreateMemberInput = z.infer<typeof createMemberSchema>;
export type UpdateMemberInput = z.infer<typeof updateMemberSchema>;
