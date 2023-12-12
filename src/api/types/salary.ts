import { SALARY_EMPLOYMENT_ENUM } from "@api/enums/salary-employment.ts";

export type TSalary = {
  id?: string
  salaryFrom: number;
  salaryTo?: number;
  employmentType: SALARY_EMPLOYMENT_ENUM;
};