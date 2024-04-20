import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBlockComponent } from './navbar-block.component';

describe('NavbarBlockComponent', () => {
  let component: NavbarBlockComponent;
  let fixture: ComponentFixture<NavbarBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
