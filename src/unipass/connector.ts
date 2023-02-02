import { UniPassConnector } from "@unipasswallet/web3-react-v6-connector";

export const unipass = new UniPassConnector({
  chainId: 80001,
  returnEmail: false,
  appSettings: {
    appName: "Web3 React Demo app",
  },
});
