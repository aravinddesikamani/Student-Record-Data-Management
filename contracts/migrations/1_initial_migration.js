const Migrations = artifacts.require("Migrations");
const Assessment = artifacts.require("AssessmentManagement");
const Attendance = artifacts.require("AttendanceManagement");
const CourseEnrollment = artifacts.require("CourseEnrollement");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Assessment);
  deployer.deploy(Attendance);
  deployer.deploy(CourseEnrollment);
};
