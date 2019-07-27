import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/admin/Product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart-delete',
  templateUrl: './cart-delete.component.html',
  styleUrls: ['./cart-delete.component.css']
})
export class CartDeleteComponent implements OnInit {
  private product:Product[];
  constructor(private route:ActivatedRoute, private cartService:CartService) { }

  ngOnInit() {
    let id=+this.route.snapshot.paramMap.get("id");
    this.deleteProduct(id);
  }
  deleteProduct(id){
    this.cartService.deleteFromCart(id);
      this.cartService.getCartProducts().subscribe(p=>{
        console.log(p);
      this.product=p;
  });
  }
}
