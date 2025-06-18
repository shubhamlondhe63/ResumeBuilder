import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ResumeTemplate1Component } from '../templates/resume-template1/resume-template1.component';
import { ResumeTemplate2Component } from '../templates/resume-template2/resume-template2.component';
import { ResumeTemplate3Component } from '../templates/resume-template3/resume-template3.component';
import { ResumeTemplate4Component } from '../templates/resume-template4/resume-template4.component';
import { ResumeTemplate5Component } from '../templates/resume-template5/resume-template5.component';
import { ResumeTemplate6Component } from '../templates/resume-template6/resume-template6.component';
import { ResumeTemplate7Component } from '../templates/resume-template7/resume-template7.component';
import { ResumeTemplate8Component } from '../templates/resume-template8/resume-template8.component';
import { ResumeTemplate9Component } from '../templates/resume-template9/resume-template9.component';
import { ResumeTemplate10Component } from '../templates/resume-template10/resume-template10.component';
import { ResumeTemplate11Component } from '../templates/resume-template11/resume-template11.component';
import { ResumeTemplate12Component } from '../templates/resume-template12/resume-template12.component';
import { ResumeTemplate13Component } from '../templates/resume-template13/resume-template13.component';
import { ResumeTemplate14Component } from '../templates/resume-template14/resume-template14.component';
import { ResumeTemplate15Component } from '../templates/resume-template15/resume-template15.component';
import { ResumeTemplate16Component } from '../templates/resume-template16/resume-template16.component';
import { ResumeTemplate17Component } from '../templates/resume-template17/resume-template17.component';
import { ResumeTemplate18Component } from '../templates/resume-template18/resume-template18.component';

interface Template {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  premium: boolean;
  popularity: number;
  thumbnail: string;
  preview: string;
}

@Component({
  selector: 'app-template-selector',
  imports: [
    CommonModule,
    FormsModule,
    ResumeTemplate1Component,
    ResumeTemplate2Component,
    ResumeTemplate3Component,
    ResumeTemplate4Component,
    ResumeTemplate5Component,
    ResumeTemplate6Component,
    ResumeTemplate7Component,
    ResumeTemplate8Component,
    ResumeTemplate9Component,
    ResumeTemplate10Component,
    ResumeTemplate11Component,
    ResumeTemplate12Component,
    ResumeTemplate13Component,
    ResumeTemplate14Component,
    ResumeTemplate15Component,
    ResumeTemplate16Component,
    ResumeTemplate17Component,
    ResumeTemplate18Component,
  ],
  templateUrl: './template-selector.component.html',
  styleUrl: './template-selector.component.css',
})
export class TemplateSelectorComponent implements OnInit {
  formData: any;
  selectedTemplate: string | null = null;
  searchTerm = '';
  selectedCategory = 'all';
  currentPage = 1;
  templatesPerPage = 12;
  isPreviewMode = false;

  categories = [
    { id: 'all', name: 'All Templates', icon: '📄' },
    { id: 'modern', name: 'Modern', icon: '✨' },
    { id: 'professional', name: 'Professional', icon: '💼' },
    { id: 'creative', name: 'Creative', icon: '🎨' },
    { id: 'minimalist', name: 'Minimalist', icon: '⚪' },
    { id: 'traditional', name: 'Traditional', icon: '📋' },
    { id: 'academic', name: 'Academic', icon: '🎓' },
  ];

  templates: Template[] = [
    // Modern Templates
    {
      id: 'template1',
      name: 'Phoenix',
      category: 'modern',
      description: 'Clean modern design with bold typography',
      features: ['Modern Layout', 'Bold Typography', 'Color Accents'],
      premium: true,
      popularity: 95,
      thumbnail: 'assets/templates/template1-thumb.jpg',
      preview: 'assets/templates/template1-preview.jpg',
    },
    {
      id: 'template2',
      name: 'Horizon',
      category: 'modern',
      description: 'Contemporary style with elegant spacing',
      features: ['Contemporary Design', 'Elegant Spacing', 'Professional'],
      premium: true,
      popularity: 88,
      thumbnail: 'assets/templates/template2-thumb.jpg',
      preview: 'assets/templates/template2-preview.jpg',
    },
    {
      id: 'template3',
      name: 'Aurora',
      category: 'modern',
      description: 'Sophisticated two-column layout with gradients',
      features: ['Two-Column Layout', 'Gradient Design', 'Modern Icons'],
      premium: true,
      popularity: 92,
      thumbnail: 'assets/templates/template3-thumb.jpg',
      preview: 'assets/templates/template3-preview.jpg',
    },

    // Professional Templates
    {
      id: 'template4',
      name: 'Executive',
      category: 'professional',
      description: 'Corporate-ready design for executives',
      features: ['Corporate Style', 'Executive Layout', 'Premium Feel'],
      premium: true,
      popularity: 87,
      thumbnail: 'assets/templates/template4-thumb.jpg',
      preview: 'assets/templates/template4-preview.jpg',
    },
    {
      id: 'template5',
      name: 'Corporate',
      category: 'professional',
      description: 'Traditional business format',
      features: ['Business Format', 'Clean Lines', 'Professional'],
      premium: true,
      popularity: 85,
      thumbnail: 'assets/templates/template5-thumb.jpg',
      preview: 'assets/templates/template5-preview.jpg',
    },
    {
      id: 'template6',
      name: 'Distinguished',
      category: 'professional',
      description: 'Refined professional appearance',
      features: ['Refined Design', 'Professional', 'Elegant'],
      premium: true,
      popularity: 90,
      thumbnail: 'assets/templates/template6-thumb.jpg',
      preview: 'assets/templates/template6-preview.jpg',
    },

    // Creative Templates
    {
      id: 'template7',
      name: 'Artistic',
      category: 'creative',
      description: 'Perfect for designers and creatives',
      features: ['Creative Layout', 'Artistic Elements', 'Unique Design'],
      premium: true,
      popularity: 82,
      thumbnail: 'assets/templates/template7-thumb.jpg',
      preview: 'assets/templates/template7-preview.jpg',
    },
    {
      id: 'template8',
      name: 'Vibrant',
      category: 'creative',
      description: 'Colorful design for creative professionals',
      features: ['Colorful Design', 'Creative Elements', 'Eye-catching'],
      premium: true,
      popularity: 79,
      thumbnail: 'assets/templates/template8-thumb.jpg',
      preview: 'assets/templates/template8-preview.jpg',
    },
    {
      id: 'template9',
      name: 'Innovation',
      category: 'creative',
      description: 'Innovative layout for tech professionals',
      features: ['Innovative Design', 'Tech-focused', 'Modern Elements'],
      premium: true,
      popularity: 86,
      thumbnail: 'assets/templates/template9-thumb.jpg',
      preview: 'assets/templates/template9-preview.jpg',
    },

    // Minimalist Templates
    {
      id: 'template10',
      name: 'Zen',
      category: 'minimalist',
      description: 'Clean and simple minimalist design',
      features: ['Minimalist', 'Clean Lines', 'Simple Layout'],
      premium: true,
      popularity: 91,
      thumbnail: 'assets/templates/template10-thumb.jpg',
      preview: 'assets/templates/template10-preview.jpg',
    },
    {
      id: 'template11',
      name: 'Pure',
      category: 'minimalist',
      description: 'Ultra-clean design with focus on content',
      features: ['Ultra-clean', 'Content-focused', 'Minimal Design'],
      premium: true,
      popularity: 88,
      thumbnail: 'assets/templates/template11-thumb.jpg',
      preview: 'assets/templates/template11-preview.jpg',
    },
    {
      id: 'template12',
      name: 'Essential',
      category: 'minimalist',
      description: 'Essential elements only, maximum impact',
      features: ['Essential Elements', 'Maximum Impact', 'Clean'],
      premium: true,
      popularity: 89,
      thumbnail: 'assets/templates/template12-thumb.jpg',
      preview: 'assets/templates/template12-preview.jpg',
    },

    // Traditional Templates
    {
      id: 'template13',
      name: 'Classic',
      category: 'traditional',
      description: 'Timeless traditional resume format',
      features: ['Traditional Format', 'Timeless Design', 'Professional'],
      premium: true,
      popularity: 84,
      thumbnail: 'assets/templates/template13-thumb.jpg',
      preview: 'assets/templates/template13-preview.jpg',
    },
    {
      id: 'template14',
      name: 'Heritage',
      category: 'traditional',
      description: 'Classic business style with modern touches',
      features: ['Classic Style', 'Business Format', 'Modern Touches'],
      premium: true,
      popularity: 83,
      thumbnail: 'assets/templates/template14-thumb.jpg',
      preview: 'assets/templates/template14-preview.jpg',
    },
    {
      id: 'template15',
      name: 'Legacy',
      category: 'traditional',
      description: 'Traditional format with professional appeal',
      features: ['Traditional Format', 'Professional Appeal', 'Classic Design'],
      premium: true,
      popularity: 85,
      thumbnail: 'assets/templates/template15-thumb.jpg',
      preview: 'assets/templates/template15-preview.jpg',
    },

    // Academic Templates
    {
      id: 'template16',
      name: 'Scholar',
      category: 'academic',
      description: 'Perfect for academic and research positions',
      features: ['Academic Focus', 'Research-oriented', 'Professional'],
      premium: true,
      popularity: 81,
      thumbnail: 'assets/templates/template16-thumb.jpg',
      preview: 'assets/templates/template16-preview.jpg',
    },
    {
      id: 'template17',
      name: 'Research',
      category: 'academic',
      description: 'Research-focused design for academics',
      features: ['Research-focused', 'Academic Style', 'Publication-ready'],
      premium: true,
      popularity: 87,
      thumbnail: 'assets/templates/template17-thumb.jpg',
      preview: 'assets/templates/template17-preview.jpg',
    },
    {
      id: 'template18',
      name: 'Academic',
      category: 'academic',
      description: 'Traditional academic format',
      features: ['Academic Format', 'Traditional Style', 'Professional'],
      premium: true,
      popularity: 79,
      thumbnail: 'assets/templates/template18-thumb.jpg',
      preview: 'assets/templates/template18-preview.jpg',
    },
  ];

  constructor(private router: Router) {
    // Get form data from router state
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.formData = navigation.extras.state['formData'];
    }
  }

  ngOnInit() {
    // If no form data is available, generate sample data for previews
    if (!this.formData) {
      this.formData = this.generateSampleData();
    }
  }

  // Generate sample data for previews when no form data is available
  generateSampleData() {
    return {
      fullName: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+1 (555) 123-4567',
      role: 'Senior Software Engineer',
      skills: [
        'JavaScript',
        'TypeScript',
        'React',
        'Angular',
        'Node.js',
        'Python',
        'AWS',
        'Docker',
      ],
      experience: [
        {
          jobTitle: 'Senior Software Engineer',
          company: 'Tech Solutions Inc.',
          fromYear: '2020',
          toYear: '2023',
          isPresent: false,
          description:
            'Led development of scalable web applications using React and Node.js. Managed a team of 5 developers and implemented CI/CD pipelines.',
        },
        {
          jobTitle: 'Software Developer',
          company: 'Innovation Labs',
          fromYear: '2018',
          toYear: '2020',
          isPresent: false,
          description:
            'Developed full-stack applications using Angular and Python. Collaborated with cross-functional teams to deliver high-quality software.',
        },
      ],
      education: [
        {
          degree: 'Bachelor of Science in Computer Science',
          institute: 'University of Technology',
          fromYear: '2014',
          toYear: '2018',
          isPresent: false,
          location: 'New York, NY',
        },
      ],
    };
  }

  get filteredTemplates(): Template[] {
    let filtered = this.templates;

    // Filter by category
    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(
        (template) => template.category === this.selectedCategory
      );
    }

    // Filter by search term
    if (this.searchTerm) {
      const searchLower = this.searchTerm.toLowerCase();
      filtered = filtered.filter(
        (template) =>
          template.name.toLowerCase().includes(searchLower) ||
          template.description.toLowerCase().includes(searchLower) ||
          template.features.some((feature) =>
            feature.toLowerCase().includes(searchLower)
          )
      );
    }

    return filtered;
  }

  get paginatedTemplates(): Template[] {
    const startIndex = (this.currentPage - 1) * this.templatesPerPage;
    const endIndex = startIndex + this.templatesPerPage;
    return this.filteredTemplates.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredTemplates.length / this.templatesPerPage);
  }

  get pages(): number[] {
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;
    const pages: number[] = [];

    // Show max 5 pages
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);

    if (endPage - startPage < 4) {
      startPage = Math.max(1, endPage - 4);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }

  selectTemplate(templateId: string) {
    this.selectedTemplate = templateId;
    this.isPreviewMode = true;
  }

  closePreview() {
    this.isPreviewMode = false;
    this.selectedTemplate = null;
  }

  selectCategory(categoryId: string) {
    this.selectedCategory = categoryId;
    this.currentPage = 1;
  }

  onSearchChange() {
    this.currentPage = 1;
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  getTemplate(templateId: string): Template | undefined {
    return this.templates.find((t) => t.id === templateId);
  }

  getCategoryCount(categoryId: string): number {
    if (categoryId === 'all') {
      return this.templates.length;
    }
    return this.templates.filter((t) => t.category === categoryId).length;
  }

  useTemplate(templateId: string) {
    // Logic to use the selected template
    console.log('Using template:', templateId);
    // Navigate to download or further customization
    this.router.navigate(['/builder'], {
      state: {
        formData: this.formData,
        selectedTemplate: templateId,
      },
    });
  }

  downloadTemplate(templateId: string) {
    // Logic to download the template
    console.log('Downloading template:', templateId);
    // Implement download functionality
  }
}
