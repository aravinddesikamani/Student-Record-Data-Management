import { Component, Output } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { StudentDataManagementService } from './services/student-data-management.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentDataManagementService]
})
export class AppComponent {
  @Output() isLoggedIn: boolean = false;
  title = 'student-data-management';
  user: any;
  
  constructor(private studentDataManagementService: StudentDataManagementService){

  }

  getAccountAndBalance = () => {
    const that = this;
    this.studentDataManagementService.getUserBalance().
    then(function(retAccount: any) {
      that.user.address = retAccount.account;
      that.user.balance = retAccount.balance;
      console.log('transfer.components :: getAccountAndBalance :: that.user');
      console.log(that.user);
    }).catch(function(error) {
      console.log(error);
    });
  }
}
