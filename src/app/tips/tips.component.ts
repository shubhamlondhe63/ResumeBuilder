import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tips',
  imports: [CommonModule],
  templateUrl: './tips.component.html',
  styleUrl: './tips.component.css',
})
export class TipsComponent {
  constructor(private router: Router) {}

  navigateToBuilder(): void {
    this.router.navigate(['/builder']);
  }

  navigateToTemplates(): void {
    this.router.navigate(['/template-selector']);
  }
}
