import { Injectable } from '@angular/core';

import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = 'http://localhost:3000/products';

  productlist$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(
    private http: HttpClient,

    ) { }
    
    getAll(): void {
      this.http.get<Product[]>(this.apiUrl).subscribe(
        products => this.productlist$.next(products)
      );
    }
    
    remove(product: Product): Observable<Product> {
      return this.http.delete<Product>(`${this.apiUrl}/${product.id}`);
    }
}