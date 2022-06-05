contract StudentDataManagement {
  mapping(address => User[]) users; 
  mapping(uint => Course) public courseDetails;
  mapping(uint => Student) public studentDetails;
  mapping(uint => Attendance) public attendanceRecord;
  mapping(uint => Assessment) public stdRecords;

  uint public count = 0;
  uint public stdCount = 0;
  uint[] public semester1 = [0];

  struct User {
      string name;
      uint id;
      address user_address;
      string role;
  }
  
  struct Subject {
      uint subject_id;
      string subject_name;
      uint credits;
  }

  struct Student {
    uint id;
    string name;
    string dept;
    uint[] courses;
  }

  struct Course {
    uint courseID;
    uint credits;
    string courseName;
    uint year;
    uint seats;
    uint[] students;
    string staffId;
  }

  struct Attendance {
    uint courseID;
    uint studentID;
    string date;
    bool present;
    uint class;
    uint credits;
  }

  struct Assessment {
	uint studentID;
	uint marks;
    uint courseID;
    uint testNo;
  }

    // internal functions, don't bother

    function compareStrings (string memory a, string memory b ) public view returns (bool) {
      return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }

    function enrolledAlready (uint student, uint courseID) public view returns (bool) {
        for (uint i = 0; i < courseDetails[courseID].seats; i++) {
            if(courseDetails[courseID].students[i] == student) {
                return true;
            }
            return false;
        }
    } 

    // User registration 

    function registerUser (string memory _name, uint _id, string memory _role, string memory _dept) public {
      uint[] memory emptyList = new uint[](0);
      users[msg.sender].push(User({
          name: _name,
          id: _id,
          user_address: msg.sender,
          role: _role
      }));
      if(compareStrings(_role, "Student")) {
          studentDetails[_id] = Student(_id, _name, _dept, emptyList);
      }
    }

    function returnUserName (address _userAddress) view public returns(string memory) {
      return users[_userAddress][0].name;
    }

    function returnUserId (address _userAddress) view public returns(uint) {
      return users[_userAddress][0].id;
    }

    function returnStudentDetails (uint id) view public returns (string memory) {
        return studentDetails[id].name;
    }

    // Course related stuff

    function addCourse (uint _courseID, uint _credits, string memory _courseName, uint _year, uint _seats, string memory _staffId ) public {
        require(_credits > 0, "Please enter the number of credits for this course");
        require(_year >= 1 && _year <= 4, "Please enter a valid year");
        require(bytes(courseDetails[_courseID].courseName).length == 0, "This course already exists");
        uint[] memory emptyList = new uint[](0);
        courseDetails[_courseID] = Course(_courseID, _credits, _courseName, _year, _seats, emptyList, _staffId);
    }

    function enrollCourse (uint _studentID, uint _courseID) public {
        courseDetails[_courseID].seats -= 1;
        semester1.push(_courseID);
    }

    function returnCredits (uint _courseID) view public returns (uint) {
        return courseDetails[_courseID].credits;
    }

    function getCourses (uint _studentID) view public returns (uint[] memory) {
        return semester1;
    }

    function getCourseName (uint _courseID) view public returns (string memory) {
        return courseDetails[_courseID].courseName;
    }
    
    // Attendance 

    function markAsPresent (uint _courseID, uint _studentID, string memory _date, uint _class, uint _credits) public {
        count = (_courseID * 100000) + (_studentID * 100) + _class;
        require(attendanceRecord[count].studentID == 0, "Already marked attendance");
        require(_class < (_credits * 12), "Course concluded");
        attendanceRecord[count] = Attendance(_courseID, _studentID, _date, true, _class, _credits);
    }

    function markAsAbsent (uint _courseID, uint _studentID, string memory _date, uint _class, uint _credits) public {
        count = (_courseID * 100000) + (_studentID * 100) + _class;
        require(attendanceRecord[count].studentID == 0, "Already marked attendance");
        require(_class < (_credits * 12), "Course concluded");
        attendanceRecord[count] = Attendance(_courseID, _studentID, _date, false, _class, _credits);
    }

    function getAttendance (uint _courseID, uint _studentID, uint _credits) public view returns (uint) {
        uint i = 0;
        uint dummyCount = 0;
        uint noOfClasses = 0;
        for( i = 0; i < (_credits * 12); i++){
            dummyCount = (_courseID * 100000) + (_studentID * 100) + i;
            if(attendanceRecord[dummyCount].present){
                noOfClasses += 1;
            } 
        }
        return noOfClasses;
    }

    function getAttendanceList (uint _courseID, uint _studentID, uint _credits) public view returns (string[] memory) {
        uint i = 0;
        uint j = 0;
        uint dummyCount = 0;
        string[] memory presentDates = new string[](_credits * 12);

        for (i = 0; i < (_credits * 12); i++){
            dummyCount = (_courseID * 100000) + (_studentID * 100) + i;
            if(attendanceRecord[dummyCount].present){
                presentDates[j] = attendanceRecord[dummyCount].date;
                j++;
            } 
        }
        return presentDates;
    }

    // Assessment 

    function addMarks (uint _studentID,   uint _marks,  uint _courseID,  uint _testNo) public {
		require(_marks > 0 && _marks <= 100, "Please enter a valid assessment");
		require(_testNo > 0 && _testNo <=4, "Please check the test number you are looking for");
		stdCount = (_courseID * 10000) + (_studentID * 10) + (_testNo);
        require(stdRecords[stdCount].studentID == 0, "Already added assessment for this student");
		stdRecords[stdCount] = Assessment(_studentID, _marks, _courseID, _testNo);
	}

	function updateMarks (uint _studentID,  uint _courseID,  uint _testNo,  uint _bonus) public {
		require(_testNo > 0 && _testNo <=4, "Please check the test number you are looking for");
        stdCount = (_courseID * 10000) + (_studentID * 10) + (_testNo);
		stdRecords[stdCount].marks = stdRecords[stdCount].marks + _bonus;
	}

	function viewMarks (uint _studentID,  uint _courseID,  uint _testNo) public returns (uint) {
		require(_testNo > 0 && _testNo <=4, "Please check the test number you are looking for");
		stdCount = (_courseID * 10000) + (_studentID * 10) + (_testNo);
		return stdRecords[stdCount].marks;
	}
}