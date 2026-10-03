import { Request, Response, NextFunction } from 'express';
import { policyService } from '../services/policy.service.js';
import {
  createPolicySchema,
  updatePolicySchema,
  createPolicyKnowledgeSchema,
} from '../validators/policy.validator.js';
import { sendSuccess } from '../utils/response.js';

export class PolicyController {
  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const companyId = req.query['companyId'] as string | undefined;
      const policies = await policyService.getPolicies(companyId);
      sendSuccess(res, policies);
    } catch (err) {
      next(err);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const policy = await policyService.getPolicyById(req.params['id'] as string);
      sendSuccess(res, policy);
    } catch (err) {
      next(err);
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const validated = createPolicySchema.parse(req.body);
      const policy = await policyService.createPolicy(validated);
      sendSuccess(res, policy, 201);
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const validated = updatePolicySchema.parse(req.body);
      const policy = await policyService.updatePolicy(req.params['id'] as string, validated);
      sendSuccess(res, policy);
    } catch (err) {
      next(err);
    }
  }

  async getDocuments(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const documents = await policyService.getPolicyDocuments(req.params['id'] as string);
      sendSuccess(res, documents);
    } catch (err) {
      next(err);
    }
  }

  async getKnowledge(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const knowledge = await policyService.getPolicyKnowledge(req.params['id'] as string);
      sendSuccess(res, knowledge);
    } catch (err) {
      next(err);
    }
  }

  async addKnowledge(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const validated = createPolicyKnowledgeSchema.parse(req.body);
      const knowledge = await policyService.addPolicyKnowledge(validated);
      sendSuccess(res, knowledge, 201);
    } catch (err) {
      next(err);
    }
  }
}

export const policyController = new PolicyController();
