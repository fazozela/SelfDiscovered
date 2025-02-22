import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogByIdComponent } from './blog-by-id.component';

describe('BlogByIdComponent', () => {
  let component: BlogByIdComponent;
  let fixture: ComponentFixture<BlogByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogByIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
