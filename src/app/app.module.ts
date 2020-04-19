import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SlideComponent } from './slider/slider.component';
import { ProductGTComponent } from './product-gt/product-gt.component';
import { ProductMenuComponent } from './product-menu/product-menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardManagerComponent } from './dashboard-manager/dashboard-manager.component';






@NgModule({
  imports:      [ AppRoutingModule, BrowserModule, FormsModule,CarouselModule, NgbModule ],
  declarations: [ AppComponent, HelloComponent, SlideComponent, ProductGTComponent, ProductMenuComponent, ProductListComponent, HomeComponent, AdminComponent, DashboardComponent, DashboardManagerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
