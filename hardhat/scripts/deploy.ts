import {task} from "hardhat/config";


task("deploy", "Deploy the contract", async (args, hre) => {
    const helloPosiChain = await hre.ethers.getContractFactory("HelloPosiChain");
    const helloPoiChainContract = await helloPosiChain.deploy();
    await helloPoiChainContract.deployed();
    console.log("HelloPosiChain deployed to:", helloPoiChainContract.address);
})


export async function verifyContract(
    hre : any,
    address : string,
    args : undefined,
    contract : string | undefined
) {
    const verifyObj = { address } as any;
    if (args) {
        verifyObj.constructorArguments = args;
    }
    if (contract) {
        verifyObj.contract = contract;
    }
    return hre
        .run("verify:verify", verifyObj)
        .then(() => console.log("Contract address verified:", address))
        .catch((err : any) => {
            console.log(`Verify Error`, err);
        });
}


task("verify", "verify", async (taskArgs, hre) => {
    const contractAddress = 'YOUR_CONTRACT_ADDRESS';
    const args : any= [];// The list arguments of contract
    const contractProvider = 'YOUR_PATH_CONTRACT' // Example:"contracts/HelloPosiChain.sol:HelloPosiChain"
    await verifyContract(
        hre,
        contractAddress,
        args,
        contractProvider);
});