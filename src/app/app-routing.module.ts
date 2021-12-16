import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProjects } from './data/data-projects';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project/project.component';
import { PrototypesComponent } from './pages/prototypes/prototypes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      animation: 'Home',
      subtitle: null,
    }
  },
  {
    path: 'prototypes',
    component: PrototypesComponent,
    data: {
      animation: 'Prototypes',
      subtitle: 'Prototypes',
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      animation: 'About',
      subtitle: 'About',
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
      subtitle: 'Contact',
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
    path: 'prototypes/:projectName',
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
