import httpClient from "@api/httpClient.ts";
import { TCompany } from "@shared/types/domain/companies/company.ts";

const BASE_URL = "/companies";
const BASE_PUBLIC_URL = "/public/companies";

export function getCompanies(): Promise<TCompany[]> {
  return httpClient.get<TCompany[]>(BASE_PUBLIC_URL);
}

export function getCompanyDetailsForUpdateForm() {
  const url = `${BASE_URL}/update`;

  return httpClient.get(url);
}

export function createCompany(data: any) {
  return httpClient.post<any>(BASE_URL, data);
}

export function updateCompany(id: string, updatedCompany: any) {
  const url = `${BASE_URL}/${id}`;

  return httpClient.put(url, updatedCompany);
}

export function deleteCompany() {
  return httpClient.delete(BASE_URL);
}
