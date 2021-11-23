// Documentation: https://docs.chain.link/docs/binance-smart-chain-addresses/
// Documentation: https://docs.chain.link/docs/vrf-contracts/
module.exports = {
  Chainlink: {
    LinkToken: {
      bsc: "0x404460C6A5EdE2D891e8297795264fDe62ADBB75",
      bsctestnet: "0x84b9B910527Ad5C03A9Ca831909E21e236EA7b06",
      matic: "0xb0897686c545045aFc77CF20eC7A532E3120E0F1",
      mumbai: "0x326C977E6efc84E512bB9C30f76E30c160eD06FB",
      rinkeby: "0x01BE23585060835E02B77ef475b0Cc51aA1e0709",
    },
    VRF: {
      Coordinator: {
        bsc: "0x747973a5A2a4Ae1D3a8fDF5479f1514F65Db9C31",
        bsctestnet: "0xa555fC018435bef5A13C6c6870a9d4C11DEC329C",
        matic: "0x3d2341ADb2D31f1c5530cDC622016af293177AE0",
        mumbai: "0x8C7382F9D8f56b33781fE506E897a4F1e2d17255",
        rinkeby: "0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B",
      },
      KeyHash: {
        bsc: "0xc251acd21ec4fb7f31bb8868288bfdbaeb4fbfec2df3735ddbd4f7dc8d60103c",
        bsctestnet: "0xcaf3c3727e033261d383b315559476f48034c13b18f8cafed4d871abe5049186",
        matic: "0xf86195cf7690c55907b2b611ebb7343a6f649bff128701cc542f0569e2c549da",
        mumbai: "0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4",
        rinkeby: "0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311",
      },
      Fee: {
        bsc: "200000000000000000",
        bsctestnet: "100000000000000000",
        matic: "100000000000000",
        mumbai: "100000000000000",
        rinkeby: "100000000000000000",
      },
    },
  },
  operator: "0x2eD96C63F67416c6105B09F60c05686Db7fa8eDc",
  treasure: "0x2eD96C63F67416c6105B09F60c05686Db7fa8eDc",
  injector: "0x2eD96C63F67416c6105B09F60c05686Db7fa8eDc",
  Multisig: {
    bsc: "0x2eD96C63F67416c6105B09F60c05686Db7fa8eDc",
    bsctestnet: "0x2eD96C63F67416c6105B09F60c05686Db7fa8eDc",
    matic: "0x2eD96C63F67416c6105B09F60c05686Db7fa8eDc",
    mumbai: "0x2eD96C63F67416c6105B09F60c05686Db7fa8eDc",
    rinkeby: "0x2eD96C63F67416c6105B09F60c05686Db7fa8eDc",
  }
};

//BSC

//Hibiki token: truffle deploy --network bsc --token 0xa532cfaa916c465a094daf29fea07a13e41e5b36
//Funds token: truffle deploy --network bsc --token 0x9aa0BC6E3ae67ad878410CcE332FD8C680F953C2

//SWAPP token: truffle deploy --network bsc --token 0x0efE961C733FF46ce34C56a73eba0c6a0E18E0F5

//SafeVault token: truffle deploy --network bsc --token 0xe2e6e66551E5062Acd56925B48bBa981696CcCC2
//EthVault token: truffle deploy --network bsc --token 0x63d55ecDEbF08f93D0F2D5533035ddcCaa997d7A
//Vault(BTC) token: truffle deploy --network bsc --token 0x92da405b6771c9Caa7988A41dd969a73d10A3cc6

