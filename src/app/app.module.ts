import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';

import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SlideComponent } from './slider/slider.component';
import { ProductGTComponent } from './product-gt/product-gt.component';
import { ProductMenuComponent } from './product-menu/product-menu.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardManagerComponent } from './dashboard-manager/dashboard-manager.component';
import { DashboardAddComponent } from './dashboard-add/dashboard-add.component';
import { ProductComponent } from './product/product.component';
import { NewComponent } from './new/new.component';
import { DashboardEditComponent } from './dashboard-edit/dashboard-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';








@NgModule({
  imports:      [ AppRoutingModule, BrowserModule, FormsModule,CarouselModule, NgbModule, HttpClientModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, SlideComponent, ProductGTComponent, ProductMenuComponent, HomeComponent, AdminComponent, DashboardComponent, DashboardManagerComponent, DashboardAddComponent, ProductComponent, NewComponent, DashboardEditComponent, ProductDetailComponent, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
