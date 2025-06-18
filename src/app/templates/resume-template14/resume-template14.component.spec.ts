import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTemplate14Component } from './resume-template14.component';

describe('ResumeTemplate14Component', () => {
  let component: ResumeTemplate14Component;
  let fixture: ComponentFixture<ResumeTemplate14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeTemplate14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeTemplate14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
