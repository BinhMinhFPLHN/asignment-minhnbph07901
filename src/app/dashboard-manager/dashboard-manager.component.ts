import { Component, OnInit } from '@angular/core';
import { data } from '../MockData';
@Component({
  selector: 'app-dashboard-manager',
  templateUrl: './dashboard-manager.component.html',
  styleUrls: ['./dashboard-manager.component.css']
})
export class DashboardManagerComponent implements OnInit {
  product = data;
  page = 1;
  pageSize = 5;
  constructor() { }

  ngOnInit() {
  }

}
