import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTemplate12Component } from './resume-template12.component';

describe('ResumeTemplate12Component', () => {
  let component: ResumeTemplate12Component;
  let fixture: ComponentFixture<ResumeTemplate12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeTemplate12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeTemplate12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
