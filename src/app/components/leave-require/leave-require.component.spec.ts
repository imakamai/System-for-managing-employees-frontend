import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveRequireComponent } from './leave-require.component';

describe('LeaveRequireComponent', () => {
  let component: LeaveRequireComponent;
  let fixture: ComponentFixture<LeaveRequireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeaveRequireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeaveRequireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
