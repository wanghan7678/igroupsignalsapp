import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockBasicComponent } from './stock-basic.component';

describe('StockBasicComponent', () => {
  let component: StockBasicComponent;
  let fixture: ComponentFixture<StockBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
