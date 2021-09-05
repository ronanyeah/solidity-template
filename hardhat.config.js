require("hardhat-abi-exporter");

module.exports = {
  solidity: "0.8.7",
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  abiExporter: {
    path: "./abi",
    except: ["openzeppelin"],
  },
};
