import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductGTComponent } from './product-gt/product-gt.component';
import { ProductMenuComponent } from './product-menu/product-menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';





const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'admin', component: AdminComponent,
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        { path: 'dashboard', component: DashboardComponent}
      ]
  },
  { path: 'product-gt', component: ProductGTComponent},
  { path: 'product-menu', component: ProductMenuComponent},
  {path: 'product-list', component: ProductListComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
