import { memberRepository } from '../repositories/member.repository.js';
import { Member } from '../types/domain.js';
import { CreateMemberInput, UpdateMemberInput } from '../validators/member.validator.js';

export class MemberService {
  async getMembers(companyId?: string, policyId?: string): Promise<Member[]> {
    return memberRepository.findAll(companyId, policyId);
  }

  async getMemberById(id: string): Promise<Member | null> {
    return memberRepository.findById(id);
  }

  async getFamilyMembers(companyId: string, employeeId: string): Promise<Member[]> {
    return memberRepository.findByEmployeeId(companyId, employeeId);
  }

  async createMember(input: CreateMemberInput): Promise<Member> {
    return memberRepository.create(input);
  }

  async updateMember(id: string, input: UpdateMemberInput): Promise<Member> {
    const existing = await memberRepository.findById(id);
    if (!existing) {
      throw new Error(`Member with id '${id}' not found`);
    }
    return memberRepository.update(id, input);
  }
}

export const memberService = new MemberService();
