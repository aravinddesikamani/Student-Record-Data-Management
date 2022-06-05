import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { StudentDataManagementService } from '../services/student-data-management.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() isLoggedIn!: boolean;
  logString!: string;
  username!: string;
  constructor(private router: Router, private studentDataManagementService: StudentDataManagementService) { 
    
  }

  async ngOnInit() {
    let _uname:any = '';
    await this.studentDataManagementService.getUserName().then(function (uname) {_uname = uname});
    console.log(_uname);
    let courses: any;
    await this.studentDataManagementService.getCoursesEnrolled().then(function(_courses: any){courses = _courses});
    console.log(courses);
    this.username = _uname;
    if(this.isLoggedIn){
      this.logString = "Log out";
    }
    else{
      this.logString = "Log in";
    }
  }

  toggleLog(){
    console.log("Event working!")
    this.isLoggedIn = !this.isLoggedIn;
    this.router.navigate(['/home']);
  }

}
