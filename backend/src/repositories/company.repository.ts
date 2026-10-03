import { supabase } from '../config/supabase.js';
import { Company } from '../types/domain.js';
import { CreateCompanyInput, UpdateCompanyInput } from '../validators/company.validator.js';

export class CompanyRepository {
  async findAll(): Promise<Company[]> {
    const { data, error } = await supabase
      .from('companies')
      .select('*')
      .order('name', { ascending: true });

    if (error) throw new Error(`Failed to fetch companies: ${error.message}`);
    return (data as Company[]) || [];
  }

  async findById(id: string): Promise<Company | null> {
    const { data, error } = await supabase
      .from('companies')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) throw new Error(`Failed to fetch company: ${error.message}`);
    return (data as Company) || null;
  }

  async findByCode(code: string): Promise<Company | null> {
    const { data, error } = await supabase
      .from('companies')
      .select('*')
      .eq('code', code)
      .maybeSingle();

    if (error) throw new Error(`Failed to fetch company by code: ${error.message}`);
    return (data as Company) || null;
  }

  async create(input: CreateCompanyInput): Promise<Company> {
    const { data, error } = await supabase
      .from('companies')
      .insert({
        name: input.name,
        code: input.code,
      })
      .select()
      .single();

    if (error) throw new Error(`Failed to create company: ${error.message}`);
    return data as Company;
  }

  async update(id: string, input: UpdateCompanyInput): Promise<Company> {
    const { data, error } = await supabase
      .from('companies')
      .update(input)
      .eq('id', id)
      .select()
      .single();

    if (error) throw new Error(`Failed to update company: ${error.message}`);
    return data as Company;
  }

  async delete(id: string): Promise<void> {
    const { error } = await supabase.from('companies').delete().eq('id', id);
    if (error) throw new Error(`Failed to delete company: ${error.message}`);
  }
}

export const companyRepository = new CompanyRepository();
