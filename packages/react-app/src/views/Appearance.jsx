import React, { useState } from "react";
import { Link } from "react-router-dom";

import { HomeIcon, UserIcon } from "@heroicons/react/24/outline/";
import profilePic from "../assets/Ethereum-Logo-BackgroundLess.png";

export default function Admin() {
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

  const [links] = useState({});
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const [prev, setPrev] = useState(false);
  const handleClickPrev = () => setPrev(p => !p);

  const [profileMenu, setOpenCloseProfile] = useState(false);
  const handleClickProfileMenu = () => setOpenCloseProfile(!profileMenu);

  return (
    <div className="adminBG w-screen h-screen flex relative overflow-hidden">
      <div className="adminBG w-screen h-screen flex flex-col 2xl:flex-row justify-items-stretch">
        <section className="adminNavBar 2xl:h-full 2xl:w-[2.5%] h-[6%] flex 2xl:justify-items-center 2xl:flex-col flex-row 2xl:space-y-5 space-x-4 2xl:space-x-0 z-20">
          <button>
            <Link to="/homemain">
              <HomeIcon className="2xl:w-[80%] w-10 text-white pl-2 pt-2 hover:animate-pulse" />
            </Link>
          </button>

          <button onClick={handleClickProfileMenu}>
            <UserIcon className="text-white 2xl:w-[80%] w-10 pl-2 pt-2 flex mr-auto 2xl:mr-0 2xl:mb-auto hover:animate-pulse" />
          </button>
        </section>
        <div className="2xl:h-full 2xl:w-[97.5%] flex flex-col h-[84%]">
          <div className="2xl:h-[8%] 2xl:w-full flex 2xl:flex-row flex-col h-[12%]">
            <div className="2xl:h-full flex">
              <ul className="flex flex-row space-x-2 2xl:pl-6 lg:text-[28px] items-center pt-2 2xl:pt-2 text-lg h-full justify-center">
                <li className="px-6 NavBarBtn hover:rounded-[1.1rem]">
                  <Link to="/admin" className="text-white hover:text-white">
                    Links
                  </Link>
                </li>
                <li className="px-6 NavBarBtn hover:rounded-[1.1rem]">
                  <Link to="/appearance" className="text-white hover:text-white">
                    Appearance
                  </Link>
                </li>
              </ul>
            </div>
            <div className="2xl:ml-auto 2xl:justify-center items-center flex h-1/2 2xl:h-full">
              <div className="2xl:pr-4 text-[20px] pl-2 2xl:pl-0 flex">
                <Link to="/" className="text-white hover:text-white">
                  Wallet: Mylink/fire
                </Link>
              </div>
            </div>
          </div>
          <div className="2xl:h-[92%] 2xl:w-full flex flex-row h-full">
            <div className="2xl:h-full 2xl:w-[65%] 2xl:max-h-full flex justify-start items-center 2xl:border-r-4 border-t-4 adminBorders flex-col">
              <div className="space-x-24 flex mb-4 2xl:h-[9%] 2xl:mb-0 flex-row w-screen 2xl:w-full justify-center 2xl:space-x-18">
                <div className="mt-4 space-x-24 ">
                  <button className="Save_Btn">Save</button>
                </div>
              </div>
              <div className="w-screen h-[70%] psm:h-[80%] md:h-[85%] lg:h-[75%] 2xl:w-full 2xl:h-[88%] 2xl:mt-8 overflow-y-auto overflow-x-hidden">
                <div className="flex flex-1 w-screen flex-col 2xl:w-full items-center h-[50%]">
                  <div className="flex flex-1 w-[80%] 2xl:w-full flex-col 2xl:space-y-8 space-y-4 items-center">
                    <div className="w-[75%] h-[75%] p-4 flex flex-col nameBioBgColor rounded-2xl gap-y-7">
                      <div className="w-full h-[15%]">
                        <input
                          className="flex flex-0.5 w-full pt-2 px-2 bg-transparent h-full text-white "
                          type="text"
                          placeholder="Enter display name"
                          value={name}
                          onChange={e => setName(e.target.value)}
                        />
                      </div>
                      <div className="w-full h-[85%]">
                        <textarea
                          rows="4"
                          cols="100"
                          className="flex flex-0.5 w-full px-2 bg-transparent h-full text-white "
                          type="text"
                          placeholder="Enter bio"
                          value={bio}
                          multiline={true}
                          onChange={e => setBio(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                !prev
                  ? "2xl:h-full 2xl:max-h-full 2xl:w-[35%] hidden 2xl:flex border-t-4 adminBorders  text-white"
                  : "SlideUp -translate-y-[115px] flex"
              }
            >
              <div className="w-full h-full flex items-center justify-center self-start">
                <div className="2xl:w-[45%] w-[55%] lg:w-[45%] h-[60%] bg-white flex flex-col border-black border-[12px] rounded-[48px] z-10 overflow-hidden">
                  <div className="w-full h-full flex flex-col items-center overflow-y-auto overscroll-contain overflow-hidden ">
                    <div className="w-full h-1/4 flex flex-col items-center adminBG justify-center">
                      <div className="w-1/2 h-[70%] flex justify-center items-center">
                        <img src={profilePic} alt="Avatar" className="rounded-full h-[48px] w-[48px]" />
                      </div>
                      <div className="w-1/2 text-white text-sm">
                        <span>Name Name Name</span>
                      </div>
                    </div>
                    <div className="p-4 w-full h-3/4 max-h-[75%] overflow-y-visible overflow-x-hidden">
                      <div className="flex w-full flex-col space-y-3 items-center">
                        {Object.entries(links).map(([key, value]) => (
                          <div
                            key={key}
                            className={
                              value.name !== "" && value.link !== "" ? "flex flex-col  w-[80%] h-[20%]" : "hidden"
                            }
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
                        ))}
                      </div>
                    </div>
                  </div>
                  <footer className="w-full h-12 flex justify-center items-center text-xl text-bold text-white adminBG">
                    <span>Web3 Link</span>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" 2xl:hidden h-[8%] flex justify-center z-10 items-center">
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
            : "2xl:w-[500px] 2xl:h-[500px] bg-white 2xl:translate-x-1 w-screen h-screen absolute overflow-y-auto flex flex-col adminBorders border-4 z-10"
        }
      >
        <div className="w-full h-[95%] 2xl:h-full flex flex-col translate-y-[64px] 2xl:transform-none">
          Insert Anything Here Profile Related
        </div>
      </div>
    </div>
  );
}
