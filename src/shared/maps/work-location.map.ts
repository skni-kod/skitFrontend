import { WORK_LOCATION_ENUM } from "@shared/enums/work-location.enum.ts";

export const WORK_LOCATION_MAP = new Map<WORK_LOCATION_ENUM, string>([
  [WORK_LOCATION_ENUM.Office, "stacjonarna"],
  [WORK_LOCATION_ENUM.Hybrid, "hybrydowa"],
  [WORK_LOCATION_ENUM.Remote, "zdalna"]
]);