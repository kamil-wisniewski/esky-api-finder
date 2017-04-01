import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CachePricesSecondComponent } from './cache-prices-second.component';

describe('CachePricesSecondComponent', () => {
  let component: CachePricesSecondComponent;
  let fixture: ComponentFixture<CachePricesSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CachePricesSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CachePricesSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
