import { Component, OnInit } from '@angular/core';
import { StudentDataManagementService } from '../services/student-data-management.service';
@Component({
  selector: 'app-courses-enrolled',
  templateUrl: './courses-enrolled.component.html',
  styleUrls: ['./courses-enrolled.component.css']
})
export class CoursesEnrolledComponent implements OnInit {

  constructor(private studentDataManagementService: StudentDataManagementService) { }

  async ngOnInit() {
    let allCourseDetails;
    await this.studentDataManagementService.getCoursesEnrolledWithDetails().then(function (_allCourseDetails ){ allCourseDetails = _allCourseDetails});
    console.log(allCourseDetails)
  }

}
