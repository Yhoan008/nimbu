import React, { act, useEffect, useRef, useState } from "react";

import sign from "./../../assets/register.png";
import user from "./../../assets/user.png";
import lock from "./../../assets/lock.png";
import mail from "./../../assets/mail.png";

import { validateUsername } from "./Login";
import { Banner } from "./Login";

export default function SignUp({ loginActive, setLoginActive }) {
  const username = useRef();
  const email = useRef();
  const password = useRef();

  const [userName, setUsername] = useState("");
  const [eMail, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [activeBanner, setActiveBanner] = useState(false);

  const [win, setWin] = useState(false);

  const register = async (event) => {
    event.preventDefault();
    const consultUser = {
      username: userName,
      email: eMail,
      password: pass,
    };

    try {
      const response = await fetch("http://localhost:5500/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(consultUser),
      });
      if (!response.ok) {
        throw new Error("Error con la solicitud");
      }
      const data = await response.json();
      setWin(true);
      setActiveBanner(true);

      username.current.value = "";
      email.current.value = "";
      password.current.value = "";
    } catch (error) {
      setWin(false);
      setActiveBanner(true);
    }
  };

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
        <div
          className=" flex h-7 bg-[#D9D9D9] py-4 px-8 box-content rounded-full "
          style={{
            outline: validateUsername(userName) ? "2px solid red" : "",
          }}
        >
          <img src={user} alt="" className="h-full opacity-50 " />
          <input
            type="text"
            name="UpUser"
            placeholder="Username"
            className="px-2 w-[250px] bg-transparent outline-none "
            ref={username}
            onChange={() => {
              setUsername(username.current.value);
            }}
          />
        </div>
        <div className=" flex h-7 bg-[#D9D9D9] py-4 px-8 box-content rounded-full ">
          <img src={mail} alt="" className="h-full opacity-50 " />
          <input
            type="email"
            name="UpMail"
            placeholder="Email"
            className="px-2 w-[250px] bg-transparent outline-none "
            ref={email}
            onChange={() => {
              setEmail(email.current.value);
            }}
          />
        </div>
        <div className=" flex h-7 bg-[#D9D9D9] py-4 px-8 box-content rounded-full ">
          <img src={lock} alt="" className="h-full opacity-50 " />
          <input
            type="password"
            name="UpPass"
            placeholder="Password"
            className="px-2 w-[250px] bg-transparent outline-none "
            ref={password}
            onChange={() => {
              setPass(password.current.value);
            }}
          />
        </div>
        <button
          className="px-8 py-2 bg-[#0CC9B0] text-white rounded-full mt-8 text-xl font-bold "
          onClick={register}
        >
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
      <Banner
        activeBanner={activeBanner}
        setActiveBanner={setActiveBanner}
        win={win}
        message={win ? "Successful registration" : "Failed Registration"}
      />
    </div>
  );
}
