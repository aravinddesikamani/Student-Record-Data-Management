import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-option',
  templateUrl: './student-option.component.html',
  styleUrls: ['./student-option.component.css']
})
export class StudentOptionComponent implements OnInit {

  @Input() source !: string;
  @Input() displayText !: string;


  constructor() { }

  ngOnInit(): void {
  }

}
