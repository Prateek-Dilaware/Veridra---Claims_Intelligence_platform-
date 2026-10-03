import { Request, Response, NextFunction } from 'express';
import { companyService } from '../services/company.service.js';
import { createCompanySchema, updateCompanySchema } from '../validators/company.validator.js';
import { sendSuccess } from '../utils/response.js';

export class CompanyController {
  async getAll(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const companies = await companyService.getAllCompanies();
      sendSuccess(res, companies);
    } catch (err) {
      next(err);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const company = await companyService.getCompanyById(req.params['id'] as string);
      sendSuccess(res, company);
    } catch (err) {
      next(err);
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const validated = createCompanySchema.parse(req.body);
      const company = await companyService.createCompany(validated);
      sendSuccess(res, company, 201);
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const validated = updateCompanySchema.parse(req.body);
      const company = await companyService.updateCompany(req.params['id'] as string, validated);
      sendSuccess(res, company);
    } catch (err) {
      next(err);
    }
  }
}

export const companyController = new CompanyController();
