import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Product';
import { AdminService } from 'src/app/service/admin.service';
import { AdminComponent } from '../admin.component';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  @Input()
  product:Product;
  constructor(private service:AdminService,private listComponent:AdminComponent) { }

  ngOnInit() {
  }

  Update(quantity:number){
    this.service.updateProduct(this.product.id,
      { productname: this.product.productname, price: this.product.price, description: this.product.description,quantity: quantity })
      .subscribe(
        data => {
          console.log(data);
          this.product = data as Product;
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }
}
