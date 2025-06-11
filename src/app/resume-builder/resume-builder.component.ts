import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-builder',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './resume-builder.component.html',
  styleUrl: './resume-builder.component.css',
})
export class ResumeBuilderComponent {
  resumeForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.resumeForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      summary: [''],
      experience: this.fb.array([this.createExperience()]),
      education: [''],
      skills: [''],
    });
  }

  createExperience(): FormGroup {
    return this.fb.group({
      jobTitle: ['', Validators.required],
      company: ['', Validators.required],
      duration: ['', Validators.required],
      description: [''],
    });
  }

  get experienceControls(): FormGroup[] {
    return (this.resumeForm.get('experience') as FormArray)
      .controls as FormGroup[];
  }

  addExperience() {
    (this.resumeForm.get('experience') as FormArray).push(
      this.createExperience()
    );
  }

  removeExperience(index: number) {
    (this.resumeForm.get('experience') as FormArray).removeAt(index);
  }

  onSubmit() {
    if (this.resumeForm.valid) {
      console.log(this.resumeForm.value);
      alert('Resume generated (for now check console)');
    }
    this.router.navigate(['/template-selector'], {
      state: { formData: this.resumeForm.value },
    });
  }
}
