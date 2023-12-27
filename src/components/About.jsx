import Javascript from "../assets/Javascript";
import Tailwind from "../assets/Tailwind";
import Css from "../assets/Css";
import Html from "../assets/Html";
import Typescript from "../assets/Typescript";
import React from "../assets/React";
import Node from "../assets/Node";
import Express from "../assets/Express";
import Mongodb from "../assets/Mongodb";
export default function About() {
  return (
    <div>
      <div className="grid grid-cols-3 grid-rows-6 gap-10 max-w-[1000px]">
        <div className="bg-neutral-400 text-black shadow-xl rounded-lg min-w-[300px] min-h-[150px] gap-2">
          about
        </div>
        <div className="bg-neutral-400 text-black shadow-xl rounded-lg min-w-[300px] min-h-[150px] gap-2 col-span-2 row-span-2">
          I am currently pursuing a degree in Computer Science at AGH University
          of Science and Technology. At the university, I am focusing on
          technologies such as C/C++. About half a year ago, I ventured into web
          development, delving into technologies like HTML, CSS, Tailwind CSS,
          JavaScript, and React. Presently, I am expanding my skills by learning
          TypeScript, Node.js, and Express
        </div>
        <div className="bg-neutral-400 text-black shadow-xl rounded-lg min-w-[300px] min-h-[150px] gap-2 row-span-2"></div>
        <div className="bg-neutral-400 text-black shadow-xl rounded-lg min-w-[300px] min-h-[150px] gap-2 col-span-2">
          <ul className="flex flex-row">
            <li>
              <Html />
            </li>
            <li>
              <Css />
            </li>
            <li>
              <Tailwind />
            </li>
            <li>
              <Javascript />
            </li>
            <li>
              <Typescript />
            </li>
            <li>
              <React />
            </li>
            <li>
              <Node />
            </li>
            <li>
              <Express />
            </li>
            <li>
              <Mongodb />
            </li>
          </ul>
        </div>
        <div className="bg-neutral-400 text-black shadow-xl rounded-lg min-w-[300px] min-h-[150px] gap-2 col-span-2">
          I enjoy engaging in sports. In my younger years, I played football,
          and my favorite club is Manchester United (no joke). Currently, my
          passion lies in running and working out at the gym. This year, I
          accomplished an ultramarathon (58km with elevations of 1300m). In the
          upcoming year, I plan to challenge myself and attempt to surpass my
          previous records. Additionally, during the winter, I indulge in
          skiing.
        </div>
        <div className="bg-neutral-400 text-black shadow-xl rounded-lg min-w-[300px] min-h-[150px] gap-2 row-span-2"></div>
        <div className="bg-neutral-400 text-black shadow-xl rounded-lg min-w-[300px] min-h-[150px] gap-2 row-span-2"></div>
        <div className="bg-neutral-400 text-black shadow-xl rounded-lg min-w-[300px] min-h-[150px] gap-2 row-span-2"></div>
        <div className="bg-neutral-400 text-black shadow-xl rounded-lg min-w-[300px] min-h-[150px] gap-2">
          <ul className="flex gap-4 justify-center">
            <li>
              <Instagram color={ListConditon} />
            </li>
            <li>
              <Github color={ListConditon} />
            </li>
            <li>
              <Linkedin color={ListConditon} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
