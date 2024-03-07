import { EMPLOYMENT_TYPE_ENUM } from "@shared/enums/employment-type.enum.ts";

export const SALARY_EMPLOYMENT_MAP: Map<EMPLOYMENT_TYPE_ENUM, string> = new Map<EMPLOYMENT_TYPE_ENUM, string>([
  [EMPLOYMENT_TYPE_ENUM.Permanent, "UoP"],
  [EMPLOYMENT_TYPE_ENUM.B2B, "B2B"],
  [EMPLOYMENT_TYPE_ENUM.MandateContract, "UZ"]
]);