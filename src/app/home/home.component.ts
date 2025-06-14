import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  currentYear: number = new Date().getFullYear();

  constructor(private router: Router) {}

  // Method to handle smooth scrolling to sections
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  // Method to navigate to template selector with specific template
  selectTemplate(templateType: string): void {
    this.router.navigate(['/template-selector'], {
      queryParams: { template: templateType },
    });
  }
}
