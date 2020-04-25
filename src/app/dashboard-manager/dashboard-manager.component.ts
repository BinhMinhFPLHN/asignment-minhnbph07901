import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
@Component({
  selector: 'app-dashboard-manager',
  templateUrl: './dashboard-manager.component.html',
  styleUrls: ['./dashboard-manager.component.css']
})
export class DashboardManagerComponent implements OnInit {
 selected:Product;
  products:Product[];
  page = 1;
  pageSize = 5;
  name:String;
  constructor(
    private ProductService : ProductService) { }

  ngOnInit() {
this.getProducts();
  }
getProducts(){
    this.ProductService.getProducts().subscribe(Data=>{ this.products=Data})
    // this.products= this.productService.getProducts();
    
  }

  removeItem(id){
    this.ProductService.removeProduct(id).subscribe(response =>{
      
      this.products= this.products.filter(product => product.id !==response.id)
      ;
    })
    // this.products= this.products.filter(products => products.id !==id);
  }
}
