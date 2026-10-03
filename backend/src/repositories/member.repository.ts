import { supabase } from '../config/supabase.js';
import { Member } from '../types/domain.js';
import { CreateMemberInput, UpdateMemberInput } from '../validators/member.validator.js';

export class MemberRepository {
  async findAll(companyId?: string, policyId?: string): Promise<Member[]> {
    let query = supabase.from('members').select('*').order('name', { ascending: true });

    if (companyId) {
      query = query.eq('company_id', companyId);
    }
    if (policyId) {
      query = query.eq('policy_id', policyId);
    }

    const { data, error } = await query;
    if (error) throw new Error(`Failed to fetch members: ${error.message}`);
    return (data as Member[]) || [];
  }

  async findById(id: string): Promise<Member | null> {
    const { data, error } = await supabase
      .from('members')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) throw new Error(`Failed to fetch member: ${error.message}`);
    return (data as Member) || null;
  }

  async findByEmployeeId(companyId: string, employeeId: string): Promise<Member[]> {
    const { data, error } = await supabase
      .from('members')
      .select('*')
      .eq('company_id', companyId)
      .eq('employee_id', employeeId);

    if (error) throw new Error(`Failed to fetch family members: ${error.message}`);
    return (data as Member[]) || [];
  }

  async create(input: CreateMemberInput): Promise<Member> {
    const { data, error } = await supabase
      .from('members')
      .insert(input)
      .select()
      .single();

    if (error) throw new Error(`Failed to create member: ${error.message}`);
    return data as Member;
  }

  async update(id: string, input: UpdateMemberInput): Promise<Member> {
    const { data, error } = await supabase
      .from('members')
      .update(input)
      .eq('id', id)
      .select()
      .single();

    if (error) throw new Error(`Failed to update member: ${error.message}`);
    return data as Member;
  }

  async delete(id: string): Promise<void> {
    const { error } = await supabase.from('members').delete().eq('id', id);
    if (error) throw new Error(`Failed to delete member: ${error.message}`);
  }
}

export const memberRepository = new MemberRepository();
