import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product = new Product();
  submitted = false;

  constructor(private productService: AdminService) { }

  ngOnInit() {
  }

  newProduct(): void {
    this.submitted = false;
    this.product = new Product();
  }

  save() {
    this.productService.createProduct(this.product)
      .subscribe(data => console.log(data), error => console.log(error));
    this.product = new Product();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
