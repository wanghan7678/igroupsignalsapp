import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PageStockBasic } from '../model/page-stock-basic.model';


@Injectable({
  providedIn: 'root'
})
export class StockSearchService{

  private apiServiceUrl = environment.apiBaseUrl;

  private refresahRequired = new Subject<void>();

  get RefreshRequired()
  {
    return this.refresahRequired;
  }
  constructor(private http: HttpClient) { }

  public searchStockBasic(searchQuery: string): Observable<PageStockBasic>
  {
      return this.http.get<PageStockBasic>(this.apiServiceUrl + 
        '/stockbasic/search/' + searchQuery)
        .pipe(
          tap(()=>{this.RefreshRequired.next()})
        );
  }
}
