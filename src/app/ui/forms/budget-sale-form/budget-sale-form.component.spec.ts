import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetSaleFormComponent } from './budget-sale-form.component';

describe('BudgetSaleFormComponent', () => {
  let component: BudgetSaleFormComponent;
  let fixture: ComponentFixture<BudgetSaleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetSaleFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BudgetSaleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
