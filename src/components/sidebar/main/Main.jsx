import { useContext } from "react";
import { assets } from "../../../assets/assets";
import { Context } from "../../../context/context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main flex-1 min-h-screen pb-[15vh] relative">
      <div className="nav flex justify-between items-center text-xl p-5 text-[#585858]">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" className="w-10 rounded-full" />
      </div>
      <div className="main-container max-w-4xl m-auto p-5">
        {!showResult ? 
          <>
            <div className="greet my-14 text-6xl text-[#c4c7c5] font-medium">
              <p>
                <span className="bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent">
                  Hello, Dev.
                </span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 p-5">
              <div className="card h-52 bg-[#f0f4f9] p-5 rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] text-base">
                  Suggest beautiful places to see on an upcoming trip
                </p>
                <img
                  src={assets.compass_icon}
                  alt=""
                  className="absolute w-9 p-1 bg-white rounded-2xl bottom-2.5 right-2.5"
                />
              </div>
              <div className="card h-52 bg-[#f0f4f9] p-5 rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] text-base">
                  Briefly summarize this concept: urban planning
                </p>
                <img
                  src={assets.bulb_icon}
                  alt=""
                  className="absolute w-9 p-1 bg-white rounded-2xl bottom-2.5 right-2.5"
                />
              </div>
              <div className="card h-52 bg-[#f0f4f9] p-5 rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] text-base">
                  Brainstorm team bonding activities for our work retreat
                </p>
                <img
                  src={assets.message_icon}
                  alt=""
                  className="absolute w-9 p-1 bg-white rounded-2xl bottom-2.5 right-2.5"
                />
              </div>
              <div className="card h-52 bg-[#f0f4f9] p-5 rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] text-base">
                  Improve the readibility of the the following code
                </p>
                <img
                  src={assets.code_icon}
                  alt=""
                  className="absolute w-9 p-1 bg-white rounded-2xl bottom-2.5 right-2.5"
                />
              </div>
            </div>
          </>
         : 
          <div className="result"></div>
        }

        <div className="main-botom absolute bottom-0 w-full max-w-4xl px-5 m-auto">
          <div className="serach-box flex items-center justify-between gap-5 py-2 px-5 bg-[#f0f4f9] rounded-full">
            <input
              type="text"
              placeholder="Ask Gemini"
              className="flex-1 bg-transparent border-none outline-none p-2 text-lg"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <div className="flex gap-3.5 items-center">
              <img
                src={assets.gallery_icon}
                alt=""
                className="w-6 cursor-pointer"
              />
              <img
                src={assets.mic_icon}
                alt=""
                className="w-6 cursor-pointer "
              />
              <img
                src={assets.send_icon}
                alt=""
                className="w-6 cursor-pointer"
                onClick={() => onSent()}
              />
            </div>
          </div>
          <p className="bottom-info text-xs font-light my-3.5 mx-auto text-center">
            Gemini may display inaccurate information due to its reliance on the
            data it has been trained on, which can sometimes be flawed or
            incorrect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
