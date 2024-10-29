import React, { useEffect, useRef } from "react";

import star from "./../assets/star.png";

const test1 = [
  {
    title: "— María G., Colombia",
    test: "“Learning with NIMBU was a game-changer! The lessons are fun, and my English improved fast.”",
  },
  {
    title: "— Carlos R., México",
    test: "Thanks to NIMBU, I now feel confident speaking English in my job interviews.",
  },
  {
    title: "— Ana L., Perú",
    test: "The personalized guidance made all the difference. I went from basic to fluent in just months!",
  },
];

const test2 = [
  ,
  {
    title: "— Jorge M., Chile",
    test: "NIMBU’s approach is unique and effective. I never thought learning English could be this easy.",
  },
  {
    title: "— Laura V., Argentina",
    test: "I’ve tried many courses, but NIMBU is by far the best. Practical and to the point!",
  },
  {
    title: "— David P., Ecuador",
    test: "With NIMBU, I finally mastered English. I’m more confident and open to new opportunities.",
  },
];

export default function Testimonis() {
  return (
    <div
      className="w-full bg-[#E0662B] flex flex-col justify-center items-center pb-28 "
      id="testimonis"
    >
      <div className=" w-1/2 bg-[#C2C2C2] rounded-lg relative -top-5 flex justify-center items-center pt-20 pb-28 mb-28 flex-col ">
        <div className=" flex p-3 relative bg-white rounded-full z-0 ">
          <Star />
          <h1 className=" font-bold ml-2 ">4.9</h1>
          <div
            className=" absolute bg-white w-10 h-10 left-0 -bottom-3 -z-10 "
            style={{ transform: "rotateX(50deg) rotateY(-45deg) " }}
          />
        </div>
        <h1 className="mt-10 font-black text-3xl ">Student Testimonials</h1>
        <p className=" font-medium texxt-xl mt-10 text-center max-w-[500px] ">
          See how NIMBU has transformed our students' English learning journeys.
          Read their success stories and get inspired to join us!
        </p>
      </div>
      <Carrousel orientDer={true} />
      <Carrousel orientDer={false} />
    </div>
  );
}

function Carrousel({ orientDer }) {
  const carro = useRef();
  const item1 = useRef();
  const item2 = useRef();

  useEffect(() => {
    let scroller = 0;
    let maxScroll = carro.current.scrollWidth - carro.current.clientWidth;
    let alternate = false;

    window.addEventListener("resize", () => {
      maxScroll = carro.current.scrollWidth - carro.current.clientWidth;
    });

    const inter = setInterval(() => {
      carro.current.scrollTo({ left: scroller, behavior: "smooth" });
      scroller = orientDer ? scroller + 10 : scroller - 10;
      if (scroller > maxScroll || scroller <= 0) {
        scroller = orientDer ? 0 : maxScroll;
        alternate = !alternate;
        if (alternate) {
          item1.current.style.order = 2;
          item2.current.style.order = 1;
        } else {
          item1.current.style.order = 1;
          item2.current.style.order = 2;
        }
        carro.current.scrollTo({ left: scroller, behavior: "auto" });
      }
    }, 100);

    return () => clearInterval(inter);
  });

  return (
    <div className="w-full overflow-hidden mb-20 " ref={carro}>
      <div className=" flex w-[200vw] ">
        <div className=" w-full px-10 flex gap-20 h-[200px] " ref={item1}>
          {test1.map((testimonio, index) => (
            <div
              className=" bg-[#D9D9D9] rounded-lg flex flex-col py-3 justify-between px-4  "
              key={index}
            >
              <Star />
              <p className="w-[350px] "> {testimonio.test} </p>
              <p className="w-[350px] font-bold "> {testimonio.title} </p>
            </div>
          ))}
        </div>
        <div className=" w-full px-10 flex gap-20 h-[200px] " ref={item2}>
          {test2.map((testimonio, index) => (
            <div
              className=" bg-[#D9D9D9] rounded-lg flex flex-col py-3 justify-between px-4  "
              key={index}
            >
              <Star />
              <p className="w-[350px] "> {testimonio.test} </p>
              <p className="w-[350px] font-bold "> {testimonio.title} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Star() {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="h-5 flex gap-1 ">
      {stars.map((index, id) => (
        <img src={star} alt="star" className="h-full" key={id} />
      ))}
    </div>
  );
}
