import { createContext, useContext } from "react";
import ModalStore from "./modalStore";
import ProductStore from "./productStore";

interface Store{
    productStore: ProductStore;
    modalStore: ModalStore;
}

export const store: Store = {
    productStore: new ProductStore(),
    modalStore: new ModalStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}