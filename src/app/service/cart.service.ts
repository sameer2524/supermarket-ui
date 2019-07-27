import { Injectable } from '@angular/core';
import { Product } from '../admin/Product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products:Product[]=[];
  constructor() { }
  public addToCart(product){
    this.products.push(product);
  }
  
  getCartProducts():Observable<Product[]> {
    return of (this.products);
    
  }

  deleteFromCart(id){
    this.products.pop();
  }
}
