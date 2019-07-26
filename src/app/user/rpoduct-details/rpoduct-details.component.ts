import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/admin/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-rpoduct-details',
  templateUrl: './rpoduct-details.component.html',
  styleUrls: ['./rpoduct-details.component.css']
})
export class RpoductDetailsComponent implements OnInit {

  @Input()
  product:Product;
  constructor(private route:ActivatedRoute,private service:ProductService) { }

  ngOnInit(){
  }


}
