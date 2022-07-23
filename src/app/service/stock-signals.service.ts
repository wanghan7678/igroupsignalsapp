import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Signal } from '../model/signal.model';

@Injectable({
  providedIn: 'root'
})
export class StockSignalsService {

  private apiServiceUrl = environment.apiBaseUrl;

  private refresahRequired = new Subject<void>();

  constructor(private http: HttpClient) { }

  public getSignalsData(tsCode: string): Observable<Signal[]>
  {
    return this.http.get<Signal[]>(this.apiServiceUrl + 
      '/signals/' + tsCode)
      .pipe(
        tap(()=>{this.RefreshRequired.next()})
      );
  }

  get RefreshRequired()
  {
    return this.refresahRequired;
  }
}
