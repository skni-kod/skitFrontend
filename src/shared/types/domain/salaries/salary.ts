import { SALARY_EMPLOYMENT_ENUM } from "@shared/enums/salary-employment.enum.ts";

export type TSalary = {
  id?: string
  salaryFrom: number;
  salaryTo?: number;
  employmentType: SALARY_EMPLOYMENT_ENUM;
};