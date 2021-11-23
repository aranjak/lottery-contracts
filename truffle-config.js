/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKey = "";
const etherscanKey = "";
const infuraKey = "";
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    // development: {
    //  host: "127.0.0.1",     // Localhost (default: none)
    //  port: 8545,            // Standard Ethereum port (default: none)
    //  network_id: "*",       // Any network (default: none)
    // },
    // Another network with more advanced options...
    // advanced: {
    // port: 8777,             // Custom port
    // network_id: 1342,       // Custom network
    // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
    // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
    // from: <address>,        // Account to send txs from (default: accounts[0])
    // websocket: true        // Enable EventEmitter interface for web3 (default: false)
    // },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    // ropsten: {
    //   provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/YOUR-PROJECT-ID`),
    //   network_id: 3,       // Ropsten's id
    //   gas: 5500000,        // Ropsten has a lower block limit than mainnet
    //   confirmations: 2,    // # of confs to wait between deployments. (default: 0)
    //   timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    //   skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    // },
    bsctestnet: {
      provider: () => new HDWalletProvider(
        privateKey,
        "https://data-seed-prebsc-1-s2.binance.org:8545"
      ),
      network_id: 97,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    mumbai: {
      provider: () => new HDWalletProvider(
        privateKey,
        "https://polygon-mumbai.infura.io/v3/" + infuraKey
      ),
      network_id: 80001,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    matic: {
      provider: () => new HDWalletProvider(
        privateKey,
        "https://polygon-mainnet.infura.io/v3/" + infuraKey
      ),
      network_id: 137,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    rinkeby: {
      provider: () => new HDWalletProvider(
        privateKey,
        "https://rinkeby.infura.io/v3/" + infuraKey
      ),
      network_id: 4,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bsc: {
      provider: () => new HDWalletProvider(
        privateKey,
        "https://bsc-dataseed.binance.org/"
      ),
      network_id: 56,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    // Useful for private networks
    // private: {
    // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
    // network_id: 2111,   // This network is yours, in the cloud.
    // production: true    // Treats this network as if it was a public net. (default: false)
    // }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.4",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: true,
         runs: 200
       },
      //  evmVersion: "byzantium"
      }
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled: false to enabled: true
  //
  // Note: if you migrated your contracts prior to enabling this field in your Truffle project and want
  // those previously migrated contracts available in the .db directory, you will need to run the following:
  // $ truffle migrate --reset --compile-all

  db: {
    enabled: false
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: etherscanKey
  }
};

//Mumbai

//SWAPP token
//truffle deploy --network mumbai --token 0xBDEdd94EE87c54760a795be5cE858e853EF59aE7
// RandomNumberGenerator
// 0x77d024D380C6dc752caF0aE8E152dAdd99E356DC
// TokenLottery
// 0xDa6481C43F7Da07ccC7292F041D3A81E3ccBbdc4

//LINK token
//truffle deploy --network mumbai --token 0x326C977E6efc84E512bB9C30f76E30c160eD06FB
// RandomNumberGenerator
// 0x7d3e8a7f4e50cBf822c7a752c6cC36B37FDb082c
// TokenLottery
// 0x7b9408713b460073366edcFF8253906c851E669a

//BSC Test

//SWAPP token
// truffle deploy --network bsctestnet --token 0x45f3354Bb22D65bfFDdf65a069fa6F456f253c61
// RandomNumberGenerator
// 0xB04E7D80504DBa92062EAcf1e8d309c4F1E6f22A
// TokenLottery
// 0x89e7b3E896f14B6e667773B0D5d5387e55fDe826

//LINK token
//truffle deploy --network bsctestnet --token 0x84b9B910527Ad5C03A9Ca831909E21e236EA7b06
// RandomNumberGenerator
// 0x0ED44D359809c53fC6D56a0e05C07ac26e1b4095
// TokenLottery
// 0x6Aa2218B3d2F02817Daab5f2B86B95AB43371c03


// 0x967BC82f9a7ADB9bbc0bd74e5c72Ec61bf6B4eA7
// 0x4Def02917caC0d24C8fD19924c74b3A564f70135