import profilePic from "../NFT-Avatar.png";
import { useParams } from "react-router-dom";

export default function Profile() {
  let { profileID } = useParams();
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full flex flex-col items-center">
        <div className="w-screen h-1/4 flex flex-col items-center adminBG justify-center">
          <div className="w-1/2 h-[70%] flex justify-center items-center">
            <img src={profilePic} alt="Avatar" className="rounded-full h-[178px] w-[178px]" />
          </div>
          <div className="w-1/2 text-white text-3xl">
            <span>{profileID}</span>
          </div>
        </div>
        <div className="p-8 overflow-y-auto w-3/4 h-3/4 flex flex-col items-center">
          <span>Links Links Links</span>
        </div>
      </div>
      <footer className="w-full h-24 flex justify-center items-center text-4xl text-bold text-white adminBG">
        <span>Web3 Link</span>
      </footer>
    </div>
  );
}
