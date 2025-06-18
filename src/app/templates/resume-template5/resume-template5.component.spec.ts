import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTemplate5Component } from './resume-template5.component';

describe('ResumeTemplate5Component', () => {
  let component: ResumeTemplate5Component;
  let fixture: ComponentFixture<ResumeTemplate5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeTemplate5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeTemplate5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
