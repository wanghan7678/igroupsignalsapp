import { Component, Input, OnInit } from '@angular/core';
import { NewsLink } from 'src/app/model/news-link.model';

@Component({
  selector: 'app-stock-news',
  templateUrl: './stock-news.component.html',
  styleUrls: ['./stock-news.component.css']
})
export class StockNewsComponent implements OnInit {

  private tsCodeVal: string = "";

  private newsLinks: NewsLink[] = [];


  @Input()
  set tsCode(val: string)
  {
    this.tsCodeVal = val;
    this.getByTsCode(this.tsCodeVal);
  }

  get tsCode()
  {
    return this.tsCodeVal;
  }

  constructor() { }

  ngOnInit(): void 
  {
  }

  getByTsCode(code: string)
  {
    
  }

}
