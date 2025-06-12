import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-template3',
  imports: [],
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
}
