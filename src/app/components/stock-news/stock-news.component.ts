import { Component, Input, OnInit } from '@angular/core';
import { NewsLink } from 'src/app/model/news-link.model';
import { StockNewsService } from 'src/app/service/stock-news.service';

@Component({
  selector: 'app-stock-news',
  templateUrl: './stock-news.component.html',
  styleUrls: ['./stock-news.component.css']
})
export class StockNewsComponent implements OnInit {

  private tsCodeVal: string = "";

  newsLinks: NewsLink[] = [];



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

  constructor(private service: StockNewsService) { }

  ngOnInit(): void 
  {
  }

  getByTsCode(code: string)
  {
    this.service.getNewsData(code).subscribe(results => this.newsLinks = results);
  }

}
