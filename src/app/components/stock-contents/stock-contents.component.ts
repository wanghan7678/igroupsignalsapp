import { Component, OnInit } from '@angular/core';
import { PageStockBasic } from 'src/app/model/page-stock-basic.model';
import { StockSearchService } from 'src/app/service/stock-search.service';

@Component({
  selector: 'app-stock-contents',
  templateUrl: './stock-contents.component.html',
  styleUrls: ['./stock-contents.component.css']
})
export class StockContentsComponent implements OnInit {

  stockBasic!: PageStockBasic;

  constructor(private searchService : StockSearchService) { }

  ngOnInit(): void {
    
  }

  onSearch(searchQuery:string)
  {
    this.searchService.searchStockBasic(searchQuery).subscribe((stockBasics) => this.stockBasic = stockBasics);
  }

}
