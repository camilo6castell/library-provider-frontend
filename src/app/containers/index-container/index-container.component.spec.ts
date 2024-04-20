import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexContainerComponent } from './index-container.component';

describe('IndexContainerComponent', () => {
  let component: IndexContainerComponent;
  let fixture: ComponentFixture<IndexContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
