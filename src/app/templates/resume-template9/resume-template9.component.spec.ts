import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTemplate9Component } from './resume-template9.component';

describe('ResumeTemplate9Component', () => {
  let component: ResumeTemplate9Component;
  let fixture: ComponentFixture<ResumeTemplate9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeTemplate9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeTemplate9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
