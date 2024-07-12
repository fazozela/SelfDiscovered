import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutFaqComponent } from './layout-faq.component';

describe('LayoutComponent', () => {
  let component: LayoutFaqComponent;
  let fixture: ComponentFixture<LayoutFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutFaqComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LayoutFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
