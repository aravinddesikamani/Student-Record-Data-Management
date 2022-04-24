contract AttendanceManagement {
    struct Attendance {
        int courseID;
        int studentID;
        string date;
        bool present;
        int class;
        int credits;
    }

    address owner;
    int public count = 0;
    mapping (int => Attendance) public attendanceRecord;

	modifier onlyOwner
	{
		require(owner == msg.sender, "Not Authorized");
		_;
	}

	constructor()
	{
		owner=msg.sender;
	}

    function markAsPresent (
        int _courseID,
        int _studentID,
        string memory _date,
        int _class,
        int _credits
    ) public onlyOwner {

        count = (_courseID * 100000) + (_studentID * 100) + _class;
        require(attendanceRecord[count].studentID == 0, "Already marked attendance");
        require(_class < (_credits * 12), "Course concluded");
        attendanceRecord[count] = Attendance(_courseID, _studentID, _date, true, _class, _credits);
    }


    function markAsAbsent (
        int _courseID,
        int _studentID,
        string memory _date,
        int _class,
        int _credits
    ) public onlyOwner {

        count = (_courseID * 100000) + (_studentID * 100) + _class;
        require(attendanceRecord[count].studentID == 0, "Already marked attendance");
        require(_class < (_credits * 12), "Course concluded");
        attendanceRecord[count] = Attendance(_courseID, _studentID, _date, false, _class, _credits);
    }

    function getAttendance (
        int _courseID,
        int _studentID,
        int _credits
    ) public returns (int) {
        int i = 0;
        int dummyCount = 0;
        int noOfClasses = 0;
        for( i = 0; i < (_credits * 12); i++){
            dummyCount = (_courseID * 100000) + (_studentID * 100) + i;
            if(attendanceRecord[dummyCount].present){
                noOfClasses += 1;
            } 
        }

        return noOfClasses;
    }
}