import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subject, tap } from 'rxjs';
import { PageStockRealTime } from '../model/page-stock-real-time.model';

@Injectable({
  providedIn: 'root'
})
export class StockRealTimeService {

  private apiServiceUrl = environment.apiBaseUrl;

  private refresahRequired = new Subject<void>();

  constructor(private http: HttpClient) { }

  public getRealTimeData(tsCode: string): Observable<PageStockRealTime>
  {
      return this.http.get<PageStockRealTime>(this.apiServiceUrl + 
        '/realtime/' + tsCode)
        .pipe(
          tap(()=>{this.RefreshRequired.next()})
        );;
  }

  get RefreshRequired()
  {
    return this.refresahRequired;
  }
}
