import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-stock',
  templateUrl: './search-stock.component.html',
  styleUrls: ['./search-stock.component.css']
})
export class SearchStockComponent implements OnInit {

  @Output() onSearch: EventEmitter<string> = new EventEmitter();

  text!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) 
    {
      alert("cannot be empty.")
      return;
    }
    this.onSearch.emit(this.text);
    this.text = '';
  }

}
