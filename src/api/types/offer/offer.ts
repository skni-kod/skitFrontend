import { TCompany } from "@api/types/company/company.ts";

export type TSalaryRange = {
  from: number;
  to?: number;
}

export type TOffer = {
  id: string;
  title: string;
  workLocation: string;
  salaryRange?: TSalaryRange;
  technologies?: string[];
  company: TCompany;
}
