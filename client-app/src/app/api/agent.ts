import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { PaginatedResult } from "../models/pagination";
import { Product } from "../models/product";

const sleep = (delay: number) => {
     return new Promise((resolve) => {
          setTimeout(resolve, delay);
     })
}

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.response.use(async response => {

     // Simulating loading delay
     await sleep(1000);

     const pagination = response.headers['pagination'];

     if (pagination) {
          response.data = new PaginatedResult(response.data, JSON.parse(pagination));

          return response as AxiosResponse<PaginatedResult<any>>;
     }

     return response;
}, (error: AxiosError) => {
     const { data, status, config } = error.response!;

     switch (status) {
          case 400:
               if (typeof data === 'string') {
                    toast.error(data);
               }

               if (config.method === 'get' && data.errors.hasOwnProperty('id')) {
                    toast.error('not-found');
               }
               break;
          case 401:
               toast.error('unauthorised');
               break;
          case 404:
               toast.error('not-found');
               break;
          case 500:
               toast.error('server-error');
               break;
     }
});
const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
     get: <T>(url: string) => axios.get<T>(url).then(responseBody),
     post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
     put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
     del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const Products = {
     list: (params: URLSearchParams) => axios.get<PaginatedResult<Product[]>>('/products/paged', { params }).then(responseBody),
     details: (id: string) => requests.get<Product>(`/products/${id}`),
     update: (product: Product) => requests.put<void>(`/products/${product.id}`, product),
}

const agent = {
     Products
}

export default agent;