import { Component, OnInit } from '@angular/core';
import { Product } from '../admin/Product';
import { CartService } from '../service/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:Product[];
  board:string="enter";
  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.cartService.getCartProducts().subscribe(orderProducts=>this.products=orderProducts);
  }
  buy() {
    alert("Your order will be delivered to you within 30 minutes!                           Have a Great Day");
  }
}
