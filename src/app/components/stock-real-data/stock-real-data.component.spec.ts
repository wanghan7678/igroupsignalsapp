import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockRealDataComponent } from './stock-real-data.component';

describe('StockRealDataComponent', () => {
  let component: StockRealDataComponent;
  let fixture: ComponentFixture<StockRealDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockRealDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockRealDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
