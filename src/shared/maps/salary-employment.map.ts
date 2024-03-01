import { SALARY_EMPLOYMENT_ENUM } from "@shared/enums/salary-employment.enum.ts";

export const SALARY_EMPLOYMENT_MAP: Map<SALARY_EMPLOYMENT_ENUM, string> = new Map<SALARY_EMPLOYMENT_ENUM, string>([
  [SALARY_EMPLOYMENT_ENUM.Permanent, "UoP"],
  [SALARY_EMPLOYMENT_ENUM.B2B, "B2B"],
  [SALARY_EMPLOYMENT_ENUM.MandateContract, "UZ"]
]);