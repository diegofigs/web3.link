import profilePic from "../NFT-Avatar.png";
//          <img className="" src={profilePic} alt="profile picture" />
export default function Profile() {
  return (
    <div className="w-screen h-screen ">
      <div className="w-full h-full flex flex-col items-center p-4 space-y-10">
        <div className="w-1/3 h-1/3 flex flex-col items-center flex-wrap ">
          <div className=" p-4">
          <img className="scale-50 shadow rounded-full max-w-full border-none" src={profilePic} alt="profile picture" />
          </div>
          <div className="w-1/2 h-1/2 flex items-center justify-center">
            <span>Christian Santiago</span>
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <div className="w-full h-1/2 flex flex-col ">
            <span>Footer awdadda da</span>
          </div>
        </div>
      </div>
    </div>
  );
}
