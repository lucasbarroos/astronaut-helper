import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadSectionComponent } from './lead-section.component';

describe('LeadSectionComponent', () => {
  let component: LeadSectionComponent;
  let fixture: ComponentFixture<LeadSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadSectionComponent]
    });
    fixture = TestBed.createComponent(LeadSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
