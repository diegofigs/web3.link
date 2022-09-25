import { useParams } from "react-router-dom";
import { useState } from "react";
import profilePic from "../assets/Ethereum-Logo-BackgroundLess.png";

export default function Profile() {
  let { profileID } = useParams();

  const [links] = useState({});
  const whiteListBrandNames = ["instagram.com", "twitter.com", "twitch.tv", "tiktok.com", "youtube.com", "github.com"];

  const BrandBackground = brand => {
    for (const whiteListBrand of whiteListBrandNames) {
      if (brand.includes(whiteListBrand)) {
        switch (whiteListBrand) {
          case "instagram.com":
            return "instagramThemeLinks text-black";
          case "twitter.com":
            return "twitterThemeLinks text-white";
          case "twitch.tv":
            return "twitchThemeLinks text-white";
          case "tiktok.com":
            return "tiktokThemeLinks text-white";
          case "youtube.com":
            return "youtubeThemeLinks text-white";
          case "github.com":
            return "githubThemeLinks text-white";
          default:
            return "adminContentsBG text-black";
        }
      }
    }
    return "adminContentsBG";
  };

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full flex flex-col items-center">
        <div className="w-screen flex flex-col items-center adminBG justify-center">
          <div className="flex justify-center items-center">
            <img src={profilePic} alt="Avatar" className="rounded-full h-[178px] w-[178px]" />
          </div>
          <div className="w-1/2 text-white text-4xl pb-8">
            <span>{profileID}</span>
          </div>
        </div>
        <div className="text-3xl text-left block self-center p-4">
          <span>Bio: </span>
        </div>
        <div className="p-8 overflow-y-auto w-3/4 h-3/4 flex flex-col items-center">
          <div className="flex w-full h-[80%] max-h-[80%] lg:h-[80%] lg:max-h-[80%] 2xl:w-full 2xl:h-[80%] 2xl:max-h-[80%] 2xl:mt-8 overflow-y-visible overflow-x-hidden">
            <div className="flex flex-1 flex-col 2xl:space-y-8 space-y-4 items-center">
              {Object.entries(links).map(([key, value]) => (
                <div key={key} className="flex flex-col w-[80%] md:w-[60%] 2xl:w-[60%]">
                  <div
                    className={` flex flex-col  w-full 2xl:w-full rounded-[0.8rem] font-bold py-1 px-2 pt-2 ${BrandBackground(
                      value.link,
                    )}`}
                  >
                    <div
                      key={key}
                      className={value.name !== "" && value.link !== "" ? "flex flex-col  w-[80%] h-[20%]" : "hidden"}
                    >
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className={` flex flex-1 flex-col  w-full h-1/4 rounded-[0.8rem] font-bold ${BrandBackground(
                          value.link,
                        )}`}
                        href={value.link}
                      >
                        <span className="flex flex-0.5 pt-2 px-2 bg-transparent self-center justify-center mx-auto mb-3">
                          {value.name}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full h-24 flex justify-center items-center text-4xl text-bold text-white adminBG">
        <span>Web3 Link</span>
      </footer>
    </div>
  );
}
