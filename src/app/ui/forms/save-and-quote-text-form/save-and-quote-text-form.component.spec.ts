import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveAndQuoteTextFormComponent } from './save-and-quote-text-form.component';

describe('SaveAndQuoteTextFormComponent', () => {
  let component: SaveAndQuoteTextFormComponent;
  let fixture: ComponentFixture<SaveAndQuoteTextFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveAndQuoteTextFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaveAndQuoteTextFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
