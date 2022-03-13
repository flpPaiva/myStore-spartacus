import { Product } from "@spartacus/core";

export interface ProductModel extends Product {
    nameForUrl: string,
    firstCategory: string
}
