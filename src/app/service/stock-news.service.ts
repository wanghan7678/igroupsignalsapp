import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewsLink } from '../model/news-link.model';

@Injectable({
  providedIn: 'root'
})
export class StockNewsService {
  
  private apiServiceUrl = environment.apiBaseUrl;

  private refresahRequired = new Subject<void>();

  constructor(private http: HttpClient) { }

  public getNewsData(tsCode: string): Observable<NewsLink[]>
  {
      return this.http.get<NewsLink[]>(this.apiServiceUrl + 
        '/news/' + tsCode)
        .pipe(
          tap(()=>{this.RefreshRequired.next()})
        );
  }

  get RefreshRequired()
  {
    return this.refresahRequired;
  }
}
