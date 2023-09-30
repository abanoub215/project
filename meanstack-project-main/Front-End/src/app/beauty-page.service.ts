import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeautyPageService {
  allBeautyProducts: any[] = [];
  constructor(private http: HttpClient) {}

  getAllBeautyProducts(): Observable<any> {
    return this.http.get(
      `http://localhost:3000/beautyProducts`
    );
  }

  getProductById(Id: Number): Observable<any> {
    return this.http.get(
      `http://localhost:3000/products/${Id}`
    );
  }
  searchAllBeautyProducts(productName: string): Observable<any> {
    if (productName == '') {
      return this.getAllBeautyProducts();
    } else {
      return this.http.post(
        `http://localhost:3000/products/search`,  { productName: productName }
      );
    }
  }
}
