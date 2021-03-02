require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.7.3",
  networks: {
    hardhat: {
      forking: {
        // TODO: add key here
        url: "https://eth-mainnet.alchemyapi.io/v2/<key>",
        blockNumber: 11661763
      }
    }
  }
};
