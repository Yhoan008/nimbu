import React, { useState } from "react";

import log from "./../assets/log.png";
import sign from "./../assets/register.png";
import user from "./../assets/user.png";
import lock from "./../assets/lock.png";
import mail from "./../assets/mail.png";

export default function App() {
  const [loginActive, setLoginActive] = useState(true);

  document.body.style.overflow = "hidden";

  return (
    <div className=" relative h-[100vh] flex justify-center ">
      <div
        className=" w-[200vh] h-[200vh] bg-[#0CC9B0] -right-[50vw] -top-[100vh] rounded-full absolute"
        style={{ left: loginActive ? "-50vw" : "50vw", transition: "ease 1s" }}
      />
      <SignUp loginActive={loginActive} setLoginActive={setLoginActive} />
      <SignIn loginActive={loginActive} setLoginActive={setLoginActive} />
    </div>
  );
}

function SignUp({ loginActive, setLoginActive }) {
  return (
    <div
      className="w-full h-full flex justify-between absolute transition-transform "
      style={{
        transform: loginActive ? "translateX(-100vw)" : "",
        transition: "ease 1s",
        transitionDelay: ".2s",
      }}
    >
      <form className="w-full h-full flex flex-col justify-center items-center gap-4 ">
        <h1 className=" font-extrabold text-4xl mb-8 ">Sign UP</h1>
        <div className=" flex h-7 bg-[#D9D9D9] py-4 px-8 box-content rounded-full ">
          <img src={user} alt="" className="h-full opacity-50 " />
          <input
            type="text"
            name="UpUser"
            placeholder="Username"
            className="px-2 w-[250px] bg-transparent outline-none "
          />
        </div>
        <div className=" flex h-7 bg-[#D9D9D9] py-4 px-8 box-content rounded-full ">
          <img src={mail} alt="" className="h-full opacity-50 " />
          <input
            type="text"
            name="UpMail"
            placeholder="Email"
            className="px-2 w-[250px] bg-transparent outline-none "
          />
        </div>
        <div className=" flex h-7 bg-[#D9D9D9] py-4 px-8 box-content rounded-full ">
          <img src={lock} alt="" className="h-full opacity-50 " />
          <input
            type="text"
            name="UpPass"
            placeholder="Password"
            className="px-2 w-[250px] bg-transparent outline-none "
          />
        </div>
        <button className="px-8 py-2 bg-[#0CC9B0] text-white rounded-full mt-8 text-xl font-bold ">
          SIGN UP
        </button>
      </form>
      <div className="w-full h-full flex flex-col justify-around items-center  ">
        <div className="pt-20 text-center ">
          <h1 className="text-white font-bold text-2xl mb-2 ">One of Us?</h1>
          <p className="text-white text-lg ">Our Job is to help you to grow</p>
          <button
            className="mt-5 text-white font-extrabold text-xl border-2 border-white rounded-full px-5 py-2 "
            onClick={() => {
              setLoginActive((prev) => !prev);
            }}
          >
            SIGN IN
          </button>
        </div>
        <div className="w-[40vw]   ">
          <img src={sign} alt="Login" />
        </div>
      </div>
    </div>
  );
}

function SignIn({ loginActive, setLoginActive }) {
  return (
    <div
      className="w-full h-full flex justify-between absolute transition-transform "
      style={{
        transform: loginActive ? "" : "translateX(100vw)",
        transition: "ease 1s",
        transitionDelay: ".2s",
      }}
    >
      <div className="w-full h-full flex flex-col justify-around items-center  ">
        <div className="pt-20 text-center ">
          <h1 className="text-white font-bold text-2xl mb-2 ">New Here?</h1>
          <p className="text-white text-lg ">
            To create your account we will only take a few minutes
          </p>
          <button
            className="mt-5 text-white font-extrabold text-xl border-2 border-white rounded-full px-5 py-2 "
            onClick={() => {
              setLoginActive((prev) => !prev);
            }}
          >
            SIGN UP
          </button>
        </div>
        <div className="w-[40vw]   ">
          <img src={log} alt="Login" />
        </div>
      </div>
      <form className="w-full h-full flex flex-col justify-center items-center gap-4 ">
        <h1 className=" font-extrabold text-4xl mb-8 ">Sign In</h1>
        <div className=" flex h-7 bg-[#D9D9D9] py-4 px-8 box-content rounded-full ">
          <img src={user} alt="" className="h-full opacity-50 " />
          <input
            type="text"
            name="InUser"
            placeholder="Username"
            className="px-2 w-[250px] bg-transparent outline-none "
          />
        </div>
        <div className=" flex h-7 bg-[#D9D9D9] py-4 px-8 box-content rounded-full ">
          <img src={lock} alt="" className="h-full opacity-50 " />
          <input
            type="text"
            name="InPass"
            placeholder="Password"
            className="px-2 w-[250px] bg-transparent outline-none "
          />
        </div>
        <button className="px-8 py-2 bg-[#0CC9B0] text-white rounded-full mt-8 text-xl font-bold ">
          LOGIN
        </button>
      </form>
    </div>
  );
}
