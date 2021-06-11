const CryptoZombies = artifacts.require("ZombieOwnership.sol");

module.exports = function (deployer) {
  deployer.deploy(CryptoZombies);
};
