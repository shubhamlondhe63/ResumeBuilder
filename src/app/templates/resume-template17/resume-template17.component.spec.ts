import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTemplate17Component } from './resume-template17.component';

describe('ResumeTemplate17Component', () => {
  let component: ResumeTemplate17Component;
  let fixture: ComponentFixture<ResumeTemplate17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeTemplate17Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeTemplate17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
