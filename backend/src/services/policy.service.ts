import { policyRepository } from '../repositories/policy.repository.js';
import { Policy, PolicyDocument, PolicyKnowledge } from '../types/domain.js';
import {
  CreatePolicyInput,
  UpdatePolicyInput,
  CreatePolicyKnowledgeInput,
} from '../validators/policy.validator.js';

export class PolicyService {
  async getPolicies(companyId?: string): Promise<Policy[]> {
    return policyRepository.findAll(companyId);
  }

  async getPolicyById(id: string): Promise<Policy | null> {
    return policyRepository.findById(id);
  }

  async createPolicy(input: CreatePolicyInput): Promise<Policy> {
    return policyRepository.create(input);
  }

  async updatePolicy(id: string, input: UpdatePolicyInput): Promise<Policy> {
    const existing = await policyRepository.findById(id);
    if (!existing) {
      throw new Error(`Policy with id '${id}' not found`);
    }
    return policyRepository.update(id, input);
  }

  async getPolicyDocuments(policyId: string): Promise<PolicyDocument[]> {
    return policyRepository.findDocumentsByPolicyId(policyId);
  }

  async getPolicyKnowledge(policyId: string): Promise<PolicyKnowledge[]> {
    return policyRepository.findKnowledgeByPolicyId(policyId);
  }

  async addPolicyKnowledge(input: CreatePolicyKnowledgeInput): Promise<PolicyKnowledge> {
    return policyRepository.createKnowledge(input);
  }
}

export const policyService = new PolicyService();
