import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTemplate15Component } from './resume-template15.component';

describe('ResumeTemplate15Component', () => {
  let component: ResumeTemplate15Component;
  let fixture: ComponentFixture<ResumeTemplate15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeTemplate15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeTemplate15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
