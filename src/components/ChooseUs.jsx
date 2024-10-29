import React from "react";

import idea from "./../assets/idea.png";
import team from "./../assets/team.png";
import skill from "./../assets/skill.png";
import struggle from "./../assets/struggle.png";

export default function ChooseUs() {
  const globs = [
    {
      title: "Engaging Learning",
      pres: "We make learning English enjoyable and effective.",
      photo: idea,
    },
    {
      title: "Expert Support",
      pres: "Our instructors help you improve with confidence.",
      photo: team,
    },
    {
      title: "Real-World Skills",
      pres: "Gain practical English skills for everyday use.",
      photo: skill,
    },
    {
      title: "Global Opportunities",
      pres: "Master English and unlock new career possibilities.",
      photo: struggle,
    },
  ];

  return (
    <div className=" flex justify-center items-center pt-10 flex-col mb-20 " id="about" >
      <div className=" w-[2000px] h-[2000px] bg-[#C2C2C2] absolute top-[100vh] -left-[30vw] rotate-[25deg] -z-10 rounded-[100px] " />
      <h1 className="text-4xl font-bold ">WHY CHOOSE US? </h1>
      <div className="flex mt-20 gap-10 ">
        {globs.map((glob, index) => (
          <div
            className=" flex flex-col justify-center items-center max-w-[200px] text-center group "
            key={index}
          >
            <div className="w-[150px] h-[150px] bg-black p-10 rounded-full group-hover:animate-bounce ">
              <img src={glob.photo} alt="Icon" />
            </div>
            <h1 className=" my-5 font-extrabold text-xl "> {glob.title} </h1>
            <p className=" font-medium "> {glob.pres} </p>
          </div>
        ))}
      </div>
    </div>
  );
}
