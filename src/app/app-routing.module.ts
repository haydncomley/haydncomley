import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project/project.component';
import { PrototypesComponent } from './pages/prototypes/prototypes.component';

const routes: Routes = [
	{
		component: HomeComponent,
		data: {
			animation: 'Home',
			subtitle: null,
		},
		path: ''
	},
	{
		component: PrototypesComponent,
		data: {
			animation: 'Prototypes',
			subtitle: 'Prototypes',
		},
		path: 'prototypes'
	},
	{
		component: AboutComponent,
		data: {
			animation: 'About',
			details: {
				center: true,
				header: 'About',
				subtitle: null
			},
			slimNavigation: true,
			subtitle: 'About'
		},
		path: 'about'
	},
	{
		component: AboutComponent,
		data: {
			animation: 'Contact',
			details: {
				center: true,
				header: 'Contact',
				subtitle: null
			},
			slimNavigation: true,
			subtitle: 'Contact'
		},
		path: 'contact'
	},
	{
		component: ProjectComponent,
		data: { animation: 'Project' },
		path: 'project/:projectName'
	},
	{
		component: ProjectComponent,
		data: { animation: 'Project' },
		path: 'prototypes/:projectName'
	},
	{
		path: '**',
		redirectTo: '/'
	}
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
