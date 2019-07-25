import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { Observable } from 'rxjs';
import { Product } from '../admin/Product';
import { ProductService } from '../service/product.service';

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

  constructor(private userService: UserService,private token: TokenStorageService,private productService:ProductService) { }

  ngOnInit() {
    this.userService.getUserBoard().subscribe(
      data => {
        this.board = data;
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
    this.reloadData();
  }

  reloadData() {
    console.log("user");
    this.products = this.productService.getProductsList();
  }
}
