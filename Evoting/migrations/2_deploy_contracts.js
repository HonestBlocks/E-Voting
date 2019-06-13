var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var Election = artifacts.require("./Election.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
};

module.exports = function(deployer) {
  deployer.deploy(Election);
}

