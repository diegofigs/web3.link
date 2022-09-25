import React from "react";
import { useEffect } from "react";
import asset from "../../assets/Ethereum-Logo-BackgroundLess.png";
import useWriteContracts from "../../hooks/useWriteContracts";
export const HomeContent = () => {
  // eslint-disable-next-line
  const { writeContracts, userSigner } = useWriteContracts();
  console.log(writeContracts.ProfileFactory);

  useEffect(() => {
    if (writeContracts.ProfileFactory) {
      writeContracts.ProfileFactory.allProfiles().then(allProfiles => {
        console.log(allProfiles);
      });
    }
  }, [writeContracts]);
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="w-[75%] flex self-center md:flex-row flex-col justify-center md:justify-start homeContentsBG rounded-[1.5rem] mt-8">
        <div className="flex lg:flex-row flex-col flex-1 p-6 lg:gap-x-[82px] 2xl:gap-x-[128px]">
          <div className="lg:w-[50%] px-6 h-auto gap-y-[42px] lg:gap-y-9">
            <div className="font-extrabold w-full text-[36px] md:text-[54px] flex-1 flex css-current-storage text-white justify-evenly">
              <span className="text-left">Your decentralized profile in one link.</span>
            </div>
            <div className="text-[28px] w-full md:text-[36px] flex flex-1 css-current-storage text-white">
              <span className="text-left">Share links of socials and address with a single profile.</span>
            </div>
            <div className="flex flex-row w-full justify-start gap-x-[84px] lgs:gap-x-[128px]">
              <div className="h-full w-1/4">
                <input
                  type="text"
                  placeholder="Weblink/profile"
                  className="rounded-full text-white homeContentsBG px-4 py-5 text-lg"
                ></input>
              </div>
              <div className="h-full">
                <button className="accentColorBG rounded-full px-4 py-5 text-lg mr-auto">
                  <span className="text-white">Claim your profile</span>
                </button>
              </div>
            </div>
          </div>
          <div
            className="flex px-4 py-2 lg:py-0  avatar self-center w-[350px]
	h-[350px]"
          >
            <img src={asset} alt="homeImg1" className="scale-90 flex justify-center"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
