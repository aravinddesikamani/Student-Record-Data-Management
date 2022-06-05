import { Component, OnInit } from '@angular/core';
import { StudentDataManagementService } from 'src/app/services/student-data-management.service';
@Component({
  selector: 'app-semesters-list',
  templateUrl: './semesters-list.component.html',
  styleUrls: ['./semesters-list.component.css']
})
export class SemestersListComponent implements OnInit {
  data !: any
  constructor( private studentDataManagementService: StudentDataManagementService) { }

  async ngOnInit(){
    let allCourseDetails!: any[];
    await this.studentDataManagementService.getCoursesEnrolledWithDetails().then(function (_allCourseDetails ){ allCourseDetails = _allCourseDetails});
    allCourseDetails.shift()
    this.data = [
      {
        semester: 1, year: 2022,  courses: allCourseDetails
      }
    ]
    console.log(this.data);
  }
  panelOpenState = false;
  

}
