const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = '<ADD-YOUR-MNEMONIC-HERE>';
const privateKeyTest = '<ADD-YOUR-PRIVATE-KEY-HERE>';

module.exports = {
  networks: {
    posichain_mainnet: {
      provider: () => {
        return new HDWalletProvider({
          mnemonic,
          providerOrUrl: 'https://api.posichain.org/', // this is RPC for mainnet shard 0 
          derivationPath: `m/44'/1023'/0'/0/`
        });
      },
      network_id: 900000, // mainnet
    },
    posichain_testnet: {
      provider: () => {
        if (!privateKeyTest.trim()) {
          throw new Error(
              'Please enter a private key with funds, you can use the default one'
          );
        }
        return new HDWalletProvider({
          privateKeys: [privateKeyTest],
          providerOrUrl: 'https://api.s0.t.posichain.org/'// this is RPC for testnet shard 0
        });
      },
      network_id: 910000, // testnet
    },
  },
};