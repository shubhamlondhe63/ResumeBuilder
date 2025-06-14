import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;
  isAuthenticated = false;
  userEmail = '';
  currentRoute = '';

  navLinks = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/builder', label: 'Resume Builder', icon: '📝' },
    { path: '/template-selector', label: 'Templates', icon: '🎨' },
    { path: '/tips', label: 'ATS Tips', icon: '💡' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    // Check authentication status
    this.checkAuthStatus();

    // Listen to route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 20;
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    if (window.innerWidth > 768) {
      this.isMobileMenuOpen = false;
    }
  }

  checkAuthStatus() {
    this.isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    this.userEmail = localStorage.getItem('userEmail') || '';
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  onSignIn() {
    this.router.navigate(['/signin']);
    this.closeMobileMenu();
  }

  onSignOut() {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    this.isAuthenticated = false;
    this.userEmail = '';
    this.router.navigate(['/']);
    this.closeMobileMenu();
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
    this.closeMobileMenu();
  }

  isActiveRoute(path: string): boolean {
    if (path === '/') {
      return this.currentRoute === '/';
    }
    return this.currentRoute.startsWith(path);
  }

  getUserInitial(): string {
    return this.userEmail ? this.userEmail.charAt(0).toUpperCase() : 'U';
  }
}
