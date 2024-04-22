import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholeSaleTextsFormComponent } from './whole-sale-texts-form.component';

describe('WholeSaleTextsFormComponent', () => {
  let component: WholeSaleTextsFormComponent;
  let fixture: ComponentFixture<WholeSaleTextsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WholeSaleTextsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WholeSaleTextsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
