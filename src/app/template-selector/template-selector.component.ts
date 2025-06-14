import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
  imports: [CommonModule, FormsModule],
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
      premium: false,
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
      premium: false,
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
      premium: false,
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
      premium: false,
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
      premium: false,
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
      premium: false,
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
      premium: false,
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
      premium: false,
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
      premium: false,
      popularity: 81,
      thumbnail: 'assets/templates/template14-thumb.jpg',
      preview: 'assets/templates/template14-preview.jpg',
    },
    {
      id: 'template15',
      name: 'Formal',
      category: 'traditional',
      description: 'Formal business document style',
      features: ['Formal Style', 'Business Document', 'Professional'],
      premium: false,
      popularity: 83,
      thumbnail: 'assets/templates/template15-thumb.jpg',
      preview: 'assets/templates/template15-preview.jpg',
    },

    // Academic Templates
    {
      id: 'template16',
      name: 'Scholar',
      category: 'academic',
      description: 'Perfect for academic and research positions',
      features: ['Academic Format', 'Research-focused', 'Detailed Layout'],
      premium: true,
      popularity: 78,
      thumbnail: 'assets/templates/template16-thumb.jpg',
      preview: 'assets/templates/template16-preview.jpg',
    },
    {
      id: 'template17',
      name: 'Research',
      category: 'academic',
      description: 'Comprehensive layout for researchers',
      features: ['Research Layout', 'Comprehensive', 'Academic'],
      premium: true,
      popularity: 76,
      thumbnail: 'assets/templates/template17-thumb.jpg',
      preview: 'assets/templates/template17-preview.jpg',
    },
    {
      id: 'template18',
      name: 'Professor',
      category: 'academic',
      description: 'Designed for faculty and educators',
      features: ['Faculty Design', 'Educational', 'Comprehensive'],
      premium: true,
      popularity: 77,
      thumbnail: 'assets/templates/template18-thumb.jpg',
      preview: 'assets/templates/template18-preview.jpg',
    },

    // Additional Modern Templates
    {
      id: 'template19',
      name: 'Fusion',
      category: 'modern',
      description: 'Blend of modern and professional elements',
      features: ['Fusion Design', 'Modern Professional', 'Balanced'],
      premium: true,
      popularity: 85,
      thumbnail: 'assets/templates/template19-thumb.jpg',
      preview: 'assets/templates/template19-preview.jpg',
    },
    {
      id: 'template20',
      name: 'Nexus',
      category: 'modern',
      description: 'Next-generation resume design',
      features: ['Next-gen Design', 'Innovative Layout', 'Modern'],
      premium: true,
      popularity: 87,
      thumbnail: 'assets/templates/template20-thumb.jpg',
      preview: 'assets/templates/template20-preview.jpg',
    },
    {
      id: 'template21',
      name: 'Digital',
      category: 'creative',
      description: 'Perfect for digital professionals',
      features: ['Digital Design', 'Tech-oriented', 'Modern Elements'],
      premium: false,
      popularity: 80,
      thumbnail: 'assets/templates/template21-thumb.jpg',
      preview: 'assets/templates/template21-preview.jpg',
    },
    {
      id: 'template22',
      name: 'Elegant',
      category: 'professional',
      description: 'Sophisticated and elegant design',
      features: ['Sophisticated', 'Elegant Design', 'Professional'],
      premium: true,
      popularity: 88,
      thumbnail: 'assets/templates/template22-thumb.jpg',
      preview: 'assets/templates/template22-preview.jpg',
    },
  ];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.formData = navigation?.extras?.state?.['formData'] || {};
  }

  ngOnInit() {
    // Sort templates by popularity by default
    this.templates.sort((a, b) => b.popularity - a.popularity);
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
