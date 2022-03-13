import { Injectable } from '@angular/core';
import { Converter, Occ, Product } from '@spartacus/core';
import { ProductModel } from './custom-routing/product-model';
import { isEmpty } from './tools';

@Injectable({
  providedIn: 'root'
})

export class ProductCategoryNormalizer implements Converter<Occ.Product, Product> {

  constructor() { }

  convert(source: Occ.Product, target: ProductModel): ProductModel {
    const firstCategory: string = source && source.categories && source.categories[0] && source.categories[0].name || '';

    if (source.categories && !isEmpty(firstCategory)) {
      target.firstCategory = source.categories[0].name?.replace(/ /g, '-') || '';
    }

    return target;
  }
}
