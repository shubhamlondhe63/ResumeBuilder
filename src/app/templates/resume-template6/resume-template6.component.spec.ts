import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTemplate6Component } from './resume-template6.component';

describe('ResumeTemplate6Component', () => {
  let component: ResumeTemplate6Component;
  let fixture: ComponentFixture<ResumeTemplate6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeTemplate6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeTemplate6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
