import { TSalary } from "@shared/types/domain/salaries/salary.ts";
import { TTechnology } from "@shared/types/domain/technologies/technology.ts";
import { TWorkLocation } from "@shared/types/domain/work-location/work-location.ts";

export type TOffer = {
  id: string;
  title: string;
  workLocations: TWorkLocation[];
  cities: string[];
  salaries?: TSalary[];
  technologies?: TTechnology[];
  companyName: string;
  companyLogoUrl: string;
}
