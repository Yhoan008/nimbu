import React, { useRef, useState } from "react";

import log from "./../../assets/log.png";
import user from "./../../assets/user.png";
import lock from "./../../assets/lock.png";

import { validateUsername, Banner } from "./Login";

export default function SignIn({ loginActive, setLoginActive }) {
  const username = useRef();
  const password = useRef();

  const [userName, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const [activeBanner, setActiveBanner] = useState(false);

  const [win, setWin] = useState(false);

  const consult = async (event) => {
    event.preventDefault();
    const consultUser = {
      username: userName,
      password: pass,
    };

    try {
      const response = await fetch("http://localhost:5500/consult", {
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

      const user = { name: data.username, email: data.email };

      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      setActiveBanner(true);
      setWin(false);
    }
  };

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
        <div
          className=" flex h-7 bg-[#D9D9D9] py-4 px-8 box-content rounded-full "
          style={{
            outline: validateUsername(userName) ? "2px solid red" : "",
          }}
        >
          <img src={user} alt="" className="h-full opacity-50 " />
          <input
            type="text"
            name="InUser"
            placeholder="Username"
            className="px-2 w-[250px] bg-transparent outline-none "
            ref={username}
            onChange={() => {
              setUsername(username.current.value);
            }}
          />
        </div>
        <div className=" flex h-7 bg-[#D9D9D9] py-4 px-8 box-content rounded-full ">
          <img src={lock} alt="" className="h-full opacity-50 " />
          <input
            type="password"
            name="InPass"
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
          onClick={consult}
        >
          LOGIN
        </button>
      </form>
      <Banner
        activeBanner={activeBanner}
        setActiveBanner={setActiveBanner}
        win={win}
        message="Sesion Failed"
      />
    </div>
  );
}
