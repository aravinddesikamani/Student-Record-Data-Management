
import { Injectable } from '@angular/core';
import Web3 from "web3";
import Web3Modal from "web3modal";
import { walletconnect } from 'web3modal/dist/providers/connectors';
import { Subject } from 'rxjs';
import { assessment_address, assessment_abi } from './abis';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private web3js: any;
  private provider: any;
  private accounts: any;
  private uAssessment: any;
  web3Modal

  private accountStatusSource = new Subject<any>();
  accountStatus$ = this.accountStatusSource.asObservable();

  constructor() {
    const providerOptions = {
      walletconnect: {
        package: walletconnect, // required
        options: {
          infuraId: "INFURA_ID" // required
        }
      }
    };

    this.web3Modal = new Web3Modal({
      providerOptions, // required
      theme: {
        background: "rgb(39, 49, 56)",
        main: "rgb(199, 199, 199)",
        secondary: "rgb(136, 136, 136)",
        border: "rgba(195, 195, 195, 0.14)",
        hover: "rgb(16, 26, 32)"
      }
    });
  }

  async connectAccount() {
    this.web3Modal.clearCachedProvider();

    this.provider = await this.web3Modal.connect(); // set provider
    this.web3js = new Web3(this.provider); // create web3 instance
    this.accounts = await this.web3js.eth.getAccounts(); 
    this.accountStatusSource.next(this.accounts)
  }

  async createAssessment(studentID:any, marks:any, courseID:any, testNo:any) {
    this.provider = await this.web3Modal.connect(); // set provider
    this.web3js = new Web3(this.provider); // create web3 instance
    this.accounts = await this.web3js.eth.getAccounts(); 

    this.uAssessment = new this.web3js.eth.Contract(assessment_abi, assessment_address);

    const create = await this.uAssessment
    .methods.createOrganization(studentID, marks, courseID, testNo)
    .send({ from: this.accounts[0] });
    return create;
    }

}