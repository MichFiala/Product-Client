import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Pagination, PagingParams } from "../models/pagination";
import { Product } from "../models/product";
import { store } from "./store";

export default class ProductStore {
     productsRegistry = new Map<number, Product>();
     product: Product | null = null;
     pagination: Pagination | null = null;
     private pagingParams = new PagingParams();
     loading = false;

     constructor() {
          makeAutoObservable(this);
     }

     loadProducts = async () => {
          try {
               const result = await agent.Products.list(this.axiosParams);
               runInAction(() => {

                    result.data.forEach(p => {
                         this.setProduct(p);
                    });

                    this.setPagination(result.pagination);
               });
          } catch (error) {
               console.log(error);
          }
     }

     updateProduct = async (product: Product) => {
          this.loading = true;

          try {
               await agent.Products.update(product);

               runInAction(() => {
                    this.productsRegistry.set(product.id, product);
                    this.loading = false;
                    store.modalStore.closeModal();
               });
          } catch (error) {
               console.log(error);

               runInAction(() => {
                    this.loading = false;
               })
          }
     }

     loadNextProducts = async () => {
          this.setPagingParams(new PagingParams(this.pagination!.currentPage + 1));

          await this.loadProducts();
     }

     get hasMoreProducts() {
          return !!this.pagination && this.pagination.currentPage < this.pagination.totalPages;
     }

     setPagination = (pagination: Pagination) => {
          this.pagination = pagination;
     }

     setPagingParams = (pagingParams: PagingParams) => {
          this.pagingParams = pagingParams;
     }

     get products() {
          return Array.from(this.productsRegistry.values());
     }

     get axiosParams() {
          const params = new URLSearchParams();

          params.append('pageNumber', this.pagingParams.pageNumber.toString());
          params.append('pageSize', this.pagingParams.pageSize.toString());

          return params;
     }

     private setProduct = (product: Product) => {
          this.productsRegistry.set(product.id, product);
     }

}