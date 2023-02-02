import { Outlet } from "umi";
import { providers } from "ethers";
import { Web3ReactProvider } from "@web3-react/core";
import styles from "./index.less";

function getLibrary(provider: any): providers.Web3Provider {
  return new providers.Web3Provider(provider);
}

export default function Layout() {
  return (
    <div className={styles.navs}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Outlet />
      </Web3ReactProvider>
    </div>
  );
}
