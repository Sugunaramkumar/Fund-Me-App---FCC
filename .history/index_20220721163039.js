// in node js we use requite()
//in front end we cant use require
//import

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
    }
}

//withdraw
