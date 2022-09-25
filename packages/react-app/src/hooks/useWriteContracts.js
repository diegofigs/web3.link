import { useContractLoader, useUserProviderAndSigner } from "eth-hooks";

import { useState, useEffect } from "react";

import { NETWORKS } from "../constants";

import externalContracts from "../contracts/external_contracts";
// contracts
import deployedContracts from "../contracts/hardhat_contracts.json";

import { useStaticJsonRPC } from "../hooks";
const USE_BURNER_WALLET = true;
const initialNetwork = NETWORKS.mumbai;
const networkOptions = [initialNetwork.name, "mainnet", "goerli"];

export default function useWriteContracts() {
  const [injectedProvider] = useState();
  const [selectedNetwork] = useState(networkOptions[0]);
  // eslint-disable-next-line
  const [address, setAddress] = useState();

  const targetNetwork = NETWORKS[selectedNetwork];
  const localProvider = useStaticJsonRPC([
    process.env.REACT_APP_PROVIDER ? process.env.REACT_APP_PROVIDER : targetNetwork.rpcUrl,
  ]);

  const userProviderAndSigner = useUserProviderAndSigner(injectedProvider, localProvider, USE_BURNER_WALLET);
  const userSigner = userProviderAndSigner.signer;

  useEffect(() => {
    async function getAddress() {
      if (userSigner) {
        const newAddress = await userSigner.getAddress();
        setAddress(newAddress);
      }
    }
    getAddress();
  }, [userSigner]);

  const contractConfig = { deployedContracts: deployedContracts || {}, externalContracts: externalContracts || {} };

  const localChainId = localProvider && localProvider._network && localProvider._network.chainId;
  const writeContracts = useContractLoader(userSigner, contractConfig, localChainId);
  return { writeContracts, userSigner };
}
