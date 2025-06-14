import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

declare global {
  interface Window {
    google: any;
  }
}

@Injectable({
  providedIn: 'root',
})
export class GoogleOAuthService {
  private clientId = environment.googleClientId;

  constructor() {}

  initializeGoogleSignIn(): Promise<void> {
    return new Promise((resolve) => {
      if (typeof window !== 'undefined' && window.google) {
        window.google.accounts.id.initialize({
          client_id: this.clientId,
          callback: this.handleCredentialResponse.bind(this),
          auto_select: false,
          cancel_on_tap_outside: true,
        });
        resolve();
      } else {
        // Wait for Google script to load
        const checkGoogle = setInterval(() => {
          if (window.google) {
            clearInterval(checkGoogle);
            window.google.accounts.id.initialize({
              client_id: this.clientId,
              callback: this.handleCredentialResponse.bind(this),
              auto_select: false,
              cancel_on_tap_outside: true,
            });
            resolve();
          }
        }, 100);
      }
    });
  }

  private handleCredentialResponse(response: any): void {
    // This will be overridden by the component
    console.log('Google credential response:', response);
  }

  setCredentialHandler(handler: (response: any) => void): void {
    this.handleCredentialResponse = handler;
  }

  renderButton(element: HTMLElement, options?: any): void {
    if (window.google) {
      window.google.accounts.id.renderButton(element, {
        theme: 'outline',
        size: 'large',
        width: '100%',
        text: 'signin_with',
        shape: 'rectangular',
        logo_alignment: 'left',
        ...options,
      });
    }
  }

  signOut(): Promise<void> {
    return new Promise((resolve) => {
      if (window.google) {
        window.google.accounts.id.disableAutoSelect();
        // Clear any stored authentication
        localStorage.removeItem('google_user');
        localStorage.removeItem('isAuthenticated');
        resolve();
      } else {
        resolve();
      }
    });
  }

  decodeJWT(token: string): any {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Error decoding JWT:', error);
      return null;
    }
  }
}
