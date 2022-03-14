import { Injectable } from '@angular/core';
import { Converter, Occ, Product } from '@spartacus/core';
import { ProductModel } from './custom-routing/product-model';
import { isEmpty, prettifyToUrl } from './tools';

@Injectable({
  providedIn: 'root'
})

export class ProductCategoryNormalizer implements Converter<Occ.Product, Product> {

  constructor() { }

  convert(source: Occ.Product, target: ProductModel): ProductModel {
    const firstCategory: string = source && source.categories && source.categories[0] && source.categories[0].name || '';
    const secoundCategory: string = source && source.categories && source.categories[1] && source.categories[1].name || '';

    if (source.categories && source.categories.length) {
      target.firstCategory = prettifyToUrl(source.categories[0].name || '');
      target.secoundCategory = prettifyToUrl(source.categories[1].name || '');
    }

    return target;
  }
}
