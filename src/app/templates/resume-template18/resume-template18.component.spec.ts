import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTemplate18Component } from './resume-template18.component';

describe('ResumeTemplate18Component', () => {
  let component: ResumeTemplate18Component;
  let fixture: ComponentFixture<ResumeTemplate18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeTemplate18Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeTemplate18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
