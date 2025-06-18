import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTemplate11Component } from './resume-template11.component';

describe('ResumeTemplate11Component', () => {
  let component: ResumeTemplate11Component;
  let fixture: ComponentFixture<ResumeTemplate11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeTemplate11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeTemplate11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
