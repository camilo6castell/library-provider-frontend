import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholeSaleTextsContainerComponent } from './whole-sale-texts-container.component';

describe('WholeSaleTextsContainerComponent', () => {
  let component: WholeSaleTextsContainerComponent;
  let fixture: ComponentFixture<WholeSaleTextsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WholeSaleTextsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WholeSaleTextsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
