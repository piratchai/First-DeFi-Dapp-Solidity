const CreateMyToken = artifacts.require("CreateMyToken");
const CreateFarmToken = artifacts.require("CreateFarmToken");

module.exports = async function (deployer, network, accounts) {
  // -- Deploy MyToken -- //
  await deployer.deploy(CreateMyToken);
  const myToken = await CreateMyToken.deployed();

  // -- Deploy FarmToken -- //
  await deployer.deploy(CreateFarmToken, myToken.address);
  const farmToken = await CreateMyToken.deployed();
};
