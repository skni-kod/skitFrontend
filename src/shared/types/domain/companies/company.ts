import { TSize } from "@shared/types/domain/companies/size.ts";

export type TCompany = {
  id: string;
  name: string;
  size: TSize
}