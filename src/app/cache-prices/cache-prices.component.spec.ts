import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CachePricesComponent } from './cache-prices.component';

describe('CachePricesComponent', () => {
  let component: CachePricesComponent;
  let fixture: ComponentFixture<CachePricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CachePricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CachePricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
