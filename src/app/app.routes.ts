import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { TemplateSelectorComponent } from './template-selector/template-selector.component';
import { SigninComponent } from './signin/signin.component';
import { TipsComponent } from './tips/tips.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'builder', component: ResumeBuilderComponent },
  { path: 'template-selector', component: TemplateSelectorComponent },
  { path: 'tips', component: TipsComponent },
  { path: '**', redirectTo: '' },
];
