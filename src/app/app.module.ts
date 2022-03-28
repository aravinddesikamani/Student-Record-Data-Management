import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentOptionComponent } from './student-option/student-option.component';
import { CoursesEnrolledComponent } from './courses-enrolled/courses-enrolled.component';
import { SemestersListComponent } from './courses-enrolled/semesters-list/semesters-list.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    StudentDashboardComponent,
    StudentOptionComponent,
    CoursesEnrolledComponent,
    SemestersListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
