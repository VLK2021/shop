import { Pipe, PipeTransform } from '@angular/core';

import {IProduct} from "./interfaces/IProduct";


@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {

  transform(products:IProduct[], productName = ''): any {
    if (!productName.trim()) {
      return products
    }

    return products.filter(prod => {
      return prod.tittle?.toLowerCase().includes(productName.toLowerCase());
    })
  }

}
