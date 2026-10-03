import { Request, Response, NextFunction } from 'express';
import { memberService } from '../services/member.service.js';
import { createMemberSchema, updateMemberSchema } from '../validators/member.validator.js';
import { sendSuccess } from '../utils/response.js';

export class MemberController {
  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const companyId = req.query['companyId'] as string | undefined;
      const policyId = req.query['policyId'] as string | undefined;
      const members = await memberService.getMembers(companyId, policyId);
      sendSuccess(res, members);
    } catch (err) {
      next(err);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const member = await memberService.getMemberById(req.params['id'] as string);
      sendSuccess(res, member);
    } catch (err) {
      next(err);
    }
  }

  async getFamily(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const companyId = req.query['companyId'] as string;
      const employeeId = req.params['employeeId'] as string;
      const members = await memberService.getFamilyMembers(companyId, employeeId);
      sendSuccess(res, members);
    } catch (err) {
      next(err);
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const validated = createMemberSchema.parse(req.body);
      const member = await memberService.createMember(validated);
      sendSuccess(res, member, 201);
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const validated = updateMemberSchema.parse(req.body);
      const member = await memberService.updateMember(req.params['id'] as string, validated);
      sendSuccess(res, member);
    } catch (err) {
      next(err);
    }
  }
}

export const memberController = new MemberController();
