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

  private tsCodeVal: string = "";

  private realTimeFresh: boolean = false;


  colorName: string = "black";

  pageStockRealTime!: PageStockRealTime;

  @Input()
  set tsCode(val: string)
  {
    this.tsCodeVal = val;
    this.getByTsCode(this.tsCodeVal);
    this.colorName = this.getColor();
  }

  get tsCode()
  {
    return this.tsCodeVal;
  }


  constructor(private service: StockRealTimeService) 
  { 
  }

  ngOnInit(): void 
  {
    if (this.tsCode != null)
    {
      this.getByTsCode(this.tsCodeVal);
      this.colorName = this.getColor();
      if (this.checkIfRealTimeFresh())
      {
          this.service.RefreshRequired.subscribe(response => {this.getByTsCode(this.tsCodeVal)});
      }
      
    }
    
  }

  getByTsCode(code: string)
  {
    this.service.getRealTimeData(code).subscribe(result => this.pageStockRealTime = result);
  }

  checkIfRealTimeFresh():boolean
  {
    if (this.checkIfRealTimeFresh != null)
    {
        this.realTimeFresh = false;
    }
    return this.realTimeFresh;
  }

  getColor() : string
  {
    if (this.pageStockRealTime.nowPrice > this.pageStockRealTime.lastClose)
    {
      return "red";
    }
    else
    {
      return "green";
    }
    
  }
}
