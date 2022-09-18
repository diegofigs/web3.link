import React, { useState } from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import {TrashIcon, HomeIcon} from "@heroicons/react/24/outline/";

export default function Admin() {
  const [links, setLinks] = useState({});

  const onDelete = (key) => {
    let newLinks = { ...links };
    delete newLinks[key];
    setLinks(newLinks);
  };

  const onAdd = () => {
    setLinks((prev) => {
      return {
        ...prev,
        [uuidv4()]: { name: "", link: "" },
      };
    });
  };

  const onUpdate = (key, value) => {
    setLinks((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const [prev, setPrev] = useState(false);
  const handleClickPrev = () => setPrev((p) => !p);
  return (
    <div className="bg-red-200 w-screen h-screen flex flex-col lgs:flex-row overflow-hidden">
      <section className=" bg-white lgs:h-full lgs:w-[2.5%] h-[6%] flex justify-items-center flex-col">
        <button>
        <Link href="/"><HomeIcon className="w-[80%]"/></Link>
        </button>
      </section>
      <div className="lgs:h-full lgs:w-[55%] flex flex-col h-[82%]">
        <div className="lgs:h-[56px] lgs:w-screen flex lgs:flex-row flex-col">
          <div className="lgs:h-full lgs:w-[50%] flex h-[42px]">
            <ul className="flex flex-row space-x-4 px-4 text-[24px]">
              <li>Links</li>
              <li>Appearance</li>
            </ul>
          </div>
          <div className="lgs:h-full lgs:w-[45%] order-first lgs:order-last flex h-[42px} px-4 lgs:items-center lgs:justify-end ">
            <Link href="/">Mylink/fire</Link>
          </div>
        </div>
        <div className="lgs:h-full lgs:w-screen flex lgs:flex-row h-full">
          <div className="lgs:h-full lgs:w-[55%] flex justify-center lgs:justify-start">
            <div className="flex-1 flex justify-center lgs:w-[60%] lgs:border-y-4 lgs:border-r-4 border-t-4 border-white">
              <div className="my-4 flex-1">
                <div className="space-x-24 flex mb-4 lgs:mb-0 flex-row w-screen lgs:w-full flex-1 justify-center lgs:space-x-18 lgs:mt-5">
                  <button className="AddNew_Suggestion_Btn"onClick={onAdd}>Add New Link</button>
                  <button className="AddNew_Suggestion_Btn">Suggestion</button>
                </div>
                <div className="w-screen h-[83%] lgs:w-full lgs:h-[88%] lgs:mt-8 overflow-auto">
                <div className="flex flex-1 w-screen flex-col lgs:w-full items-center">
                  <div className="flex flex-1 w-[80%] lgs:w-full flex-col lgs:space-y-8  space-y-4 lgs:items-center">
                  {Object.entries(links).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex flex-1 flex-col  w-full lgs:w-[60%] bg-white rounded-[1.1rem] border-white border-x-[1rem] border-y-[1rem]"
                    >
                      <input
                        className="flex flex-0.5 w-full"
                        type="text"
                        placeholder="Title"
                        value={value.name}
                        onChange={(e) =>
                          onUpdate(key, {
                            ...value,
                            name: e.target.value,
                          })
                        }
                      />

                      <input
                        className="flex flex-0.5 w-full mt-1"
                        type="text"
                        placeholder="Link"
                        value={value.link}
                        onChange={(e) =>
                          onUpdate(key, {
                            ...value,
                            link: e.target.value,
                          })
                        }
                      />
                      <div className="flex flex-1 self-end mt-1">
                        <button
                          onClick={() => onDelete(key)}
                        >
                          <TrashIcon className="w-4 lgs:w-6"/>
                        </button>
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
                ? "lgs:h-full lgs:w-[43%] hidden lgs:inline border-t-4 border-white"
                : "SlideUp -translate-y-[115px] scale-y-[1.005]"
            }
          >
            Preview div
          </div>
        </div>
      </div>
      <div className=" lgs:hidden h-[10%] flex justify-center z-10">
        <button onClick={handleClickPrev}>Preview</button>
      </div>
    </div>
  );
}
