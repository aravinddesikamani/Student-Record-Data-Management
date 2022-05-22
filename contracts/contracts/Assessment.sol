contract AssessmentManagement
{
	struct Student
	{
		int studentID;
		int marks;
        int courseID;
        int testNo;
	}

	address owner;
	int public stdCount = 0;

	mapping(int => Student) public stdRecords;

	modifier onlyOwner
	{
		require(owner == msg.sender);
		_;
	}

	constructor()
	{
		owner=msg.sender;
	}

	function addMarks(int _studentID, int _marks, int _courseID, int _testNo) public onlyOwner
	{
		require(_marks > 0 && _marks <= 100, "Please enter a valid assessment");
		require(_testNo > 0 && _testNo <=4, "Please check the test number you are looking for");
		stdCount = (_courseID * 10000) + (_studentID * 10) + (_testNo);
        require(stdRecords[stdCount].studentID == 0, "Already added assessment for this student");
		stdRecords[stdCount] = Student(_studentID, _marks, _courseID, _testNo);
	}

	function updateMarks(int _studentID, int _courseID, int _testNo, int _bonus) public onlyOwner
	{
		require(_testNo > 0 && _testNo <=4, "Please check the test number you are looking for");
        stdCount = (_courseID * 10000) + (_studentID * 10) + (_testNo);
		stdRecords[stdCount].marks = stdRecords[stdCount].marks + _bonus;
	}

	function viewMarks(int _studentID, int _courseID, int _testNo) public onlyOwner returns (int) 
    {
		require(_testNo > 0 && _testNo <=4, "Please check the test number you are looking for");
		stdCount = (_courseID * 10000) + (_studentID * 10) + (_testNo);
		require(stdRecords[stdCount].marks != 0, "Marks not updated yet. Please check back later");
		return stdRecords[stdCount].marks;
	}
}
