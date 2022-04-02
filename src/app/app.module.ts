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
import { AttendanceComponent } from './attendance/attendance.component';
import { AssessmentsComponent } from './assessments/assessments.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AttendanceCalendarComponent } from './attendance-calendar/attendance-calendar.component'
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { AssessmentsListComponent } from './assessments-list/assessments-list.component'; // a plugin!

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin
]);


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    StudentDashboardComponent,
    StudentOptionComponent,
    CoursesEnrolledComponent,
    SemestersListComponent,
    NavbarComponent,
    AttendanceComponent,
    AssessmentsComponent,
    SignUpPageComponent,
    AttendanceCalendarComponent,
    AssessmentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatTableModule,
    MatIconModule,
    MatDatepickerModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
