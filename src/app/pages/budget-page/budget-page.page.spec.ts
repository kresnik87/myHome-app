import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetPagePage } from './budget-page.page';

describe('BudgetPagePage', () => {
  let component: BudgetPagePage;
  let fixture: ComponentFixture<BudgetPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
