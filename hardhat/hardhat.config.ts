import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "./scripts/deploy"
require("@nomiclabs/hardhat-waffle");


const POSI_CHAIN_PRIVATE_KEY = "YOUR POSI CHAIN PRIVATE KEY";

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.8",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      }
    ]
  },
  networks: {
    posichain_testnet: {
      url: 'https://api.s0.t.posichain.org/',
      chainId: 910000,
      accounts: [POSI_CHAIN_PRIVATE_KEY]
    },
    posichain_mainnet: {
      url: 'https://api.posichain.org',
      chainId: 900000,
      accounts: [POSI_CHAIN_PRIVATE_KEY]
    }
  }
};
