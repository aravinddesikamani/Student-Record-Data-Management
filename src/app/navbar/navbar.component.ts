import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() isLoggedIn!: boolean;
  logString!: String;
  constructor(private router: Router) { }

  ngOnInit(): void {
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
