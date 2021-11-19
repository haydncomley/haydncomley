import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProjects } from './data/data-projects';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project/project.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      animation: 'Home',
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      animation: 'About',
      slimNavigation: true,
      details: {
        header: 'About',
        subtitle: null,
        center: true
      }
    }
  },
  {
    path: 'contact',
    component: AboutComponent,
    data: {
      animation: 'Contact',
      slimNavigation: true,
      details: {
        header: 'Contact',
        subtitle: null,
        center: true
      }
    }
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
