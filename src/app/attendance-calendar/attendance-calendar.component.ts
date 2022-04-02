import { Component, OnInit } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/angular';
@Component({
  selector: 'app-attendance-calendar',
  templateUrl: './attendance-calendar.component.html',
  styleUrls: ['./attendance-calendar.component.css']
})
export class AttendanceCalendarComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
