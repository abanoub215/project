import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  allProducts: any[] = [];
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get(
      `http://localhost:3000/products`
    );
  }

  getProductById(Id: Number): Observable<any> {
    return this.http.get(
      `http://localhost:3000/products/${Id}`
    );
  }
  searchAllProducts(productName: string): Observable<any> {
    if (productName == '') {
      return this.getAllProducts();
    } else {
      return this.http.post(
        `http://localhost:3000/products/search`,  { productName: productName }
      );
    }
  }
}
