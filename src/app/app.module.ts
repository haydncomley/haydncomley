import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { AboutModule } from './pages/about/about.module';
import { HomeModule } from './pages/home/home.module';
import { ProjectModule } from './pages/project/project.module';
import { PrototypesModule } from './pages/prototypes/prototypes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    // Components
    NavbarModule,

    // Pages
    HomeModule,
    PrototypesModule,
    ProjectModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
