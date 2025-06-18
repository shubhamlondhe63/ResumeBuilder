import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTemplate13Component } from './resume-template13.component';

describe('ResumeTemplate13Component', () => {
  let component: ResumeTemplate13Component;
  let fixture: ComponentFixture<ResumeTemplate13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeTemplate13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeTemplate13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
