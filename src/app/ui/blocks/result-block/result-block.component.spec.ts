import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultBlockComponent } from './result-block.component';

describe('ResultBlockComponent', () => {
  let component: ResultBlockComponent;
  let fixture: ComponentFixture<ResultBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
