import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume-template18',
  imports: [CommonModule],
  templateUrl: './resume-template18.component.html',
  styleUrl: './resume-template18.component.css',
})
export class ResumeTemplate18Component {
  @Input() formData: any;

  // Helper method to get skills as array
  getSkills(): string[] {
    if (!this.formData?.skills) return [];
    if (Array.isArray(this.formData.skills)) {
      return this.formData.skills;
    }
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
