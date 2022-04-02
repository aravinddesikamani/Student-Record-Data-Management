import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AssessmentsComponent } from './assessments/assessments.component';
import { AttendanceCalendarComponent } from './attendance-calendar/attendance-calendar.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { CoursesEnrolledComponent } from './courses-enrolled/courses-enrolled.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';

const routes: Routes = [
  { path: 'home', component: StudentDashboardComponent },
  {path: 'courses-enrolled', component: CoursesEnrolledComponent},
  {path: 'courses-enrolled/:id', component: AttendanceCalendarComponent},
  {path: 'attendance', component: AttendanceComponent},
  {path: 'attendance/:course_name', component: AttendanceCalendarComponent},
  {path: 'assessment', component: AssessmentsComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'signup', component:SignUpPageComponent},
  { path: '**', component: StudentDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router){};
 }