var StudentDataManagement = artifacts.require("./StudentDataManagement.sol");
module.exports = function(deployer) {
  deployer.deploy(StudentDataManagement);
};