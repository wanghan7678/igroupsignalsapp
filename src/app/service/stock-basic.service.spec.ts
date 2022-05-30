import { Injectable } from '@angular/core';
import { PageStockBasic } from '../model/page-stock-basic.model';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockBasicService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }




}