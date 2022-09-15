import React from "react";
//Share your decentralized profile in one unique link.
//bg-gradient-to-r from-cyan-500 to-blue-500
export const HomeContent = () => {
  return (
    <div className="flex flex-col md:flex-row w-screen h-screen">
      <div className="HomeSetting">
        <div className="flex flex-col">
          <div className="flex psm:text-[35px] font-extrabold justify-center md:justify-start md:w-[280px] md:h-[350px] ">
            <span className="w-[200px] relative -z-10">
              Share your decentralized profile in one unique link.
            </span>
          </div>
          <div className="flex psm:text-[25px] font-extrabold w-screen justify-center  md:justify-start md:w-[250px] md:h-[350px]">
            <span className="w-[200px] relative -z-10">
              Share your decentralized profile in one unique link.
            </span>
          </div>
        </div>
        <div className="flex psm:font-[25px] font-extrabold w-screen justify-center md:w-[250px] md:h-[350px]">
          <span className="w-[200px]  relative -z-10">
            Share your decentralized profile in one unique link. Pic here or
            whatever
          </span>
        </div>
      </div>
    </div>
  );
};
