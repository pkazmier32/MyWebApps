import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtbalancesComponent } from './debtbalances.component';

describe('DebtbalancesComponent', () => {
  let component: DebtbalancesComponent;
  let fixture: ComponentFixture<DebtbalancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtbalancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtbalancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
