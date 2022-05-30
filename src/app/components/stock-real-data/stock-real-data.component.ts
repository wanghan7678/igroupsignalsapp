import { Component, Input, OnInit } from '@angular/core';
import { PageStockRealTime } from 'src/app/model/page-stock-real-time.model';
import { StockRealTimeService } from 'src/app/service/stock-real-time.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-stock-real-data',
  templateUrl: './stock-real-data.component.html',
  styleUrls: ['./stock-real-data.component.css']
})
export class StockRealDataComponent implements OnInit {

  @Input()
  tsCode!: string;

  pageStockRealTime!: PageStockRealTime;


  constructor(private service: StockRealTimeService) { }

  ngOnInit(): void 
  {
    if (this.tsCode != null)
    {
      this.getByTsCode(this.tsCode);
      this.service.RefreshRequired.subscribe(response => {this.getByTsCode(this.tsCode)})
    }
    
  }

  getByTsCode(code: string)
  {
    this.service.getRealTimeData(code).subscribe(result => this.pageStockRealTime = result);
  }

}
