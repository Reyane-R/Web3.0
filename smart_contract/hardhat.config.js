

// This is a sample Hardhat task. To learn how to create your own go to
// https://eth-ropsten.alchemyapi.io/v2/UUJBn8dkPha4_wBqXJHNnO4ChtlCz2dv
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/UUJBn8dkPha4_wBqXJHNnO4ChtlCz2dv',
      accounts: ['467b77009bf77c16a2b30fe2b56c331097bf3f2f12c32aa7222daadb005f439d'],
    },
  },
};