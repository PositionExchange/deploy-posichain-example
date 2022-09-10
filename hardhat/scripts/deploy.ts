import {ethers} from "hardhat";
import {task} from "hardhat/config";


task("deploy", "Deploy the contract", async (args, hre) => {
    const helloPosiChain = await ethers.getContractFactory("HelloPosiChain");
    const helloPoiChainContract = await helloPosiChain.deploy();
    await helloPoiChainContract.deployed();
    console.log("HelloPosiChain deployed to:", helloPoiChainContract.address);
})