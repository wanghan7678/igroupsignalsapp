import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';

import { SearchStockComponent} from './components/search-stock/search-stock.component';
import { StockBasicComponent } from './components/stock-basic/stock-basic.component';
import { StockCompanyComponent } from './components/stock-company/stock-company.component';
import { StockNewsComponent } from './components/stock-news/stock-news.component';
import { StockChartsComponent } from './components/stock-charts/stock-charts.component';
import { StockContentsComponent } from './components/stock-contents/stock-contents.component';
import { StockChartComponent } from './components/stock-chart/stock-chart.component';
import { StockRealDataComponent } from './components/stock-real-data/stock-real-data.component';
import { StockSignalsComponent } from './components/stock-signals/stock-signals.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    SearchStockComponent,
    StockBasicComponent,
    StockCompanyComponent,
    StockNewsComponent,
    StockChartsComponent,
    StockContentsComponent,
    StockChartComponent,
    StockRealDataComponent,
    StockSignalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
