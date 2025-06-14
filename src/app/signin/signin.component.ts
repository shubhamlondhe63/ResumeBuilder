import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { GoogleOAuthService } from '../services/google-oauth.service';

@Component({
  selector: 'app-signin',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent implements OnInit, AfterViewInit {
  @ViewChild('googleSigninButton', { static: false })
  googleSigninButton!: ElementRef;
  @ViewChild('googleSignupButton', { static: false })
  googleSignupButton!: ElementRef;

  signinForm: FormGroup;
  isLoading = false;
  showPassword = false;
  errorMessage = '';
  isGoogleLoading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private googleOAuthService: GoogleOAuthService
  ) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });
  }

  ngOnInit(): void {
    this.initializeGoogleAuth();
  }

  ngAfterViewInit(): void {
    // Render Google buttons after view is initialized
    setTimeout(() => {
      this.renderGoogleButtons();
    }, 500);
  }

  private async initializeGoogleAuth(): Promise<void> {
    try {
      await this.googleOAuthService.initializeGoogleSignIn();
      this.googleOAuthService.setCredentialHandler(
        this.handleGoogleResponse.bind(this)
      );
    } catch (error) {
      console.error('Failed to initialize Google Auth:', error);
    }
  }

  private renderGoogleButtons(): void {
    if (this.googleSigninButton?.nativeElement) {
      this.googleOAuthService.renderButton(
        this.googleSigninButton.nativeElement,
        {
          text: 'signin_with',
          theme: 'outline',
          size: 'large',
        }
      );
    }

    if (this.googleSignupButton?.nativeElement) {
      this.googleOAuthService.renderButton(
        this.googleSignupButton.nativeElement,
        {
          text: 'signup_with',
          theme: 'filled_blue',
          size: 'large',
        }
      );
    }
  }

  private handleGoogleResponse(response: any): void {
    try {
      this.isGoogleLoading = true;
      const userInfo = this.googleOAuthService.decodeJWT(response.credential);

      if (userInfo) {
        // Store user information
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem(
          'google_user',
          JSON.stringify({
            id: userInfo.sub,
            email: userInfo.email,
            name: userInfo.name,
            picture: userInfo.picture,
            provider: 'google',
          })
        );
        localStorage.setItem('userEmail', userInfo.email);

        // Show success message
        this.showSuccessMessage('Successfully signed in with Google!');

        // Redirect to builder
        setTimeout(() => {
          this.router.navigate(['/builder']);
        }, 1500);
      }
    } catch (error) {
      console.error('Google sign-in error:', error);
      this.errorMessage = 'Failed to sign in with Google. Please try again.';
    } finally {
      this.isGoogleLoading = false;
    }
  }

  private showSuccessMessage(message: string): void {
    // Clear any existing error
    this.errorMessage = '';

    // You could add a success message state here
    console.log(message);

    // Optional: Show a toast notification
    if (typeof window !== 'undefined') {
      // Simple alert for now - you could replace with a proper toast
      window.alert(message);
    }
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
