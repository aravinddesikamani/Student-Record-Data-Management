import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semesters-list',
  templateUrl: './semesters-list.component.html',
  styleUrls: ['./semesters-list.component.css']
})
export class SemestersListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  panelOpenState = false;
  data = [
    {
      semester: 1, year: 2022,  courses: [
        {courseName: "Course 1", attendance: 90,faculty: "David Allen"},
        {courseName: "Course 2", attendance: 90,faculty: "David Allen"},
        {courseName: "Course 3", attendance: 90,faculty: "David Allen"},
        {courseName: "Course 4", attendance: 90,faculty: "David Allen"},
        {courseName: "Course 5", attendance: 90,faculty: "David Allen"}
      ]
    },{
      semester: 2, year: 2023, courses: [
        {courseName: "Course 1", attendance: 90,faculty: "David Allen"},
        {courseName: "Course 2", attendance: 90,faculty: "David Allen"},
        {courseName: "Course 3", attendance: 90,faculty: "David Allen"},
        {courseName: "Course 4", attendance: 90,faculty: "David Allen"},
        {courseName: "Course 5", attendance: 90,faculty: "David Allen"}
      ]
    }
    
    
  ]

}
