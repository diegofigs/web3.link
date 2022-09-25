import { ethers } from "ethers";
import { abi } from "../contracts/hardhat_contracts.json";
import { useEffect, useState } from "react";
import { useContractLoader } from "eth-hooks";
import useWriteContracts from "../../hooks/useWriteContracts";



export default function useProfile() {
  
  const [userSignerAddress, setUserSignerAddress] = useState();
  const [ContractAddress, setContractAddress] = useState();
  const [FactoryContractAddress, setFactoryContractAddress] = useState();
  const contractConfig = { deployedContracts: deployedContracts || {}, externalContracts: externalContracts || {} };

  const { writeContracts, userSigner } = useWriteContracts();
  useEffect(() => {
    if (writeContracts.ProfileFactory) {
      writeContracts.ProfileFactory.getAddress().then(profileFactoryAddress => {
        console.log(profileFactoryAddress);
        setFactoryContractAddress(profileFactoryAddress)
      });
    }
  }, [writeContracts]);
  
  const readContracts = useContractLoader(localProvider, contractConfig);
 

  useEffect(() => {
    async function getAddress() {
      if (readContracts) {
        const newContractAddress = await readContracts.getAddress();
        setContractAddress(newContractAddress);
      }
    }
    getAddress();
  }, [readContracts]);

  profile = new ethers.Contract(ContractAddress, abi, userSigner);
  return profile;
}
