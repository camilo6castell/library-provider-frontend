import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetSaleContainerComponent } from './budget-sale-container.component';

describe('BudgetSaleContainerComponent', () => {
  let component: BudgetSaleContainerComponent;
  let fixture: ComponentFixture<BudgetSaleContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetSaleContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BudgetSaleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
