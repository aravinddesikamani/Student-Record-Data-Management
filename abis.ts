export const assessment_address = "0x3f9ceF7873897ed3e43eAD9de3027C174B09B68b"
export const assessment_abi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "stdCount",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "name": "stdRecords",
      "outputs": [
        {
          "internalType": "int256",
          "name": "studentID",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "marks",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "courseID",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "testNo",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "int256",
          "name": "_studentID",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "_marks",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "_courseID",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "_testNo",
          "type": "int256"
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
          "internalType": "int256",
          "name": "_studentID",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "_courseID",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "_testNo",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "_bonus",
          "type": "int256"
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
          "internalType": "int256",
          "name": "_studentID",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "_courseID",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "_testNo",
          "type": "int256"
        }
      ],
      "name": "viewMarks",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]