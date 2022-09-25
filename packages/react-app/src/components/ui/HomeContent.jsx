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
      <div className="w-[75%] flex self-center lgs:flex-row flex-col justify-center md:justify-start homeContentsBG rounded-[1.5rem] mt-8">
        <div className="flex lgs:flex-row flex-col flex-1 p-6 lgs:gap-x-[82px] 2xl:gap-x-[128px]">
          <div className="lgs:w-[50%] md:px-6 h-auto space-y-[1.8rem] lgs:space-y-9">
            <div className="font-extrabold w-full text-[36px] md:text-[54px] flex-1 flex css-current-storage text-white justify-evenly">
              <span className="text-left">Your decentralized profile in one link.</span>
            </div>
            <div className="text-[28px] w-full md:text-[36px] flex flex-1 css-current-storage text-white">
              <span className="text-left">Share links of socials and address with a single profile.</span>
            </div>
            <div className="flex flex-row w-full justify-start gap-x-[150px] lgs:gap-x-[128px]">
              <div className="h-full w-1/4">
                <input
                  type="text"
                  placeholder="Weblink/profile"
                  className="rounded-full text-white homeContentsBG px-2 py-2 smx:px-4 smx:py-5 text-lgs"
                ></input>
              </div>
              <div className="h-full ml-auto ">
                <button className="accentColorBG rounded-full px-2 smx:px-4 smx:py-5 py-2 text-lgs mr-auto">
                  <span className="text-white">Claim your profile</span>
                </button>
              </div>
            </div>
          </div>
          <div
            className="flex px-4 py-2 lgs:py-0  avatar self-center lgs:w-[310px] w-[150px] h-[150px] mt-10 lgs:mt-0
	lgs:h-[310px]"
          >
            <img src={asset} alt="homeImg1" className="scale-90 flex justify-center"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
