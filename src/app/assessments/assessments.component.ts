import { Component, OnInit } from '@angular/core';
import { ContractService } from 'contract.service';
@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.css']
})
export class AssessmentsComponent implements OnInit {
  conserv!: ContractService;
  constructor() { 
    this.conserv = new ContractService;
   }

  ngOnInit(): void {
  }

  callSmartContract(){
    console.log(this.conserv.createAssessment(231, 23, 4352, 1));
  }



}
