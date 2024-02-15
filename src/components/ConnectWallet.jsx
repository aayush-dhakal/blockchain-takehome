import { useState } from "react";

const ConnectWallet = ({ walletAddress, setWalletAddress }) => {
  const [errorMessage, setErrorMessage] = useState("");

  // Requests access to the user's Meta Mask Wallet
  async function requestAccount() {
    // first check if meta mask exits
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log("Error connecting...");
        setErrorMessage("Error connecting...");
      }
    } else {
      alert("Meta Mask not detected");
      setErrorMessage("Meta Mask not detected...");
    }
  }

  return (
    <div>
      <button onClick={requestAccount}>Connect your wallet</button>

      {walletAddress && (
        <h3>
          Wallet Address: <span className="text-blue">{walletAddress}</span>
        </h3>
      )}

      <h4 className="error-message">{errorMessage}</h4>
    </div>
  );
};

export default ConnectWallet;
