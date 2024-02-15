import { useState } from "react";
import "./App.css";
import ConnectWallet from "./components/ConnectWallet";
import TokenAddress from "./components/TokenAddress";

const App = () => {
  const [walletAddress, setWalletAddress] = useState("");

  return (
    <div className="app">
      <div>
        <ConnectWallet
          walletAddress={walletAddress}
          setWalletAddress={setWalletAddress}
        />
        <TokenAddress walletAddress={walletAddress} />
      </div>
    </div>
  );
};

export default App;
