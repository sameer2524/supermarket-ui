import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { Observable } from 'rxjs';
import { Product } from '../admin/Product';
import { ProductService } from '../service/product.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  board: string;
  errorMessage: string;
  info: any;
  products: Observable<Product[]>;
  product:Product;

  constructor(private userService: UserService,private token: TokenStorageService,private productService:ProductService,private cartService:CartService) { }

  ngOnInit() {
    this.userService.getUserBoard().subscribe(
      data => {
        this.board = data;
        this.reloadData();
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }
  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
    console.log("DONE");
  }

  reloadData() {
    console.log("user");
    this.products = this.productService.getProductsList();
  }
 
}
