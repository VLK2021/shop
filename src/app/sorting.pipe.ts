import { Pipe, PipeTransform } from '@angular/core';

import {IProduct} from "./interfaces/IProduct";


@Pipe({
  name: 'sorting'
})

export class SortingPipe implements PipeTransform {

  transform(products:IProduct[], type = ''): any {

    return products.filter(prod => {
      return prod.type == type;
    })
  }

}
