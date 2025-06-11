import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-template2',
  imports: [],
  templateUrl: './resume-template2.component.html',
  styleUrl: './resume-template2.component.css'
})
export class ResumeTemplate2Component {
  @Input() formData: any;
}
