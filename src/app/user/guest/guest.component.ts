import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ProductService } from 'src/app/service/product.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/admin/Product';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  board: string;
  errorMessage: string;
  products: Observable<Product[]>;
  product:Product;
  constructor() { }

  ngOnInit() {
  }
 
}
