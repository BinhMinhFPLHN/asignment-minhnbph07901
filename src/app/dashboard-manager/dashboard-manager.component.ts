import { Component, OnInit } from '@angular/core';
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
  name: string;
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
   removeItem(id){
    this.productService.removeProduct(id).subscribe(response =>{
      
      this.products= this.products.filter(product => product.id !==response.id)
      ;
    })}

}
