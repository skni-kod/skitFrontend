import httpClient from "@api/httpClient.ts";
import { TPaginationParams } from "@shared/types/pagination/paginationParams.ts";
import { SENIORITY_ENUM } from "@shared/enums/seniority.enum.ts";
import { WORK_LOCATION_ENUM } from "@shared/enums/work-location.enum.ts";
import { EMPLOYMENT_TYPE_ENUM } from "@shared/enums/employment-type.enum.ts";
import { TPaginator } from "@shared/types/pagination/paginator.ts";
import { TOffer } from "@shared/types/domain/offers/offer.ts";

const BASE_URL = "/offers";
const BASE_PUBLIC_URL = "/public/offers";

type TOffersParams = {
  search?: string,
} & TPaginationParams;

type TPublicOffersParams = {
  seniorities?: SENIORITY_ENUM,
  workLocations?: WORK_LOCATION_ENUM,
  cities?: string[],
  salaryFrom?: number,
  salaryTo?: number,
  employmentType?: EMPLOYMENT_TYPE_ENUM,
  technologyIds?: string[],
} & TOffersParams;

type TOffersResponse = {
  offers: TPaginator<TOffer>
}

type TOfferResponse = {
  offer: TOffer
}

export function getPublicOffers(params: TPublicOffersParams): Promise<TPaginator<TOffer>> {
  return httpClient.get<TOffersResponse>(BASE_PUBLIC_URL, { params })
    .then((res) => res.offers);
}

export function getPublicOffer(id: string): Promise<TOffer> {
  return httpClient.get<TOfferResponse>(`${BASE_PUBLIC_URL}/${id}`)
    .then((res) => res.offer);
}

export function getOffers(params: TOffersParams): Promise<TPaginator<TOffer>> {
  return httpClient.get<TOffersResponse>(BASE_URL, { params })
    .then((res) => res.offers);
}