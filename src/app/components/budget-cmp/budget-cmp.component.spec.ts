import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetCmpComponent } from './budget-cmp.component';

describe('BudgetCmpComponent', () => {
  let component: BudgetCmpComponent;
  let fixture: ComponentFixture<BudgetCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
