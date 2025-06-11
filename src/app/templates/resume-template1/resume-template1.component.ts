import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-template1',
  imports: [],
  templateUrl: './resume-template1.component.html',
  styleUrl: './resume-template1.component.css',
})
export class ResumeTemplate1Component {
  @Input() formData: any;
}
