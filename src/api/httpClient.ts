import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const http: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true
});

class HttpClient {
  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return await http.get<T>(url, config)
      .then((response) => response.data);
  }

  public async post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
    return await http.post<T>(url, data, config)
      .then((response) => response.data);
  }

  public async put<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
    return await http.put<T>(url, data, config)
      .then((response) => response.data);
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return await http.delete<T>(url, config)
      .then((response) => response.data);
  }

  public async patch<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
    return await http.patch<T>(url, data, config)
      .then((response) => response.data);
  }
}

export default new HttpClient();