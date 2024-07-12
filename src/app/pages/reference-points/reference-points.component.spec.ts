import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencePointsComponent } from './reference-points.component';

describe('ReferencePointsComponent', () => {
  let component: ReferencePointsComponent;
  let fixture: ComponentFixture<ReferencePointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferencePointsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReferencePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
