import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { AdminService } from '../service/admin.service';
import { Observable } from 'rxjs';
import { Product } from './Product';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  board: string;
  errorMessage: string;
  products: Observable<Product[]>;

  constructor(private userService: UserService,private productService:AdminService) { }

  ngOnInit() {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
    this.reloadData();
  }

  
  deleteProducts() {
    this.productService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }

  reloadData() {
    console.log("called");
    this.products = this.productService.getProductsList();
  }
}
