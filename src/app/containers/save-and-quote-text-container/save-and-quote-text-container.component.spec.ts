import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveAndQuoteTextContainerComponent } from './save-and-quote-text-container.component';

describe('SaveAndQuoteTextContainerComponent', () => {
  let component: SaveAndQuoteTextContainerComponent;
  let fixture: ComponentFixture<SaveAndQuoteTextContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveAndQuoteTextContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaveAndQuoteTextContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
