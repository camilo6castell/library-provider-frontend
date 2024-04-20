import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonElementComponent } from './button-element.component';

describe('ButtonElementComponent', () => {
  let component: ButtonElementComponent;
  let fixture: ComponentFixture<ButtonElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
