import { Component, OnInit } from '@angular/core';
import { StudentDataManagementService } from 'src/app/services/student-data-management.service';
@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.css']
})
export class AttendanceListComponent implements OnInit {

  constructor( private studentDataManagementService: StudentDataManagementService ) {  }
  allCoursesEnrolledDetails !: any;
  data !: any;
  async ngOnInit(){
    let allCourseDetails!:any[];
    await this.studentDataManagementService.getCoursesEnrolledWithDetails().then(function(adetails:any ){allCourseDetails = adetails})
    allCourseDetails.shift()
    this.allCoursesEnrolledDetails = allCourseDetails
    this.data = [
      {
        semester: 1, year: 2022,  courses: this.allCoursesEnrolledDetails
      }
      
      
    ]
    console.log()

  }
  Object = Object

}
