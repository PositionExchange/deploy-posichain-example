const helloPosiChain = artifacts.require("HelloPosiChain");

module.exports = function(deployer) {
  deployer.deploy(helloPosiChain)
      .then(() => helloPosiChain.deployed())
      .then(_instance => console.log("HelloPosiChain deployed to:", _instance.address));

};
