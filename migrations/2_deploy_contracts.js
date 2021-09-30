const config = require("../config.ts");

const RandomNumberGenerator = artifacts.require("RandomNumberGenerator");
const TokenLottery = artifacts.require("TokenLottery");

const argv = require('minimist')(process.argv.slice(2), {string: ['token']});

module.exports = async function(deployer, network) {
    await deployer.deploy(RandomNumberGenerator, config.Chainlink.VRF.Coordinator[network], config.Chainlink.LinkToken[network]);
    const randomNumberGenerator = await RandomNumberGenerator.deployed();

    await deployer.deploy(TokenLottery, argv['token'], randomNumberGenerator.address);
    const tokenLottery = await TokenLottery.deployed();

    try {
        await randomNumberGenerator.setFee(config.Chainlink.VRF.Fee[network]);
        console.log('randomNumberGenerator.setFee', 'done');
    } catch (error) {
        console.log(error);
    }

    try {
        await randomNumberGenerator.setKeyHash(config.Chainlink.VRF.KeyHash[network]);
        console.log('randomNumberGenerator.setKeyHash', 'done');
    } catch (error) {
        console.log(error);
    }

    try {
        await randomNumberGenerator.setLotteryAddress(tokenLottery.address);
        console.log('randomNumberGenerator.setLotteryAddress', 'done');
    } catch (error) {
        console.log(error);
    }

    try {
        await tokenLottery.setOperatorAndTreasuryAndInjectorAddresses(config.operator, config.treasure, config.injector);
        console.log('tokenLottery.setOperatorAndTreasuryAndInjectorAddresses', 'done');
    } catch (error) {
        console.log(error);
    }
}
