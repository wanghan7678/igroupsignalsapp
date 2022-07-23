import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSignalsComponent } from './stock-signals.component';

describe('StockSignalsComponent', () => {
  let component: StockSignalsComponent;
  let fixture: ComponentFixture<StockSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockSignalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
