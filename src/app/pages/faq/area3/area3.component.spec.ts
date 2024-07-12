import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Area3Component } from './area3.component';

describe('Area3Component', () => {
  let component: Area3Component;
  let fixture: ComponentFixture<Area3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Area3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Area3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
