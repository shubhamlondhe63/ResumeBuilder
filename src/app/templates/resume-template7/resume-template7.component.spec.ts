import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTemplate7Component } from './resume-template7.component';

describe('ResumeTemplate7Component', () => {
  let component: ResumeTemplate7Component;
  let fixture: ComponentFixture<ResumeTemplate7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeTemplate7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeTemplate7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
