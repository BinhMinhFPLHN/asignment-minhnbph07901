import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SlideComponent } from './slider/slider.component';
import { ProductGTComponent } from './product-gt/product-gt.component';
import { ProductMenuComponent } from './product-menu/product-menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  imports:      [ AppRoutingModule, BrowserModule, FormsModule, ],
  declarations: [ AppComponent, HelloComponent, SlideComponent, ProductGTComponent, ProductMenuComponent, ProductListComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
