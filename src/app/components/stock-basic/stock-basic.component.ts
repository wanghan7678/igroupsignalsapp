import { Component, Input, OnInit } from '@angular/core';
import { PageStockBasic } from 'src/app/model/page-stock-basic.model';
import { StockBasicService } from 'src/app/service/stock-basic.service.spec';

@Component({
  selector: 'app-stock-basic',
  templateUrl: './stock-basic.component.html',
  styleUrls: ['./stock-basic.component.css']
})
export class StockBasicComponent implements OnInit {

  @Input()
  stockBasic!: PageStockBasic;
  
  ifShow: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }


}
