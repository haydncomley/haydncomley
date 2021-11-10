import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProjects } from './data/data-projects';
import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project/project.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'Home' }
  },
  {
    path: 'about',
    component: HomeComponent,
    data: { animation: 'About' }
  },
  {
    path: 'contact',
    component: HomeComponent,
    data: { animation: 'Contact' }
  },
  {
    path: 'project/:projectName',
    component: ProjectComponent,
    data: { animation: 'Project' }
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
