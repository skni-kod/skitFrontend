import { TCompany } from "@shared/types/domain/companies/company.ts";
import { WORK_LOCATION_ENUM } from "@shared/enums/work-location.enum.ts";
import { TSalary } from "@shared/types/domain/salaries/salary.ts";
import { TTechnology } from "@shared/types/domain/technologies/technology.ts";

export type TOffer = {
  id: string;
  title: string;
  workLocations: WORK_LOCATION_ENUM[];
  cities: string[];
  salaries?: TSalary[];
  technologies?: TTechnology[];
  company: TCompany;
}
