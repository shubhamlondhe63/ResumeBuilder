import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { TemplateSelectorComponent } from './template-selector/template-selector.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'builder', component: ResumeBuilderComponent },
  { path: 'template-selector', component: TemplateSelectorComponent },
];
