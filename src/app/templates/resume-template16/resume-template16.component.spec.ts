import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTemplate16Component } from './resume-template16.component';

describe('ResumeTemplate16Component', () => {
  let component: ResumeTemplate16Component;
  let fixture: ComponentFixture<ResumeTemplate16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeTemplate16Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeTemplate16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
