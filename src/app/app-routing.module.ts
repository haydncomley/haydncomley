import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProjects } from './data/data-projects';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'today',
        pathMatch: 'full'
      },
      {
        matcher: (url) => {
          if (url.length !== 2) return null;
          if (url[0].path !== 'project') return null;
          if (!AllProjects.find((x) => x.name.toLowerCase() === url[1].path)) return null;
          return { consumed: url };
        },
        component: HomeComponent
      }
    ]
  },
  {
    path: 'about',
    component: HomeComponent
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
