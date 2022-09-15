import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { stringify } from "gray-matter";

export default function Admin() {
  const [links, setLinks] = useState([{id: 0, name: "", link: ""}]);
  const [amountOfLinks, setAmount] = useState(0);
 
  const clickAddLink = () => {
    setAmount(amountOfLinks + 1); 
    setLinks(links => [...links, {id: 0, name: "", link: ""}]);
    }
 
    function change (index)
    {
      links[index].name = document.getElementById("name");
    }
  const [Prev, setPrev] = useState(false);
  const handleClickPrev = () => setPrev(!Prev);

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
                    {links.map((link, index) => (
                      <div key={index}>
                        {amountOfLinks > 0 &&  (
                        <div>
                          <span>Name</span>
                          <input name="name" type="text" id="name" required  onBlur={change(index)}/>
                          <span>Link</span>
                          <input name="link" type="text" id="link" required />
                        </div>
                          )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              !Prev
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
