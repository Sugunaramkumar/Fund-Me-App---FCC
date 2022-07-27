// in node js we use requite()
//in front end we cant use require
//import
import { ethers } from "./ethers-5.6.esm.min.js"
const connectButton = document.getElementById("connectButton")
const fundButton = document.getElementById("fundButton")
connectButton.onclick = connect
fundButton.onclick = fund

console.log(ethers)

async function connect() {
    if (typeof window.ethereum !== "undefined") {
        await window.ethereum.request({ method: "eth_requestAccounts" })
        document.getElementById("connectButton").innerHTML = "Connected!"
    } else {
        document.getElementById("connectButton").innerHTML =
            "Please install metamask!"
    }
}
//fund function

async function fund(ethAmount) {
    console.log(`Funding with ${ethAmount}...`)
    if (typeof window.ethereum !== "undefined") {
        //provider / connection to the blockchain
        //signer /wallet/someone with gas
        //contract that we are interacting with
        //^ ABI & address
    }
}

//withdraw
