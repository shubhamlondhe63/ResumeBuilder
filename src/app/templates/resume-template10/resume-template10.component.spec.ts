import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTemplate10Component } from './resume-template10.component';

describe('ResumeTemplate10Component', () => {
  let component: ResumeTemplate10Component;
  let fixture: ComponentFixture<ResumeTemplate10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeTemplate10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeTemplate10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
