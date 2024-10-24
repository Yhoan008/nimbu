import React, { useState } from "react";

import books from "./../assets/books.jpg";

export default function Welcome() {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex w-full ">
      <div className="w-1/2 h-[80vh] flex flex-col box-content px-10 justify-center items-start gap-5 ">
        <h1 className="font-extrabold text-5xl ">
          Unlock Your Potential:
          <span className="text-stroke text-white ">Learn English </span>
          and Achieve Fluency Easily
        </h1>
        <p className=" font-semibold text-base ">
          Learning English has never been as easy and enjoyable as it is at
          NIMBU! We're here to help you improve your language skills.
        </p>
        <button className=" bg-[#EF8D94] py-3 px-5 rounded-xl font-semibold ">LET’S GO</button>
      </div>
      <div className="w-1/2 h-[80vh] flex justify-center items-center relative ">
        <div
          className="relative inline-block"
          onMouseEnter={() => {
            setHover((prev) => true);
          }}
          onMouseLeave={() => {
            setHover((prev) => false);
          }}
        >
          <div
            className="absolute inset-0 bg-[#EF8D94]  rounded-xl transition-transform "
            style={{ transform: hover ? "rotate(15deg)" : "rotate(8deg)" }}
          />
          <img
            src={books}
            alt="Imagen"
            className="block w-[250px] relative z-10  rounded-xl transition-transform "
            style={{ transform: hover ? "rotate(-5deg)" : "" }}
          />
        </div>
      </div>
    </div>
  );
}
