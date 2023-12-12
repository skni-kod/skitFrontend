import { TCompany } from "@api/types/company.ts";
import { WORK_LOCATION_ENUM } from "@api/enums/work-location.ts";
import { TSalary } from "@api/types/salary.ts";
import { TTechnology } from "@api/types/technology.ts";

export type TOffer = {
  id: string;
  title: string;
  workLocations: WORK_LOCATION_ENUM[];
  cities: string[];
  salaries?: TSalary[];
  technologies?: TTechnology[];
  company: TCompany;
}
