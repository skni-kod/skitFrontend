import { WORK_LOCATION_ENUM } from "@shared/enums/work-location.enum.ts";

export type TWorkLocation = {
  id: WORK_LOCATION_ENUM;
  name: "Office" | "Hybrid" | "Remote";
}