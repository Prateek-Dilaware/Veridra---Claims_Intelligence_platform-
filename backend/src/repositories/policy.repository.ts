import { supabase } from '../config/supabase.js';
import { Policy, PolicyDocument, PolicyKnowledge } from '../types/domain.js';
import {
  CreatePolicyInput,
  UpdatePolicyInput,
  CreatePolicyKnowledgeInput,
} from '../validators/policy.validator.js';

export class PolicyRepository {
  async findAll(companyId?: string): Promise<Policy[]> {
    let query = supabase.from('policies').select('*').order('created_at', { ascending: false });

    if (companyId) {
      query = query.eq('company_id', companyId);
    }

    const { data, error } = await query;
    if (error) throw new Error(`Failed to fetch policies: ${error.message}`);
    return (data as Policy[]) || [];
  }

  async findById(id: string): Promise<Policy | null> {
    const { data, error } = await supabase
      .from('policies')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) throw new Error(`Failed to fetch policy: ${error.message}`);
    return (data as Policy) || null;
  }

  async create(input: CreatePolicyInput): Promise<Policy> {
    const { data, error } = await supabase
      .from('policies')
      .insert(input)
      .select()
      .single();

    if (error) throw new Error(`Failed to create policy: ${error.message}`);
    return data as Policy;
  }

  async update(id: string, input: UpdatePolicyInput): Promise<Policy> {
    const { data, error } = await supabase
      .from('policies')
      .update(input)
      .eq('id', id)
      .select()
      .single();

    if (error) throw new Error(`Failed to update policy: ${error.message}`);
    return data as Policy;
  }

  async findDocumentsByPolicyId(policyId: string): Promise<PolicyDocument[]> {
    const { data, error } = await supabase
      .from('policy_documents')
      .select('*')
      .eq('policy_id', policyId)
      .order('version', { ascending: false });

    if (error) throw new Error(`Failed to fetch policy documents: ${error.message}`);
    return (data as PolicyDocument[]) || [];
  }

  async findKnowledgeByPolicyId(policyId: string): Promise<PolicyKnowledge[]> {
    const { data, error } = await supabase
      .from('policy_knowledge')
      .select('*')
      .eq('policy_id', policyId)
      .order('created_at', { ascending: true });

    if (error) throw new Error(`Failed to fetch policy knowledge: ${error.message}`);
    return (data as PolicyKnowledge[]) || [];
  }

  async createKnowledge(input: CreatePolicyKnowledgeInput): Promise<PolicyKnowledge> {
    const { data, error } = await supabase
      .from('policy_knowledge')
      .insert(input)
      .select()
      .single();

    if (error) throw new Error(`Failed to create policy knowledge: ${error.message}`);
    return data as PolicyKnowledge;
  }
}

export const policyRepository = new PolicyRepository();
