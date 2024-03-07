import { EMPLOYMENT_TYPE_ENUM } from "@shared/enums/employment-type.enum.ts";

export type TSalary = {
  id?: string
  salaryFrom: number;
  salaryTo?: number;
  employmentType: EMPLOYMENT_TYPE_ENUM;
};