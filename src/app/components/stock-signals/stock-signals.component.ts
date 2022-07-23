import { Component, Input, OnInit } from '@angular/core';
import { StockSignalsService } from 'src/app/service/stock-signals.service';
import { Signal } from 'src/app/model/signal.model';

@Component({
  selector: 'app-stock-signals',
  templateUrl: './stock-signals.component.html',
  styleUrls: ['./stock-signals.component.css']
})
export class StockSignalsComponent implements OnInit {

  private tsCodeVal: string = "";

  signals: Signal[] = []

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

  constructor(private service : StockSignalsService) { }

  ngOnInit(): void {
  }

  getByTsCode(code: string)
  {
    this.service.getSignalsData(code).subscribe(results => this.signals = results);
  }
}
