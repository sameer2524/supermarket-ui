import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8080/api/test/admin';

  constructor(private http: HttpClient) { }

  getProduct(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/product/${id}`);
  }

  createProduct(product: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, product);
  }

  updateProduct(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getProductsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
  getProductsByProductname(productname: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/products/name/${productname}`);
  }
}
