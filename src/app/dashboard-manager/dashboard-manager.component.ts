import { Component, OnInit } from '@angular/core';
// import { data } from '../MockData';
import { ProductService } from '../product.service';
import { Product } from '../product';
@Component({
  selector: 'app-dashboard-manager',
  templateUrl: './dashboard-manager.component.html',
  styleUrls: ['./dashboard-manager.component.css']
})
export class DashboardManagerComponent implements OnInit {
  // product = data;
  products: Product[];
  page = 1;
  pageSize = 5;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
this.getProducts();
  }
getProducts(){
    this.productService.getProducts().subscribe(Data=>{ this.products=Data})
    // this.products= this.productService.getProducts();
    
  }
}
