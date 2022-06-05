import { Injectable } from '@angular/core';

declare let Web3: any;
declare let require: any;
declare let window: any;

@Injectable({
  providedIn: 'root'
})

export class StudentDataManagementService {

  private account: any = null;
  private readonly web3: any;
  private enable: any;
  contract: any;
  contractAddress: any;
  contractABI: any;
  constructor() {
    this.contractAddress = "0xeca9AD12Ebb91bc8DF589b787eeDc522Cf2A5b81";
    this.contractABI = [
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "attendanceRecord",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "courseID",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "studentID",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "date",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "present",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "class",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "credits",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "count",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "courseDetails",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "courseID",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "credits",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "courseName",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "year",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "seats",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "staffId",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "semester1",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "stdCount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "stdRecords",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "studentID",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "marks",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "courseID",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "testNo",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "studentDetails",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "dept",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "a",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "b",
            "type": "string"
          }
        ],
        "name": "compareStrings",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "student",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "courseID",
            "type": "uint256"
          }
        ],
        "name": "enrolledAlready",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "_role",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_dept",
            "type": "string"
          }
        ],
        "name": "registerUser",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_userAddress",
            "type": "address"
          }
        ],
        "name": "returnUserName",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_userAddress",
            "type": "address"
          }
        ],
        "name": "returnUserId",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "returnStudentDetails",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_courseID",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_credits",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "_courseName",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "_year",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_seats",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "_staffId",
            "type": "string"
          }
        ],
        "name": "addCourse",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_studentID",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_courseID",
            "type": "uint256"
          }
        ],
        "name": "enrollCourse",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_courseID",
            "type": "uint256"
          }
        ],
        "name": "returnCredits",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_studentID",
            "type": "uint256"
          }
        ],
        "name": "getCourses",
        "outputs": [
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_courseID",
            "type": "uint256"
          }
        ],
        "name": "getCourseName",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_courseID",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_studentID",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "_date",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "_class",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_credits",
            "type": "uint256"
          }
        ],
        "name": "markAsPresent",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_courseID",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_studentID",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "_date",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "_class",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_credits",
            "type": "uint256"
          }
        ],
        "name": "markAsAbsent",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_courseID",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_studentID",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_credits",
            "type": "uint256"
          }
        ],
        "name": "getAttendance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_courseID",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_studentID",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_credits",
            "type": "uint256"
          }
        ],
        "name": "getAttendanceList",
        "outputs": [
          {
            "internalType": "string[]",
            "name": "",
            "type": "string[]"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_studentID",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_marks",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_courseID",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_testNo",
            "type": "uint256"
          }
        ],
        "name": "addMarks",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_studentID",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_courseID",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_testNo",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_bonus",
            "type": "uint256"
          }
        ],
        "name": "updateMarks",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_studentID",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_courseID",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_testNo",
            "type": "uint256"
          }
        ],
        "name": "viewMarks",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ]
    if (window.ethereum === undefined) {
      alert('Non-Ethereum browser detected. Install MetaMask');
    } else {
      if (typeof window.web3 !== 'undefined') {
        this.web3 = window.web3.currentProvider;
      } else {
        this.web3 = new Web3.providers.HttpProvider('http://localhost:8545');
      }
      console.log('studentDataManagement.service :: constructor :: window.ethereum');
      window.web3 = new Web3(window.ethereum);
      console.log('studentDataManagement.service :: constructor :: this.web3');
      console.log(this.web3);
      this.enable = this.enableMetaMaskAccount();
      this.contract = new window.web3.eth.Contract(this.contractABI, this.contractAddress);
    }
   }

  private async enableMetaMaskAccount(): Promise<any> {
    let enable = false;
    await new Promise((resolve, reject) => {
      enable = window.ethereum.enable();
    });
    return Promise.resolve(enable);
  }

  private async getAccount(): Promise<any> {
    console.log('assessments.service :: getAccount :: start');
    if (this.account == null) {
      this.account = await new Promise((resolve, reject) => {
        console.log('assessments.service :: getAccount :: eth');
        console.log(window.web3.eth);
        window.web3.eth.getAccounts((err: any, retAccount: string | any[]) => {
          console.log('assessments.service :: getAccount: retAccount');
          console.log(retAccount);
          if (retAccount.length > 0) {
            this.account = retAccount[0];
            resolve(this.account);
          } else {
            alert('assessments.service :: getAccount :: no accounts found.');
            reject('No accounts found.');
          }
          if (err != null) {
            alert('assessments.service :: getAccount :: error retrieving account');
            reject('Error retrieving account');
          }
        });
      }) as Promise<any>;
      
    }

    
    return Promise.resolve(this.account);
  }



  public async getUserBalance(): Promise<any> {
    const account = await this.getAccount();
    console.log('studentDataManagement.service :: getUserBalance :: account');
    console.log(account);
    return new Promise((resolve, reject) => {
      window.web3.eth.getBalance(account, function(err: any, balance: any) {
        console.log('studentDataManagement.service :: getUserBalance :: getBalance');
        console.log(balance);
        if (!err) {
          const retVal = {
            account: account,
            balance: balance
          };
          console.log('studentDataManagement.service :: getUserBalance :: getBalance :: retVal');
          console.log(retVal);
          resolve(retVal);
        } else {
          reject({account: 'error', balance: 0});
        }
      });
    }) as Promise<any>;
  }

  public async getUserName(){
    console.log('studentDataManagement.service :: getUserBalance :: getBalance');
    let username = ''; 
    let accountAddress = '';
    let accounts = await window.web3.eth.getAccounts();
    console.log(accounts[0])
    await this.contract.methods.returnUserName(accounts[0]).call().then(function (uname:string){console.log(uname);username = uname})
    console.log(username)
    return Promise.resolve(username);
  }

  public async getUserId(){
    let userid = ''; 
    let accountAddress = '';
    let accounts = await window.web3.eth.getAccounts();
    console.log(accounts[0])
    await this.contract.methods.returnUserId(accounts[0]).call().then(function (uid:string){console.log(uid);userid = uid})
    console.log(userid)
    return Promise.resolve(userid);
  }

  public async getCoursesEnrolled(){
    let accounts = await window.web3.eth.getAccounts();
    let studentId;
    await this.contract.methods.returnUserId(accounts[0]).call().then( function(userId:any){studentId = userId});
    let courses;
    await this.contract.methods.getCourses(studentId).call().then(function (_courses: any){console.log(_courses);courses = _courses})
    return Promise.resolve(courses);
  }

  public async getCoursesEnrolledWithDetails(){
    
        
    let coursesIDs: any;
    await this.getCoursesEnrolled().then(function(_courses: any){coursesIDs = _courses});
    console.log(coursesIDs);
    let studentId: any;
    await this.getUserId().then(function(uid: any){studentId = uid});
    let allCourseDetails = []
    for(let courseID of coursesIDs){
      let courseName, courseFaculty, courseCredits, assessmentsList:any = [], attendance;
      await this.contract.methods.getCourseName(+(courseID)).call().then(function(_courseName: any){courseName = _courseName})
      await this.contract.methods.returnCredits(+(courseID)).call().then(function(_courseCredits: any){courseCredits = _courseCredits})
      for (let i = 1; i < 4; i++){
        await this.contract.methods.viewMarks(+(studentId), +(courseID), i).call().then(function(testMarks: any){assessmentsList.push(testMarks)})
      }
      await this.contract.methods.getAttendance(+(courseID), +(studentId), courseCredits).call().then(function(_attendance:any){ attendance = _attendance})
      allCourseDetails.push([courseName, courseCredits, assessmentsList, attendance])
      console.log([courseName, courseCredits, assessmentsList])
    }
    return Promise.resolve(allCourseDetails);

  }

}
