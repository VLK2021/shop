import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

import {environment} from "../environments/environment";


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) {
  }

  create(product: any) {
    return this.http.post(`${environment.fbDbUrl}/products.json`, product)
      .pipe(map((res: any)=>{
        return {
          ...product,
          id: res.name,
          date: new Date(product.date)
        }
      }))
  }

  getAll(){
    return this.http.get(`${environment.fbDbUrl}/products.json`)
      .pipe(map(res=>{
        return Object.keys(res)
          .map(key => ({
        // @ts-ignore
            ...res[key],
            id: key,
            // @ts-ignore
            date: new Date(res[key].date)
          }))
      }))
  }

}
