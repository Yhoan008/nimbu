import React from "react";

import galaxi from "./../assets/galaxi.png";

export default function Home() {
  return (
    <div className="flex w-full h-[100vh] ">
      <div className="w-1/2 h-[80vh] flex justify-center items-center relative ">
        <div
          className="w-[60%] h-[60%] bg-slate-500 absolute "
          style={{ borderRadius: "100px 40px 100px 50px" }}
        />
        <img src={galaxi} alt="" className="w-[40vw] relative " />
      </div>
      <div className="w-1/2 h-[80vh] flex flex-col box-content px-10 justify-center items-center ">
        <h1>Start your Journey!</h1>
        <p>
          Learning English has never been as easy and enjoyable as it is at
          NIMBU! We're here to help you improve your language skills.
        </p>
        <button>LET’S GO</button>
      </div>
    </div>
  );
}
