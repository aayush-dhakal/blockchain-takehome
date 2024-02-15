import { useEffect, useState } from "react";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import initializeMoralis from "../utils/initializeMoralis";

const TokenAddress = ({ walletAddress }) => {
  const [showResult, setShowResult] = useState(false);
  const [address, setAddress] = useState(walletAddress);
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    const chain = EvmChain.ETHEREUM;

    try {
      const response = await Moralis.EvmApi.token.getWalletTokenBalances({
        address,
        chain,
      });

      setResult(response.toJSON());
      setError("");
      setShowResult(true);
    } catch (error) {
      console.error(error);
      setError("Error on api call");
      initializeMoralis(import.meta.env.VITE_PUBLIC_MORALIS_API_KEY);
    }
  };

  useEffect(() => {
    setAddress(walletAddress);
    setResult([]);
    setShowResult(false);
  }, [walletAddress]);

  return (
    <section>
      <label htmlFor="walletAddress">
        <h4 className="text-brown">Add your public Wallet Address:</h4>
      </label>
      <div className="mt-3 mb-3">
        <input
          type="text"
          id="walletAddress"
          name="walletAddress"
          maxLength="120"
          value={address}
          required
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Show Tokens</button>

      <section>
        {result.map((token) => {
          return (
            <section
              key={token.token_address}
              className="token-section mt-3 p-1"
            >
              <p>
                <span className="text-brown">Token Name: </span>
                {token.name}
              </p>
              <p>
                <span className="text-brown">Token Address: </span>
                {token.token_address}
              </p>
            </section>
          );
        })}

        {showResult && result.length === 0 && (
          <div className="mt-3">You have no tokens</div>
        )}

        {error && <div className="error-message mt-3">{error}</div>}
      </section>
    </section>
  );
};

export default TokenAddress;
