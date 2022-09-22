import React from "react";
import asset from "../../assets/HomePic1.jpg";
export const HomeContent = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="w-[75%] h-[85%] flex self-center md:flex-row flex-col justify-center md:justify-start adminContentsBG rounded-[1.5rem] mt-8">
        <div className="flex lg:flex-row flex-col flex-1 p-4">
          <div className="lg:w-[50%] px-6 h-auto">
            <div className="font-extrabold text-[36px] md:text-[48px] flex-1 flex">
            <span>Your decentralized profile in one link.</span>
            </div>
            <div className="text-[28px] md:text-[36px] flex shrink">
            <span>Share links of socials and address with a single domain.</span>
            </div>
          </div>
          <div className="flex self-center lg:self-start px-4 py-2 lg:py-0 lg:w-[75%]">
          <img src={asset}  className="rounded-[1.5rem] scale-90"/>
          </div>
        </div>
      </div>
    </div>
  );
};
