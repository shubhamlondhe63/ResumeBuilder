import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume-template8',
  imports: [CommonModule],
  templateUrl: './resume-template8.component.html',
  styleUrl: './resume-template8.component.css',
})
export class ResumeTemplate8Component {
  @Input() formData: any;

  // Color palette for vibrant design
  private skillColors = [
    '#FF6B6B',
    '#4ECDC4',
    '#45B7D1',
    '#96CEB4',
    '#FFEAA7',
    '#DDA0DD',
    '#98D8C8',
    '#F7DC6F',
  ];
  private cardColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'];
  private nodeColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'];

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

  // Helper method to get skill color
  getSkillColor(index: number): string {
    return this.skillColors[index % this.skillColors.length];
  }

  // Helper method to get card color
  getCardColor(index: number): string {
    return this.cardColors[index % this.cardColors.length];
  }

  // Helper method to get node color
  getNodeColor(index: number): string {
    return this.nodeColors[index % this.nodeColors.length];
  }
}
