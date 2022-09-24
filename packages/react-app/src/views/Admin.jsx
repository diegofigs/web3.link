import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { TrashIcon, HomeIcon, UserIcon } from "@heroicons/react/24/outline/";
import profilePic from "../NFT-Avatar.png";

export default function Admin() {
  const whiteListBrandNames = ["instagram.com", "twitter.com", "twitch.tv", "tiktok.com", "youtube.com", "github.com"];

  const BrandBackground = brand => {
    for (const whiteListBrand of whiteListBrandNames) {
      if (brand.includes(whiteListBrand)) {
        switch (whiteListBrand) {
          case "instagram.com":
            return "instagramThemeLinks";
          case "twitter.com":
            return "twitterThemeLinks";
          case "twitch.tv":
            return "twitchThemeLinks";
          case "tiktok.com":
            return "tiktokThemeLinks";
          case "youtube.com":
            return "youtubeThemeLinks";
          case "github.com":
            return "githubThemeLinks";
          default:
            return "adminContentsBG";
        }
      }
    }
    return "adminContentsBG";
  };

  const [links, setLinks] = useState({});

  const onDelete = key => {
    let newLinks = { ...links };
    delete newLinks[key];
    setLinks(newLinks);
  };

  const onAdd = () => {
    setLinks(prev => {
      return {
        ...prev,
        [uuidv4()]: { name: "", link: "" },
      };
    });
  };

  const onUpdate = (key, value) => {
    setLinks(prev => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const [prev, setPrev] = useState(false);
  const handleClickPrev = () => setPrev(p => !p);

  const [profileMenu, setOpenCloseProfile] = useState(false);
  const handleClickProfileMenu = () => setOpenCloseProfile(!profileMenu);

  return (
    <div className="adminBG w-screen h-screen flex relative overflow-hidden">
      <div className="adminBG w-screen h-screen flex flex-col lgs:flex-row">
        <section className="adminNavBar lgs:h-full lgs:w-[2.5%] h-[6%] flex lgs:justify-items-center lgs:flex-col flex-row lgs:space-y-5 space-x-4 lgs:space-x-0 z-20">
          <button>
            <Link to="/homemain">
              <HomeIcon className="lgs:w-[80%] w-10 text-white pl-2 pt-2 hover:animate-pulse" />
            </Link>
          </button>

          <button onClick={handleClickProfileMenu}>
            <UserIcon className="text-white lgs:w-[80%] w-10 pl-2 pt-2 flex mr-auto lgs:mr-0 lgs:mb-auto hover:animate-pulse" />
          </button>
        </section>
        <div className="lgs:h-full lgs:w-[55%] flex flex-col h-[84%]">
          <div className="lgs:h-[68px] lgs:w-screen flex lgs:flex-row flex-col h-[10%]">
            <div className="lgs:h-full lgs:w-[50%] flex h-2/3">
              <ul className="flex flex-row space-x-2 pl-6 lg:text-[28px] items-center pt-6 text-lg">
                <li className="NavBarBtn hover:rounded-[1.1rem] px-6">
                  <Link to="/admin" className="text-white hover:text-white">
                    Links
                  </Link>
                </li>
                <li className="NavBarBtn hover:rounded-[1.1rem] px-6">
                  <Link to="/appearance" className="text-white hover:text-white">
                    Appearance
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lgs:h-full lgs:w-[45%] order-first lgs:order-last flex h-1/3 px-4 items-center lgs:justify-end  text-white text-[20px]">
              <Link to="/" className="text-white">
                Wallet: Mylink/fire
              </Link>
            </div>
          </div>
          <div className="lgs:h-full lgs:w-screen flex lgs:flex-row h-full">
            <div className="lgs:h-full lgs:w-[65%] flex justify-center lgs:justify-start">
              <div className="flex-1 flex justify-center lgs:w-[60%] lgs:border-r-4 border-t-4 adminBorders">
                <div className="my-4 flex-1">
                  <div className="space-x-24 flex mb-4 lgs:mb-0 flex-row w-screen lgs:w-full flex-1 justify-center lgs:space-x-18 lgs:mt-5">
                    <button className="AddNew_Suggestion_Btn" onClick={onAdd}>
                      Add New Link
                    </button>
                    <button className="AddNew_Suggestion_Btn">Apply</button>
                  </div>
                  <div className="w-screen h-[70%] psm:h-[80%] md:h-[85%] lg:h-[75%] lgs:w-full lgs:h-[88%] lgs:mt-8 overflow-y-auto overflow-x-hidden">
                    <div className="flex flex-1 w-screen flex-col lgs:w-full items-center">
                      <div className="flex flex-1 w-[80%] lgs:w-full flex-col lgs:space-y-8 space-y-4 items-center">
                        {Object.entries(links).map(([key, value]) => (
                          <div key={key} className="flex flex-1 flex-col  w-[80%] lgs:w-[60%]">
                            <div
                              className={` flex flex-1 flex-col  w-full lgs:w-full rounded-[0.8rem] font-bold ${BrandBackground(
                                value.link,
                              )}`}
                            >
                              <input
                                className="flex flex-0.5 w-full pt-2 px-2 bg-transparent"
                                type="text"
                                placeholder="Title"
                                value={value.name}
                                onChange={e =>
                                  onUpdate(key, {
                                    ...value,
                                    name: e.target.value,
                                  })
                                }
                              />

                              <input
                                className="flex flex-0.5 w-full mt-1 px-2 bg-transparent"
                                type="text"
                                placeholder="Link"
                                value={value.link}
                                onChange={e =>
                                  onUpdate(key, {
                                    ...value,
                                    link: e.target.value,
                                  })
                                }
                              />
                              <div className="flex flex-1 self-end mt-1 px-2 pb-2">
                                <button onClick={() => onDelete(key)}>
                                  <TrashIcon className="w-4 lgs:w-6" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                !prev
                  ? "lgs:h-full lgs:w-[32.5%] hidden lgs:inline border-t-4 adminBorders  text-white"
                  : "SlideUp -translate-y-[115px]"
              }
            >
              <div className="w-full h-full flex items-center justify-center overflow-hidden">
                <div className="w-[45%] h-[60%] bg-white flex flex-col border-black border-[12px] rounded-[48px] z-10">
                  <div className="w-full h-full flex flex-col items-center">
                    <div className="w-full h-1/4 flex flex-col items-center adminBG justify-center">
                      <div className="w-1/2 h-[70%] flex justify-center items-center">
                        <img src={profilePic} alt="Avatar" className="rounded-full h-[48px] w-[48px]" />
                      </div>
                      <div className="w-1/2 text-white text-sm">
                        <span>Name Name Name</span>
                      </div>
                    </div>
                    <div className="p-4 overflow-y-auto overflow-x-hidden w-full h-3/4 flex flex-col items-center">
                      <div className="flex flex-1 w-full flex-col space-y-4 items-center h-1/4">
                        {Object.entries(links).map(([key, value]) => (
                          <div key={key} className="flex flex-1 flex-col  w-[80%] h-[20%]">
                            <a
                              target="_blank"
                              rel="noreferrer"
                              className={` flex flex-1 flex-col  w-full h-1/4 rounded-[0.8rem] font-bold ${BrandBackground(
                                value.link,
                              )}`}
                              href={value.link}
                            >
                              <span className="flex flex-0.5 pt-2 px-2 bg-transparent self-center justify-center mx-auto text-black">
                                {value.name}
                              </span>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <footer className="w-full h-24 flex justify-center items-center text-4xl text-bold text-white adminBG rounded-b-[32px]">
                    <span>Web3 Link</span>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" lgs:hidden h-[8%] flex justify-center z-10 items-center">
          <button
            onClick={handleClickPrev}
            className="adminContentsBG rounded-[1.6rem] adminBorders border-x-[42px] text-[22px] h-[80%] font-bold text-white"
          >
            Preview
          </button>
        </div>
      </div>
      <div
        className={
          !profileMenu
            ? "hidden"
            : "lgs:w-[500px] lgs:h-[500px] bg-white lgs:translate-x-14 w-screen h-screen absolute overflow-y-auto flex flex-col adminBorders border-4 z-10"
        }
      >
        <div className="w-full h-[95%] lgs:h-full flex flex-col translate-y-[64px] lgs:transform-none">
          Insert Anything Here Profile Related
        </div>
      </div>
    </div>
  );
}
