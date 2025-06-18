import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTemplate4Component } from './resume-template4.component';

describe('ResumeTemplate4Component', () => {
  let component: ResumeTemplate4Component;
  let fixture: ComponentFixture<ResumeTemplate4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeTemplate4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeTemplate4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
