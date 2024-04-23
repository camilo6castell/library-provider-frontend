import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBlockComponent } from './modal-block.component';

describe('ModalBlockComponent', () => {
  let component: ModalBlockComponent;
  let fixture: ComponentFixture<ModalBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
