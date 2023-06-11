// const Web3 = require("web3");
const infuraUrl = "https://goerli.infura.io/v3/e0f8271338ff475087bbc8999619eb8c"; // Thay your-project-id bằng project id của bạn
const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl));

const contractAddress = "0xd74C6B0e02D92b6eC2789c0C7257C2320384C390";

const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newArea",
				"type": "string"
			}
		],
		"name": "setArea",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newBenefit",
				"type": "string"
			}
		],
		"name": "setBenefit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newExpire",
				"type": "string"
			}
		],
		"name": "setExpire",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newHumidityAir",
				"type": "string"
			}
		],
		"name": "setHumidityAir",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newHumiditySoil",
				"type": "string"
			}
		],
		"name": "setHumiditySoil",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newKind",
				"type": "string"
			}
		],
		"name": "setKind",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newLight",
				"type": "string"
			}
		],
		"name": "setLight",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newLocation",
				"type": "string"
			}
		],
		"name": "setLocation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newName",
				"type": "string"
			}
		],
		"name": "setName",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newPack",
				"type": "string"
			}
		],
		"name": "setPack",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newPreserve",
				"type": "string"
			}
		],
		"name": "setPreserve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newPrice",
				"type": "string"
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
				"internalType": "string",
				"name": "_newProcessProduce",
				"type": "string"
			}
		],
		"name": "setProcessProduce",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newTemperature",
				"type": "string"
			}
		],
		"name": "setTemperature",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_kind",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_expire",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_preserve",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_location",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_price",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_area",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_pack",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_benefit",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_processProduce",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_temperature",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_light",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_humidityAir",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_humiditySoil",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "area",
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
		"name": "benefit",
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
		"name": "expire",
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
		"name": "getArea",
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
		"name": "getBenefit",
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
		"name": "getExpire",
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
		"name": "getHumidityAir",
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
		"name": "getHumiditySoil",
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
		"name": "getKind",
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
		"name": "getLight",
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
		"name": "getLocation",
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
		"name": "getName",
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
		"name": "getPack",
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
		"name": "getPreserve",
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
		"name": "getProcessProduce",
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
		"name": "getTemperature",
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
		"name": "kind",
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
		"name": "location",
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
		"name": "name",
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
		"name": "pack",
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
		"name": "preserve",
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
		"name": "price",
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
		"name": "processProduce",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const contract = new web3.eth.Contract(abi, contractAddress);
const urlParams = new URLSearchParams(window.location.search);

async function getContractData() {
	const name = await contract.methods.getName().call();
	const kind = await contract.methods.getKind().call();
	const expire = await contract.methods.getExpire().call();
	const preserve = await contract.methods.getPreserve().call();
	const location = await contract.methods.getLocation().call();
	const price = await contract.methods.getPrice().call();
	const area = await contract.methods.getArea().call();
	const pack = await contract.methods.getPack().call();
	const benefit = await contract.methods.getBenefit().call();
	const processProduce = await contract.methods.getProcessProduce().call();
	const date = urlParams.get('date');

	document.getElementById("name").innerHTML = "Tên sản phẩm: <span class='fw-normal'>" + name + "</span>";
	document.getElementById("kind").innerHTML = "Loại: <span class='fw-normal'>" + kind + "</span>";
	document.getElementById("expire").innerHTML = "Hạn sử dụng: <span class='fw-normal'>" + expire + "</span>";
	document.getElementById("preserve").innerHTML = "Phương pháp bảo quản: <span class='fw-normal'>" + preserve + "</span>";
	document.getElementById("location").innerHTML = "Vị trí: <span class='fw-normal'>" + location + "</span>";
	document.getElementById("price").innerHTML = "Giá: <span class='fw-normal'>" + price + "</span>";
	document.getElementById("area").innerHTML = "Diện tích: <span class='fw-normal'>" + area + "</span>";
	document.getElementById("pack").innerHTML = "Quy cách đóng gói: <span class='fw-normal'>" + pack + "</span>";
	document.getElementById("benefit").innerHTML = "Chức năng / công dụng sản phẩm: <span class='fw-normal'>" + benefit + "</span>";
	document.getElementById("processProduce").innerHTML = "Quy trình sản xuất: <span class='fw-normal'>" + processProduce + "</span>";
	document.getElementById("date").innerHTML = "Ngày thu hoạch: <span class='fw-normal'>" + date + "</span>";

}
getContractData();

