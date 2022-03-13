import { Injectable } from '@angular/core';
import { Converter, Occ, Product } from '@spartacus/core';
import { ProductModel } from './custom-routing/product-model';

@Injectable({
  providedIn: 'root'
})

export class ProductNameNormalizer implements Converter<Occ.Product, Product> {

  constructor() { }

  convert(source: Occ.Product, target: ProductModel): ProductModel {

    if (source.name) {
      target.nameForUrl = source.name?.replace(/ /g, '-').toLocaleLowerCase();
    }

    return target;
  }
}
