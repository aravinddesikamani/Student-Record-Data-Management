import { Component, OnInit } from '@angular/core';
import { StudentDataManagementService } from '../services/student-data-management.service';
@Component({
  selector: 'app-assessments-list',
  templateUrl: './assessments-list.component.html',
  styleUrls: ['./assessments-list.component.css']
})
export class AssessmentsListComponent implements OnInit {

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
