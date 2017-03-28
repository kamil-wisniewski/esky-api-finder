import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivePricesComponent } from './live-prices.component';

describe('LivePricesComponent', () => {
  let component: LivePricesComponent;
  let fixture: ComponentFixture<LivePricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivePricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivePricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
