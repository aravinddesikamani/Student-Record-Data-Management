import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessments-list',
  templateUrl: './assessments-list.component.html',
  styleUrls: ['./assessments-list.component.css']
})
export class AssessmentsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Object = Object
  data = [
    {
      semester: 1, year: 2022,  courses: [
        {courseName: "Course 1", assessments: [{"CAT 1": 90}, {"CAT 2": 80}, {"CAT 3": 80}],faculty: "David Allen"},
        {courseName: "Course 2", assessments: [{"CAT 1": 90}, {"CAT 2": 80}, {"CAT 3": 80}],faculty: "David Allen"},
        {courseName: "Course 3", assessments: [{"CAT 1": 90}, {"CAT 2": 80}, {"CAT 3": 80}],faculty: "David Allen"},
        {courseName: "Course 4", assessments: [{"CAT 1": 90}, {"CAT 2": 80}, {"CAT 3": 80}],faculty: "David Allen"},
        {courseName: "Course 5", assessments: [{"CAT 1": 90}, {"CAT 2": 80}, {"CAT 3": 80}],faculty: "David Allen"}
      ]
    },{
      semester: 2, year: 2023, courses: [
        {courseName: "Course 1", assessments: [{"CAT 1": 90}, {"CAT 2": 80}],faculty: "David Allen"},
        {courseName: "Course 2", assessments: [{"CAT 1": 90}, {"CAT 2": 80}],faculty: "David Allen"},
        {courseName: "Course 3", assessments: [{"CAT 1": 90}, {"CAT 2": 80}],faculty: "David Allen"},
        {courseName: "Course 4", assessments: [{"CAT 1": 90}, {"CAT 2": 80}],faculty: "David Allen"},
        {courseName: "Course 5", assessments: [{"CAT 1": 90}, {"CAT 2": 80}],faculty: "David Allen"}
      ]
    }
    
    
  ]
}
