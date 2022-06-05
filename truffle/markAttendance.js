const artifacts = require('./build/contracts/StudentDataManagement.json')
const contract = require('truffle-contract')
const StudentDataManagement = contract(artifacts);
const Web3 = require("web3")
StudentDataManagement.setProvider(web3.currentProvider);
async function markAttendance(){
    for (let i = 3; i <= 20; i++){
    await StudentDataManagement.deployed().then( function (instance) { return instance.markAsPresent(0, 1, "01/01/2022", i, 3) } )
    console.log(i);
    }
}

markAttendance()
