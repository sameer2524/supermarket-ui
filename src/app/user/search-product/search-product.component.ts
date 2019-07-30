import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/admin/Product';
import { UserService } from 'src/app/service/user.service';
import { ProductService } from 'src/app/service/product.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
 
  productname: string;
  products: Product[];

  constructor(private dataService: ProductService,private cartService:CartService) { }

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
  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
    console.log("DONE");
  }

}
