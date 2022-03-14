import { Injectable } from '@angular/core';
import { Converter, Occ, Product } from '@spartacus/core';
import { ProductModel } from './custom-routing/product-model';
import { prettifyToUrl } from './tools';

@Injectable({
  providedIn: 'root'
})

export class ProductManufactorerNormalizer implements Converter<Occ.Product, Product> {

  constructor() { }

  convert(source: Occ.Product, target: ProductModel): ProductModel {

    if (source.manufacturer) {
      target.manufacturerForUrl = prettifyToUrl(source.manufacturer);
    }

    return target;
  }
}
