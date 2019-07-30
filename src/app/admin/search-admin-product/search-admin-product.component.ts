import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Product';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-search-admin-product',
  templateUrl: './search-admin-product.component.html',
  styleUrls: ['./search-admin-product.component.css']
})
export class SearchAdminProductComponent implements OnInit {
  product: Product;
  productname: string;
  products: Product[];
  selectedProduct:Product;

  constructor(private dataService: AdminService) { }

  ngOnInit() {
    this.productname=null;
  }

  private searchProducts() {
    this.dataService.getProductsByProductname(this.productname)
      .subscribe(products => this.products = products);
  }

  onSubmit() {
    this.searchProducts();
  }

}
