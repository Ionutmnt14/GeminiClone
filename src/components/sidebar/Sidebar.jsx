import { useState } from "react";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className="sidebar min-h-screen inline-flex flex-col justify-between bg-[#f0f4f9] px-3 py-5">
      <div className="top">
        <img
          className="menu w-[1.25rem] block ml-[.625rem] cursor-pointer hover:bg-[#e2e6eb]"
          src={assets.menu_icon}
          alt=""
          onClick={() => setExtended(prev=>!prev)}
        />
        <div className="new-chat mt-14 inline-flex items-center gap-2.5 px-3 py-2 bg-[#e6eaf1] rounded-3xl text-[1rem] text-gray-500 cursor-pointer">
          <img src={assets.plus_icon} className="w-[1.25rem]" alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent flex flex-col ">
            <p className="recent-title mb-5 mt-8">Recent</p>
            <div className="recent-entry flex items-start gap-2.5 p-2.5 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
              <img src={assets.message_icon} className="w-[1.25rem]" alt="" />
              <p>What is react...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom flex flex-col ">
        <div className="bottom-item recent-entry flex gap-2.5 p-2.5 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb] items-center">
          <img src={assets.question_icon} className="w-5" alt="" />
          {extended ?<p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry flex items-center gap-2.5 p-2.5 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img src={assets.history_icon} className="w-5" alt="" />
          {extended ?<p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry flex items-center gap-2.5 p-2.5 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img src={assets.setting_icon} className="w-5" alt="" />
          {extended ?<p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
