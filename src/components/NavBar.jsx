import React, { useState } from "react";

import logo from "./../assets/logo.png";
import perfil from "./../assets/port.png";
import user from "./../assets/user.png";
import tramo from "./../assets/tramo.png";
import salida from "./../assets/salida.png";

export default function NavBar() {
  return (
    <div className="w-full p-4 ">
      <div className="w-full flex justify-between items-center ">
        <div className="h-8 flex items-center ">
          <img src={logo} alt="Logo" className="h-full" />
          <h1 className=" text-3xl font-extrabold ">NIMBU</h1>
        </div>
        <ul className="flex ml-2 gap-5 font-bold ">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CURSES</li>
          <li>CONTACT</li>
        </ul>
        <div className="relative min-w-[300px] min-h-8 ">
          <Login />
        </div>
      </div>
    </div>
  );
}

function Login() {
  const [active, setActive] = useState(false);

  return (
    <div className="p-1 bg-[#1AD5BC] rounded-xl flex flex-col justify-start items-start absolute ">
      <div className="flex">
        <div className="h-8 w-8 overflow-hidden rounded-full bg-white ">
          <img src={perfil} alt="Perfil Photo" className="h-full" />
        </div>
        <h1 className="ml-3 font-bold text-lg ">Gabriel Gonzalez</h1>
        <div
          className="w-8 h-8 ml-10 flex justify-center relative items-center cursor-pointer "
          onClick={() => {
            setActive((prev) => !prev);
          }}
        >
          <div
            className="w-[50%] h-1 bg-black absolute left-1 "
            style={{
              transform: active ? "rotate(-45deg)" : "rotate(45deg)",
            }}
          />
          <div
            className="w-[50%] h-1 bg-black absolute right-1 "
            style={{
              transform: active ? "rotate(45deg)" : "rotate(-45deg)",
            }}
          />
        </div>
      </div>
      <div
        className="w-full flex-col grow "
        style={{ display: active ? "flex " : "none" }}
      >
        <ul className=" box-content flex flex-col gap-4 my-4 ">
          <li className="h-4 pl-2 box-content flex items-center cursor-pointer border-[#0cc9b0] border-l-2 hover:border-white ">
            <img src={user} alt="User" className="h-full" />
            <h1 className="font-bold ml-2 ">Perfil</h1>
          </li>
          <li className="h-4 pl-2 box-content flex items-center cursor-pointer border-[#0cc9b0] border-l-2 hover:border-white ">
            <img src={tramo} alt="User" className="h-full" />
            <h1 className="font-bold ml-2 ">Proceso</h1>
          </li>
        </ul>
        <h1 className="ml-2 underline ">username@correo.com</h1>
        <button className=" max-w-[100px] h-5 flex justify-center items-center my-4 ">
          <img src={salida} alt="Salida" className="h-full" />
          <h1 className=" font-bold text-md ml-2 hover:underline ">Log Out</h1>
        </button>
      </div>
    </div>
  );
}
