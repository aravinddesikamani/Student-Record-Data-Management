import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentOptionComponent } from './student-option/student-option.component';
import { CoursesEnrolledComponent } from './courses-enrolled/courses-enrolled.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    StudentDashboardComponent,
    StudentOptionComponent,
    CoursesEnrolledComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
