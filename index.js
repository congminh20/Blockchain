// const Web3 = require("web3");
const infuraUrl = "https://goerli.infura.io/v3/e0f8271338ff475087bbc8999619eb8c"; // Thay your-project-id bằng project id của bạn
const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl));

const contractAddress = "0xceb8537f9Cb06d04A9bea41d8634F36Eb2eb8fF6";

const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_date",
				"type": "string"
			}
		],
		"name": "setDate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_id",
				"type": "string"
			}
		],
		"name": "setId",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "setPrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_weight",
				"type": "uint256"
			}
		],
		"name": "setWeight",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDate",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getId",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getWeight",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const contract = new web3.eth.Contract(abi, contractAddress);

async function getContractData() {
  const date = await contract.methods.getDate().call();
  const id = await contract.methods.getId().call();
  const price = await contract.methods.getPrice().call();
  const weight = await contract.methods.getWeight().call();

  document.getElementById("id_product").innerHTML = "<span class='fw-normal'>" + id + "</span>";
  document.getElementById("date").innerHTML = "Ngày thu hoạch: <span class='fw-normal'>" + date + "</span>";
  document.getElementById("price").innerHTML = "Giá: <span class='fw-normal'>" + price + "</span>";
  document.getElementById("weight").innerHTML = "Quy cách đóng gói: <span class='fw-normal'>" + "HỘP " + weight + " G" + "</span>";
}

getContractData();

