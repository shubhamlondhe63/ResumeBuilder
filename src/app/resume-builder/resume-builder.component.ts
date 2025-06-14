import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-builder',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './resume-builder.component.html',
  styleUrl: './resume-builder.component.css',
})
export class ResumeBuilderComponent {
  resumeForm: FormGroup;
  currentTab: number = 0;

  // Generate years from 1980 to current year + 5
  years: number[] = [];
  currentYear = new Date().getFullYear();

  // Skills suggestions
  showSkillSuggestions = false;
  skillSuggestions: string[] = [];
  currentSkillInput = ''; // For manual skill input
  allSkills: string[] = [
    // Programming Languages
    'JavaScript',
    'TypeScript',
    'Python',
    'Java',
    'C#',
    'C++',
    'PHP',
    'Ruby',
    'Go',
    'Rust',
    'Swift',
    'Kotlin',
    'Dart',
    'Scala',
    'R',
    'MATLAB',
    'SQL',
    'HTML',
    'CSS',
    'Sass',
    'Less',

    // Frontend Technologies
    'React',
    'Angular',
    'Vue.js',
    'Svelte',
    'React Native',
    'Flutter',
    'Ionic',
    'Bootstrap',
    'Tailwind CSS',
    'Material UI',
    'Ant Design',
    'Chakra UI',
    'Next.js',
    'Nuxt.js',
    'Gatsby',
    'Webpack',
    'Vite',
    'Parcel',
    'Redux',
    'MobX',
    'Zustand',
    'RxJS',

    // Backend Technologies
    'Node.js',
    'Express.js',
    'Django',
    'Flask',
    'FastAPI',
    'Spring Boot',
    'ASP.NET',
    'Laravel',
    'Ruby on Rails',
    'Phoenix',
    'Gin',
    'Fiber',
    'NestJS',
    'Koa.js',
    'Hapi.js',

    // Databases
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'SQLite',
    'Oracle',
    'SQL Server',
    'Firebase',
    'Supabase',
    'DynamoDB',
    'Cassandra',
    'Neo4j',
    'InfluxDB',
    'ElasticSearch',

    // Cloud & DevOps
    'AWS',
    'Azure',
    'Google Cloud',
    'Docker',
    'Kubernetes',
    'Jenkins',
    'GitLab CI',
    'GitHub Actions',
    'Terraform',
    'Ansible',
    'Chef',
    'Puppet',
    'Vagrant',
    'CircleCI',
    'Travis CI',
    'Heroku',
    'Vercel',
    'Netlify',
    'DigitalOcean',
    'Linode',

    // Tools & Software
    'Git',
    'GitHub',
    'GitLab',
    'Bitbucket',
    'Jira',
    'Confluence',
    'Slack',
    'Discord',
    'Figma',
    'Adobe XD',
    'Sketch',
    'InVision',
    'Zeplin',
    'Postman',
    'Insomnia',
    'VSCode',
    'IntelliJ',
    'Eclipse',
    'Sublime Text',
    'Vim',
    'Emacs',

    // Mobile Development
    'React Native',
    'Flutter',
    'Swift',
    'Kotlin',
    'Xamarin',
    'Ionic',
    'Cordova',
    'PhoneGap',

    // Data Science & AI
    'Machine Learning',
    'Deep Learning',
    'TensorFlow',
    'PyTorch',
    'Scikit-learn',
    'Pandas',
    'NumPy',
    'Matplotlib',
    'Seaborn',
    'Jupyter',
    'Apache Spark',
    'Hadoop',
    'Kafka',
    'Airflow',
    'MLflow',
    'Kubeflow',

    // Testing
    'Jest',
    'Mocha',
    'Chai',
    'Cypress',
    'Selenium',
    'Playwright',
    'TestCafe',
    'Puppeteer',
    'JUnit',
    'TestNG',
    'PyTest',
    'RSpec',
    'PHPUnit',

    // Soft Skills
    'Leadership',
    'Team Management',
    'Project Management',
    'Communication',
    'Problem Solving',
    'Critical Thinking',
    'Creativity',
    'Adaptability',
    'Time Management',
    'Collaboration',
    'Mentoring',
    'Public Speaking',
    'Presentation Skills',
    'Negotiation',
    'Customer Service',
    'Strategic Planning',
    'Analytical Thinking',
    'Decision Making',
    'Conflict Resolution',

    // Methodologies
    'Agile',
    'Scrum',
    'Kanban',
    'Waterfall',
    'DevOps',
    'CI/CD',
    'TDD',
    'BDD',
    'DDD',
    'Microservices',
    'RESTful APIs',
    'GraphQL',
    'SOAP',
    'OAuth',
    'JWT',

    // Design & UX
    'UI/UX Design',
    'User Research',
    'Wireframing',
    'Prototyping',
    'User Testing',
    'Design Systems',
    'Responsive Design',
    'Accessibility',
    'Information Architecture',

    // Business & Management
    'Business Analysis',
    'Product Management',
    'Marketing',
    'Sales',
    'Finance',
    'Accounting',
    'Operations',
    'Supply Chain',
    'Quality Assurance',
    'Risk Management',
    'Compliance',

    // Certifications
    'AWS Certified',
    'Azure Certified',
    'Google Cloud Certified',
    'PMP',
    'Scrum Master',
    'Product Owner',
    'CISSP',
    'CISA',
    'CISM',
    'CompTIA Security+',
  ];

  tabs = [
    {
      id: 0,
      name: 'Personal Info',
      icon: '👤',
      description: 'Basic information',
    },
    { id: 1, name: 'Experience', icon: '💼', description: 'Work history' },
    {
      id: 2,
      name: 'Education',
      icon: '🎓',
      description: 'Educational background',
    },
    {
      id: 3,
      name: 'Skills',
      icon: '⚡',
      description: 'Technical & soft skills',
    },
    { id: 4, name: 'Review', icon: '👁️', description: 'Final review' },
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    // Generate years array
    for (let year = 1980; year <= this.currentYear + 5; year++) {
      this.years.push(year);
    }
    this.years.reverse(); // Show newest years first

    this.resumeForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      summary: [''],
      experience: this.fb.array([this.createExperience()]),
      education: this.fb.array([this.createEducation()]),
      skills: [''],
    });
  }

  createExperience(): FormGroup {
    return this.fb.group({
      jobTitle: ['', Validators.required],
      company: ['', Validators.required],
      fromYear: ['', Validators.required],
      toYear: ['', Validators.required],
      isPresent: [false],
      description: [''],
    });
  }

  createEducation(): FormGroup {
    return this.fb.group({
      degree: ['', Validators.required],
      institute: ['', Validators.required],
      fromYear: ['', Validators.required],
      toYear: ['', Validators.required],
      isPresent: [false],
      location: [''],
      gpa: [''],
      description: [''],
    });
  }

  get experienceControls(): FormGroup[] {
    return (this.resumeForm.get('experience') as FormArray)
      .controls as FormGroup[];
  }

  get educationControls(): FormGroup[] {
    return (this.resumeForm.get('education') as FormArray)
      .controls as FormGroup[];
  }

  addExperience() {
    (this.resumeForm.get('experience') as FormArray).push(
      this.createExperience()
    );
  }

  removeExperience(index: number) {
    (this.resumeForm.get('experience') as FormArray).removeAt(index);
  }

  addEducation() {
    (this.resumeForm.get('education') as FormArray).push(
      this.createEducation()
    );
  }

  removeEducation(index: number) {
    (this.resumeForm.get('education') as FormArray).removeAt(index);
  }

  // Skills autocomplete functionality
  onSkillsInput(event: any) {
    const input = event.target.value;
    console.log(
      'onSkillsInput called with:',
      input,
      'Current model:',
      this.currentSkillInput
    ); // Debug log

    this.currentSkillInput = input;
    const currentSkills = this.getCurrentSkills();

    console.log('Input event:', input, 'Length:', input.length); // Debug log

    if (input.length >= 2) {
      this.skillSuggestions = this.allSkills
        .filter(
          (skill) =>
            skill.toLowerCase().includes(input.toLowerCase()) &&
            !currentSkills.includes(skill)
        )
        .slice(0, 8); // Show top 8 suggestions

      console.log('Filtered suggestions:', this.skillSuggestions); // Debug log
      this.showSkillSuggestions = this.skillSuggestions.length > 0;
    } else if (input.length === 0) {
      // Show popular skills when field becomes empty
      this.skillSuggestions = [
        'JavaScript',
        'React',
        'Node.js',
        'Python',
        'SQL',
        'Git',
        'Leadership',
        'Communication',
        'Problem Solving',
        'Team Management',
      ].filter((skill) => !currentSkills.includes(skill));
      this.showSkillSuggestions = this.skillSuggestions.length > 0;
    } else {
      this.showSkillSuggestions = false;
    }
  }

  onSkillsFocus() {
    const currentSkills = this.getCurrentSkills();
    console.log(
      'Focus event, current input:',
      this.currentSkillInput,
      'Input length:',
      this.currentSkillInput.length
    ); // Debug log

    if (
      this.currentSkillInput.length === 0 ||
      this.currentSkillInput.length < 2
    ) {
      // Show popular skills when field is empty or has less than 2 characters
      this.skillSuggestions = [
        'JavaScript',
        'React',
        'Node.js',
        'Python',
        'SQL',
        'Git',
        'Leadership',
        'Communication',
        'Problem Solving',
        'Team Management',
      ].filter((skill) => !currentSkills.includes(skill));
      this.showSkillSuggestions = this.skillSuggestions.length > 0;
      console.log(
        'Showing popular skills on focus:',
        this.skillSuggestions.length
      ); // Debug log
    } else {
      // Trigger search for current input
      console.log(
        'Triggering search for existing input:',
        this.currentSkillInput
      ); // Debug log
      this.onSkillsInput({ target: { value: this.currentSkillInput } });
    }
  }

  onSkillsBlur() {
    // Delay hiding suggestions to allow clicking on them
    setTimeout(() => {
      this.showSkillSuggestions = false;
    }, 300);
  }

  selectSkill(selectedSkill: string) {
    console.log('Selecting skill:', selectedSkill); // Debug log

    const currentSkills = this.getCurrentSkills();
    console.log('Current skills before adding:', currentSkills); // Debug log

    // Add the selected skill if it's not already in the list
    if (!currentSkills.includes(selectedSkill)) {
      currentSkills.push(selectedSkill);
      const newValue = currentSkills.join(', ');
      this.resumeForm.get('skills')?.setValue(newValue);
      console.log('New skills value:', newValue); // Debug log
    } else {
      console.log('Skill already exists:', selectedSkill); // Debug log
    }

    // Clear the input and hide suggestions
    this.resetSkillInput();

    // Focus back on input WITHOUT triggering suggestions
    setTimeout(() => {
      const skillsInput = document.querySelector(
        'input[placeholder*="Start typing"]'
      ) as HTMLInputElement;
      if (skillsInput) {
        skillsInput.focus();
        console.log('Input focused after skill selection - suggestions hidden'); // Debug log
      }
    }, 100);
  }

  // Helper method to properly reset the skill input
  resetSkillInput() {
    console.log('Resetting skill input'); // Debug log
    this.currentSkillInput = '';
    this.showSkillSuggestions = false;
    this.skillSuggestions = [];
  }

  getCurrentSkills(): string[] {
    const currentValue = this.resumeForm.get('skills')?.value || '';
    return currentValue
      .split(',')
      .map((s: string) => s.trim())
      .filter((s: string) => s);
  }

  // Remove skill
  removeSkill(skillToRemove: string) {
    const currentSkills = this.getCurrentSkills();
    const updatedSkills = currentSkills.filter(
      (skill) => skill !== skillToRemove
    );
    const newValue = updatedSkills.join(', ');
    this.resumeForm.get('skills')?.setValue(newValue);
  }

  // Handle "Present" checkbox for experience
  onExperiencePresentChange(index: number, isPresent: any) {
    const experienceControl = this.experienceControls[index];
    const actualValue = experienceControl.get('isPresent')?.value;
    if (actualValue) {
      experienceControl.get('toYear')?.setValue('');
      experienceControl.get('toYear')?.disable();
    } else {
      experienceControl.get('toYear')?.enable();
    }
  }

  // Handle "Present" checkbox for education
  onEducationPresentChange(index: number, isPresent: any) {
    const educationControl = this.educationControls[index];
    const actualValue = educationControl.get('isPresent')?.value;
    if (actualValue) {
      educationControl.get('toYear')?.setValue('');
      educationControl.get('toYear')?.disable();
    } else {
      educationControl.get('toYear')?.enable();
    }
  }

  // Get duration display text
  getDurationText(fromYear: any, toYear: any, isPresent: boolean): string {
    if (!fromYear) return 'Duration not set';
    return `${fromYear} - ${isPresent ? 'Present' : toYear || 'Ongoing'}`;
  }

  // Tab navigation methods
  setCurrentTab(tabIndex: number) {
    this.currentTab = tabIndex;
  }

  nextTab() {
    if (this.currentTab < this.tabs.length - 1) {
      this.currentTab++;
    }
  }

  prevTab() {
    if (this.currentTab > 0) {
      this.currentTab--;
    }
  }

  // Validation methods for each tab
  isTabValid(tabIndex: number): boolean {
    switch (tabIndex) {
      case 0: // Personal Info
        const personalControls = ['fullName', 'email', 'phone'];
        return personalControls.every(
          (control) => this.resumeForm.get(control)?.valid || false
        );
      case 1: // Experience
        const experienceArray = this.resumeForm.get('experience') as FormArray;
        return (
          experienceArray.length > 0 &&
          experienceArray.controls.every((control) => {
            const group = control as FormGroup;
            return (
              group.get('jobTitle')?.valid &&
              group.get('company')?.valid &&
              group.get('fromYear')?.valid &&
              (group.get('isPresent')?.value || group.get('toYear')?.valid)
            );
          })
        );
      case 2: // Education
        const educationArray = this.resumeForm.get('education') as FormArray;
        return (
          educationArray.length > 0 &&
          educationArray.controls.every((control) => {
            const group = control as FormGroup;
            return (
              group.get('degree')?.valid &&
              group.get('institute')?.valid &&
              group.get('fromYear')?.valid &&
              (group.get('isPresent')?.value || group.get('toYear')?.valid)
            );
          })
        );
      case 3: // Skills
        return true; // Skills are optional
      case 4: // Review
        return this.resumeForm.valid;
      default:
        return false;
    }
  }

  isTabCompleted(tabIndex: number): boolean {
    switch (tabIndex) {
      case 0: // Personal Info
        return !!(
          this.resumeForm.get('fullName')?.value &&
          this.resumeForm.get('email')?.value &&
          this.resumeForm.get('phone')?.value
        );
      case 1: // Experience
        const experienceArray = this.resumeForm.get('experience') as FormArray;
        return (
          experienceArray.length > 0 &&
          experienceArray.controls.some((control) => {
            const group = control as FormGroup;
            return group.get('jobTitle')?.value && group.get('company')?.value;
          })
        );
      case 2: // Education
        const educationArray = this.resumeForm.get('education') as FormArray;
        return (
          educationArray.length > 0 &&
          educationArray.controls.some((control) => {
            const group = control as FormGroup;
            return group.get('degree')?.value && group.get('institute')?.value;
          })
        );
      case 3: // Skills
        return !!this.resumeForm.get('skills')?.value;
      default:
        return false;
    }
  }

  canProceedToNext(): boolean {
    return this.isTabValid(this.currentTab);
  }

  getProgressPercentage(): number {
    const completedTabs = this.tabs.filter(
      (_, index) => index < 4 && this.isTabCompleted(index)
    ).length;
    return Math.round((completedTabs / 4) * 100);
  }

  onSubmit() {
    if (this.resumeForm.valid) {
      console.log(this.resumeForm.value);
      alert('Resume generated (for now check console)');
    }
    this.router.navigate(['/template-selector'], {
      state: { formData: this.resumeForm.value },
    });
  }
}
