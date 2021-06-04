const CreateMyToken = artifacts.require('CreateMyToken');
const CreateFarmToken = artifacts.require("CreateFarmToken");

module.exports = async function(callback) {

    myToken = await CreateMyToken.deployed()
    farmToken = await CreateFarmToken.deployed()

    balance = await myToken.balanceOf(farmToken.address)
    console.log(web3.utils.fromWei(balance.toString()))

    // end //
    callback();
}