import React, { useState } from "react";

import hand from "./../assets/hand.png";
import bonnet from "./../assets/bonnet.jpg";
import broke from "./../assets/broke.jpg";
import magnet from "./../assets/magnet.jpg";
import logo from "./../assets/logo.png";
import facebook from "./../assets/facebook.png";
import instagram from "./../assets/instagram.png";
import linkedin from "./../assets/linkedin.png";
import twitter from "./../assets/twitter.png";

const images = [
  {
    title: "Beginner Course: Foundations of English",
    des: "Start your English journey with essential grammar, vocabulary, and pronunciation to build a solid foundation.",
    image: bonnet,
  },
  {
    title: "Intermediate Course: Expand Your Skills",
    des: "Improve fluency and comprehension with more complex grammar, conversations, and real-life scenarios.",
    image: broke,
  },
  {
    title: "Advanced Course: Master English Communication",
    des: "Perfect your language skills with advanced grammar, writing, and professional communication for real-world success.",
    image: magnet,
  },
];

export default function Footer() {
  return (
    <div className=" flex flex-col items-center ">
      <div className=" flex self-start m-28 ">
        <h1 className=" font-extrabold text-4xl max-w-[300px] mr-10 ">
          OUR COURSES GALERY
        </h1>
        <div className=" w-[100px] animate-[hello_1s_ease-in_infinite] ">
          <img src={hand} alt="Hand Icon" />
        </div>
      </div>
      <div className=" flex w-full justify-around ">
        {images.map((inst, index) => (
          <Cards key={index} inst={inst}>
            <img src={inst.image} alt="img" className="w-full -z-10 " />
            <div className="absolute p-3">
              <h1 className=" text-white font-extrabold text-xl ">
                {inst.title}
              </h1>
              <p className=" text-white text-sm "> {inst.des} </p>
            </div>
          </Cards>
        ))}
      </div>
      <div className=" border-t-2 border-black mt-20 w-[90vw] flex flex-col items-center justify-center ">
        <div className="h-12 flex items-center mt-10 ">
          <img src={logo} alt="Logo" className="h-full" />
          <h1 className=" text-3xl font-extrabold ">NIMBU</h1>
        </div>
        <h1 className=" text-xl font-normal mt-10 max-w-[500px] text-center ">
          Empowering people through English learning, unlocking new global
          opportunities.
        </h1>
        <div className="flex gap-6 mt-10 ">
          <img src={facebook} alt="Social" className=" w-8 cursor-pointer  " />
          <img src={instagram} alt="Social" className=" w-8 cursor-pointer  " />
          <img src={linkedin} alt="Social" className=" w-8 cursor-pointer  " />
          <img src={twitter} alt="Social" className=" w-8 cursor-pointer  " />
        </div>
        <div className="flex justify-around items-center w-full mt-10 mb-10 ">
          <div className=" flex-grow h-1 bg-black" />
          <h1 className="text-center w-auto px-5 ">
            All rights reserved 2024 © Nimbu
          </h1>
          <div className="flex-grow h-1 bg-black" />
        </div>
      </div>
    </div>
  );
}

function Cards({ inst }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="w-[320px] relative flex flex-col justify-end items-start cursor-pointer "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={inst.image}
        alt="img"
        className="w-full -z-10 "
        style={{ filter: hover ? "brightness(40%)" : "" }}
      />
      <div className="absolute p-3">
        <h1
          className="  font-extrabold text-xl "
          style={{ color: hover ? "white" : "transparent" }}
        >
          {inst.title}
        </h1>
        <p
          className=" text-sm "
          style={{ color: hover ? "white" : "transparent" }}
        >
          {inst.des}
        </p>
      </div>
    </div>
  );
}
