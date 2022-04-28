contract CourseEnrollement {
    struct Course {
        int courseID;
        int credits;
        string courseName;
        int year;
        int seats;
        address[] students;
    }

    address owner;

    mapping (int => Course) public courseDetails;

	modifier onlyOwner
	{
		require(owner == msg.sender, "Not Authorized");
		_;
	}

	constructor()
	{
		owner=msg.sender;
	}

    function addCourse (int _courseID,
        int _credits,
        string memory _courseName,
        int _year,
        int _seats) public onlyOwner {
            require(_credits > 0, "Please enter the number of credits for this course");
            require(_year >= 1 && _year <= 4, "Please enter a valid year");
            require(bytes(courseDetails[_courseID].courseName).length == 0, "This course already exists");

            address[] memory emptyAddressList;

            courseDetails[_courseID] = Course(_courseID, _credits, _courseName, _year, _seats, emptyAddressList);
        }
    
    function enrollCourse (int _studentID, int _courseID) public {
        int i = 0;
        courseDetails[_courseID].seats -= 1;
        courseDetails[_courseID].students.push(msg.sender);
    }
}