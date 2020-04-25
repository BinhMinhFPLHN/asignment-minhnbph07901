import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-dashboard-add',
  templateUrl: './dashboard-add.component.html',
  styleUrls: ['./dashboard-add.component.css']
})
export class DashboardAddComponent implements OnInit {
form = new FormGroup({
  price:new FormControl('',Validators.required),
  name:new FormControl('',Validators.required),
  desc:new FormControl('',Validators.required),
  anh:new FormControl('',Validators.required),


})
product: Product = new Product();
  constructor(private abc : ProductService,
  private router:Router) { }

  ngOnInit() {
  }
addProduct(){
    this.abc.addProduct(this.product).subscribe(data => 
    this.router.navigateByUrl('admin/dashboard-manager'));
  }
}