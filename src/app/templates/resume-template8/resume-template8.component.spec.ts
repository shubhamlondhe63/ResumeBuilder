import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTemplate8Component } from './resume-template8.component';

describe('ResumeTemplate8Component', () => {
  let component: ResumeTemplate8Component;
  let fixture: ComponentFixture<ResumeTemplate8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeTemplate8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeTemplate8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
