import { companyRepository } from '../repositories/company.repository.js';
import { Company } from '../types/domain.js';
import { CreateCompanyInput, UpdateCompanyInput } from '../validators/company.validator.js';

export class CompanyService {
  async getAllCompanies(): Promise<Company[]> {
    return companyRepository.findAll();
  }

  async getCompanyById(id: string): Promise<Company | null> {
    return companyRepository.findById(id);
  }

  async createCompany(input: CreateCompanyInput): Promise<Company> {
    const existing = await companyRepository.findByCode(input.code);
    if (existing) {
      throw new Error(`Company with code '${input.code}' already exists`);
    }
    return companyRepository.create(input);
  }

  async updateCompany(id: string, input: UpdateCompanyInput): Promise<Company> {
    const existing = await companyRepository.findById(id);
    if (!existing) {
      throw new Error(`Company with id '${id}' not found`);
    }
    return companyRepository.update(id, input);
  }
}

export const companyService = new CompanyService();
