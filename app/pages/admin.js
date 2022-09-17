import React, { useState} from "react";
import Link from "next/link";

export default function Admin() {

  const [links, setLinks] = useState({ _id: '', linkObj:{name: '', link: ''}});

  const clickAddLink = () => addToMap();

  const deleteOnMap = (key) => {
    setLinks((prev) => {
      const newState = new Map(prev);
      newState.delete(key);
      return newState;
    });
  };

 

  const addToMap = () => {
    setLinks((prev) => ({...prev, _id: "4a5d6v", linkObj:{name: '', link: ''}}))};
  
  const updateMap = (key, value) => {
    setLinks((prev) => new Map([...prev, [key, value]]));
  };

  const clear = () => {
    setLinks((prev) => new Map(prev.clear()));
  };

  const [prev, setPrev] = useState(false);
  const handleClickPrev = () => setPrev((p) => !p);

  return (
    <div className="bg-red-200 w-screen h-screen flex flex-col lgs:flex-row relative flex-1">
      <section className=" bg-white lgs:h-full lgs:w-[56px] h-[42px] flex"></section>
      <div className="lgs:h-full lgs:w-[1000px] flex flex-col h-full">
        <div className="lgs:h-[56px] lgs:w-screen flex lgs:flex-row flex-1 flex-col">
          <div className="lgs:h-full lgs:w-1/2 flex h-[42px]">
            <ul className="flex flex-row space-x-4 px-4 text-[24px]">
              <li>Links</li>
              <li>Appearance</li>
            </ul>
          </div>
          <div className="lgs:h-full lgs:w-1/2 order-first lgs:order-last flex h-[42px} px-4">
            <Link href="/">Mylink/fire</Link>
          </div>
        </div>
        <div className="lgs:h-full lgs:w-screen flex lgs:flex-row h-full w-screen">
          <div className="lgs:h-full lgs:w-[55%] flex w-screen justify-center lgs:justify-start">
            <div className="mb-12 mx-4 w-screen ">
              <div className="my-4">
                <div className="mx-8 space-x-32 flex flex-row w-screen ">
                  <button onClick={clickAddLink}>Add New Link</button>
                  <button>Suggestion</button>
                </div>
                <div className="flex w-screen mx-4 mt-2">
                  <div>
                    {[Object.entries(links)].map(([key, value]) => (
                        <div key={key} id={key}>
                          <div>
                            <form id={key}>
                              <span>Name</span>
                              <input
                                type="text"
                                required
                                value={links.linkObj.name}
                                onChange={(e) =>
                                  setLinks({ ...links.linkObj, name: e.target.value })
                                }
                              />
                              <span>Link</span>
                              <input
                                type="text"
                                required
                                Value={links.linkObj.link}
                                onChange={(e) =>
                                  setLinks({ ...links.linkObj, link: e.target.value })
                                }
                              />
                            </form>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              !prev
                ? "lgs:h-full lgs:w-[45%] hidden lgs:inline"
                : "SlideUp -translate-y-[122px] scale-y-[1.005]"
            }
          >
            Preview div
          </div>
        </div>
      </div>
      <div className=" lgs:hidden h-[85px] flex justify-center inset-x-0 bottom-0 z-10">
        <button onClick={handleClickPrev}>Preview</button>
      </div>
    </div>
  );

 }
          
          
          

