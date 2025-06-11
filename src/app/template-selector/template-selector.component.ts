import { Component, Input } from '@angular/core';
import { ResumeTemplate1Component } from '../templates/resume-template1/resume-template1.component';
import { ResumeTemplate2Component } from '../templates/resume-template2/resume-template2.component';
import { ResumeTemplate3Component } from '../templates/resume-template3/resume-template3.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-template-selector',
  imports: [
    CommonModule,
    ResumeTemplate1Component,
    ResumeTemplate2Component,
    ResumeTemplate3Component,
  ],
  templateUrl: './template-selector.component.html',
  styleUrl: './template-selector.component.css',
})
export class TemplateSelectorComponent {
  @Input() formData: any;
  selectedTemplate = 'template3';

  constructor(private route: ActivatedRoute) {
    this.formData = this.route.snapshot.data['formData'];
    console.log(this.formData);
    this.formData = {
      fullName: 'Shubham Londhe',
      email: 'shubhamlondhe@example.com',
      phone: '+91 9876543210',
      role: 'Frontend Developer',
      summary:
        'Frontend Developer with 2.5+ years of experience building scalable Angular applications. Strong in responsive design, API integration, and performance optimization. Passionate about UI/UX and clean code practices.',

      experience: [
        {
          jobTitle: 'Software Engineer',
          company: 'Epps Infotech',
          duration: 'Jan 2023 – Present',
          description:
            'Developed and maintained Angular applications focusing on performance, usability, and responsive UI.',
        },
        {
          jobTitle: 'Frontend Developer Intern',
          company: 'TechNova Solutions',
          duration: 'Jul 2022 – Dec 2022',
          description:
            'Built interactive UI components and optimized application performance using Angular and RxJS.',
        },
      ],

      skills: [
        'Angular 16',
        'JavaScript / TypeScript',
        'HTML5 / CSS3',
        'Responsive Design',
        'RxJS & Observables',
        'REST API Integration',
        'Git & Version Control',
        'Bootstrap / Tailwind CSS',
        'Unit Testing (Jasmine, Karma)',
        'Agile & Scrum Methodologies',
      ],

      projects: [
        {
          title: 'Task Management App',
          description:
            'A full-stack task management app using Angular, Node.js, and MongoDB. Implemented role-based access and reusable components.',
          link: 'https://github.com/shubham/task-manager',
        },
        {
          title: 'Resume Builder',
          description:
            'A dynamic resume builder tool that allows users to generate ATS-friendly resumes with multiple templates and export as PDF.',
          link: '',
        },
      ],

      education: [
        {
          degree: 'Bachelor of Engineering in Computer Science',
          institute: 'Savitribai Phule Pune University',
          duration: '2018 – 2022',
          location: 'Pune, India',
        },
      ],

      certifications: [
        {
          name: 'Frontend Development with Angular',
          issuer: 'Coursera / Meta',
          year: '2023',
        },
        {
          name: 'Responsive Web Design',
          issuer: 'freeCodeCamp',
          year: '2022',
        },
      ],

      languages: ['English', 'Hindi', 'Marathi'],
    };
  }

  selectTemplate(template: string): void {
    this.selectedTemplate = template;
  }
}
