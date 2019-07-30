import { Component, OnInit } from '@angular/core';
import { Product } from '../admin/Product';
import { CartService } from '../service/cart.service';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:Product[];
  info:any;
  //quantity:number;
  // total:any;
  product:Product;
  quantity:number;
  total:number=0;
  private roles: string[];
  private authority: string;
  constructor(private cartService:CartService,private token: TokenStorageService) { }

  ngOnInit() {
    if (this.token.getToken()) {
      this.roles = this.token.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.cartService.getCartProducts().subscribe(orderProducts=>this.products=orderProducts);
    // for(this.quantity=1;this.quantity<=this.products.length;this.quantity++){
    //   this.total+=this.quantity*this.products.product
    // }
    this.quantity=this.products.length;
  }

  
  
  buy() {
    alert("Your order will be delivered to you within 30 minutes!                           Have a Great Day");
  }
  clear(){
    this.cartService.clearCart();
  }
  // calctotal(){
  //   return this.total+=this.product.price*1;
  // }
}
