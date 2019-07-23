import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Product';
import { AdminService } from 'src/app/service/admin.service';
import { AdminComponent } from '../admin.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: Product;

  constructor(private customerService: AdminService, private listComponent: AdminComponent) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.customerService.updateProduct(this.product.id,
      { productname: this.product.productname, price: this.product.price, description: this.product.description,quantity: this.product.quantity, active: isActive })
      .subscribe(
        data => {
          console.log(data);
          this.product = data as Product;
        },
        error => console.log(error));
  }

  deleteProduct() {
    this.customerService.deleteProduct(this.product.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }
}
