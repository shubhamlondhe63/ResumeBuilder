import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume-template3',
  imports: [CommonModule],
  templateUrl: './resume-template3.component.html',
  styleUrl: './resume-template3.component.css',
})
export class ResumeTemplate3Component {
  @Input() formData: any;

  getInitials(): string {
    if (!this.formData?.fullName) {
      return 'NA';
    }
    return this.formData.fullName
      .split(' ')
      .map((name: string) => name.charAt(0).toUpperCase())
      .join('');
  }

  // Helper method to get skills as array
  getSkills(): string[] {
    if (!this.formData?.skills) return [];
    if (Array.isArray(this.formData.skills)) {
      return this.formData.skills;
    }
    // If skills is a string, split by comma
    return this.formData.skills
      .split(',')
      .map((s: string) => s.trim())
      .filter((s: string) => s);
  }

  // Helper method to get duration text
  getDurationText(fromYear: any, toYear: any, isPresent: boolean): string {
    if (!fromYear) return '';
    return `${fromYear} - ${isPresent ? 'Present' : toYear || 'Ongoing'}`;
  }
}
