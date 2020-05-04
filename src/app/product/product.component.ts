import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  selected:Product;
  products:Product[];
  constructor(
    private min : ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  showDetail(product){
this.selected=product;
}

  getProducts(){
    this.min.getProducts().subscribe(data=> {this.products =data;})
  }
}