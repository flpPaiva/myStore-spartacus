import { Product } from "@spartacus/core";

export interface ProductModel extends Product {
    nameForUrl: string,
    manufacturerForUrl: string,
    firstCategory: string,
    secoundCategory: string
}
