// in node js we use requite()
//in front end we cant use require
//import

import { ethers } from "./ethers-5.6.esm.min.js"
import { abi, contractAddress } from "./constants.js"

const connectButton = document.getElementById("connectButton")
const fundButton = document.getElementById("fundButton")
connectButton.onclick = connect
fundButton.onclick = fund

async function connect() {
    if (typeof window.ethereum !== "undefined") {
        await ethereum.request({ method: "eth_requestAccounts" })
        connectButton.innerHTML = "Connected"
    } else {
        fundButton.innerHTML = "Please install metamask!"
    }
}
//fund function

async function fund() {
    const ethAmount = "0.5"
    console.log("Funding with ${ethAmount}...")
    if (typeof window.ethereum !== "undefined") {
        //provider / connection to the blockchain
        //signer /wallet/someone with gas
        //contract that we are interacting with
        //^ ABI & address
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)
        try {
            const transactionResponse = await contract.fund({
                value: ethers.utils.parseEther(ethAmount),
            })
            //hey wait for Tx to finish
            await listenForTransactionMine(transactionResponse, provider)
        } catch (error) {
            console.log(error)
        }
    }
}
function listenForTransactionMine(transactionResponse, provider) {
    console.log(`Mining ${transactionResponse.hash}...`)
    return new Promise((resolve, reject) => {
        provider.once(transactionResponse.hash, (transactionReceipt) => {
            console.log(
                `Completed with ${transactionReceipt.confirmations} confirmations`
            )
        })
    })
}

//withdraw
