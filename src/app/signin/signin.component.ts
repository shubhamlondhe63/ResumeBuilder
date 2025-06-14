import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  signinForm: FormGroup;
  isLoading = false;
  showPassword = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });
  }

  get email() {
    return this.signinForm.get('email');
  }
  get password() {
    return this.signinForm.get('password');
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.signinForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';

      // Simulate API call
      setTimeout(() => {
        this.isLoading = false;

        // Mock authentication - in real app, validate against backend
        const { email, password } = this.signinForm.value;

        if (email === 'demo@resumebuilder.com' && password === 'demo123') {
          // Success - redirect to builder
          localStorage.setItem('isAuthenticated', 'true');
          localStorage.setItem('userEmail', email);
          this.router.navigate(['/builder']);
        } else {
          // Error - show message
          this.errorMessage =
            'Invalid email or password. Try demo@resumebuilder.com / demo123';
        }
      }, 1500);
    } else {
      // Mark all fields as touched to show validation errors
      this.signinForm.markAllAsTouched();
    }
  }

  onSignUp() {
    // For now, just show alert - in real app would navigate to signup
    alert('Sign up functionality would be implemented here!');
  }

  onForgotPassword() {
    // For now, just show alert - in real app would navigate to forgot password
    alert('Forgot password functionality would be implemented here!');
  }
}
