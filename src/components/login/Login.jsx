import React, { useState, useRef, useEffect } from "react";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

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

export function validateUsername(username) {
  if (username.includes(" ")) {
    return true;
  } else {
    return false;
  }
}

export function Banner({ activeBanner, setActiveBanner, win, message }) {
  const banner = useRef();

  useEffect(() => {
    if (activeBanner) {
      banner.current.style.opacity = "0";
      banner.current.style.transform = "translateY(100%)";
      banner.current.style.display = "block";
      banner.current.animate(
        [
          { transform: "translateY(100%)", opacity: 0 },
          { transform: "translateY(0)", opacity: 1 },
        ],
        {
          duration: 500,
          easing: "ease",
          fill: "forwards",
        }
      );
      setTimeout(() => {
        setActiveBanner(false);
      }, 5000);
    } else {
      banner.current.style.opacity = "1";
      banner.current.style.transform = "translateY(0)";
      banner.current.animate(
        [
          { transform: "translateY(0)", opacity: 1 },
          { transform: "translateY(100%)", opacity: 0 },
        ],
        {
          duration: 500,
          easing: "ease",
          fill: "forwards",
        }
      );
      setTimeout(() => {
        banner.current.style.display = "none";
      }, 500);
    }
  }, [activeBanner]);

  return (
    <div
      className=" absolute left-[45%] bottom-16 m-auto px-5 py-4 rounded-2xl font-bold text-white "
      style={{ backgroundColor: win ? "#15803d" : "#7f1d1d" }}
      ref={banner}
    >
      {message}
    </div>
  );
}
