import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockContentsComponent } from './stock-contents.component';

describe('StockContentsComponent', () => {
  let component: StockContentsComponent;
  let fixture: ComponentFixture<StockContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockContentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
