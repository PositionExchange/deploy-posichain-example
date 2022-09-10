
import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "./scripts/deploy"; // import script verify


const privateKey = '<ADD_YOUR_PRIVATE_KEY_HERE>'
const apiKeyEthereum = '<YOUR_API_KEY>' // you can get api key from etherscan.io or bscscan.com
const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    posichain_testnet: {
      url: "http://api.s0.t.posichain.org",
      chainId: 910000,
      accounts: [privateKey]
    },
    posichain_mainnet: {
      url: "https://api.posichain.org/",
      chainId: 900000,
      accounts: [privateKey]

    }
  },
  etherscan: {
    apiKey: apiKeyEthereum,
    customChains: [
      {
        network: "posichain_testnet",
        chainId: 910000,
        urls: {
          apiURL: "https://apex-testnet.posichain.org/contract-verifier/verify", // the api to verify
          browserURL: "http://explorer-testnet.nonprodposi.com/"
        }
      },
      {
        network: "posichain_mainnet",
        chainId: 900000,
        urls: {
          apiURL: "https://apex.posichain.org/contract-verifier/verify",
          browserURL: "https://explorer.posichain.org/"
        }
      },
    ]
  }
};

export default config;
