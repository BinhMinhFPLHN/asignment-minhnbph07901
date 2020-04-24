import { Injectable } from '@angular/core';

import{ data } from './MockData';
import{ Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api = 'https://5e79ba7017314d0016133563.mockapi.io/product';
  // products=data;
  constructor(
     private http: HttpClient
  ) { }
 

 getProducts(): Observable<Product[]>{
     return this.http.get<Product[]>(this.api);
    // return this.products;
  }
  getProduct(id): Observable<Product>{
     console.log(id);
    return this.http.get<Product>(`${this.api}/${id}`);
    // return this.products;
  }
  addProduct(product): Observable<Product>{
    return this.http.post<Product>(`${this.api}`, product);
    // let newObj = { id: 6, ...product };
    // this.products.push(newObj);
  }
  updateProduct(product): Observable<Product>{
    return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }

}


