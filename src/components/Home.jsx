import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./Footer.jsx";
import Instagram from "../assets/Instagram.jsx";
import Github from "../assets/Github.jsx";
import Linkedin from "../assets/Linkedin.jsx";
import Sun from "../assets/Sun.jsx";
import Moon from "../assets/Moon.jsx";
import Javascript from "../assets/Javascript";
import Tailwind from "../assets/Tailwind";
import Css from "../assets/Css";
import Html from "../assets/Html";
import Typescript from "../assets/Typescript";
import React from "../assets/React";
import Node from "../assets/Node";
import Express from "../assets/Express";
import Mongodb from "../assets/Mongodb";
import Cube from "./Cube.jsx";
function Home() {
  const [darkMode, setDarkMode] = useState(false);

  function changeMode() {
    setDarkMode(!darkMode);
  }

  const ListConditon = darkMode ? "white" : "black";
  const BackgroundConditon = darkMode ? "black" : "white";
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="light text-neutral-600 text-opacity-90">
        <div className="flex justify-center py-8">
          <div className="grid grid-cols-3 grid-rows-6 gap-10 max-w-[1000px] ">
            <div className="box col-span-3 row-span-3">
              <button onClick={changeMode} className="absolute top-10 right-10">
                {darkMode ? <Sun size="50px" /> : <Moon size="50px" />}
              </button>
              <div>
                <p className="text-3xl mb-4">Hi, I am </p>
                <h1 className="font-medium text-9xl mb-10">majkeloess</h1>
                <p className="text-3xl mb-4 leading-10">
                  I'm a Computer Science student with a passion for{" "}
                  <span className="text-square">webDevelopment</span>. To know
                  more about me, check out the{" "}
                  <Link className="text-square" to="/about">
                    whoami
                  </Link>
                  . I have already completed several{" "}
                  <Link className="text-square" to="/projects">
                    projects
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="box text-7xl font-medium">about</div>
            <div className="box col-span-2 row-span-2 text-2xl font-">
              <p>
                I am currently a student at{" "}
                <span className="text-square">AGH</span> University of Science
                and Technology. At the university, I am focusing on technologies
                such as C/C++. About half a year ago, I ventured into web
                development, delving into technologies like HTML, CSS, Tailwind
                CSS, JavaScript, and React. Presently, I am expanding my skills
                by learning TypeScript, Node.js, and Express.
              </p>
            </div>
            <div className="box row-span-2">
              <Cube />
            </div>
            <div className="box col-span-2">
              <ul className="flex flex-row gap-3">
                <li>
                  <Html color={ListConditon} size="50px" />
                </li>
                <li>
                  <Css color={ListConditon} size="50px" />
                </li>
                <li>
                  <Tailwind color={ListConditon} size="50px" />
                </li>
                <li>
                  <Javascript color={ListConditon} size="50px" />
                </li>
                <li>
                  <Typescript color={ListConditon} size="50px" />
                </li>
                <li>
                  <React color={ListConditon} size="50px" />
                </li>
                <li>
                  <Node color={ListConditon} size="50px" />
                </li>
                <li>
                  <Express color={ListConditon} size="50px" />
                </li>
                <li>
                  <Mongodb color={ListConditon} size="50px" />
                </li>
              </ul>
            </div>
            <div className="box col-span-2">
              <p className="text-2xl">
                I like to play and watch football, my favorite player is
                Cristiano Ronaldo. Currently, my passion lies in running and
                working out at the gym. This year, I accomplished an
                ultramarathon (58km with elevations of 1300m). In the upcoming
                year, I plan to challenge myself and attempt to surpass my
                previous records.
              </p>
            </div>
            <div className="box row-span-2 bg-[url('src/img/sigma.jpg')] bg-cover"></div>
            <div className="box row-span-3 bg-[url('src/img/photo.jpeg')] bg-cover"> </div>
            <div className="box row-span-2">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul> 
            </div>
            <div className="box">
              <ul className="flex gap-4 justify-center">
                <li>
                  <Instagram color={ListConditon} size="50px" />
                </li>
                <li>
                  <Github color={ListConditon} size="50px" />
                </li>
                <li>
                  <Linkedin color={ListConditon} size="50px" />
                </li>
              </ul>
            </div>
            <div className="box text-7xl font-medium">projects</div>
            <div className="box col-span-2">
              <div>
                <h1 className="text-3xl font-medium mb-4">myWebpage v1.0</h1>
                <p className="mb-4">
                  I created this page to test my ability to design responsive
                  layouts and implement features that I could use in the future,
                  but it wasn't sufficient.
                </p>
                <ul className="flex flex-row justify-end gap-5">
                  <li>
                  <a target="_blank" className="optbutton" href="https://github.com/majkeloess">
                  GitHub repo
                  </a>
                  </li>
                  <li>
                    <a target="_blank" className="optbutton" href="">
                      Project page
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="box col-span-2">
              <div>
                <h1 className="text-3xl font-medium mb-4">wordleGame</h1>
                <p className="mb-4">
                  The project required me to test my skills in retrieving and
                  posting data to an API, predominantly using JavaScript (JS)
                  with some CSS involvement.
                </p>
                <ul className="flex flex-row justify-end gap-5">
                  <li>
                  <a target="_blank" className="optbutton" href="https://github.com/majkeloess">
                  GitHub repo
                  </a>
                  </li>
                  <li>
                    <a target="_blank" className="optbutton" href="">
                      Project page
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="box row-span-2">
              <div>
                <h1 className="text-3xl font-medium mb-4">simpleCalculator</h1>
                <p className="mb-4">
                  My first project after completing FrontendMasters Bootcamp in
                  which, I was testing my HTML, CSS & JS skills.
                </p>
                <ul className="flex flex-col justify-center gap-5">
                  <li>
                  <a target="_blank" className="optbutton" href="https://github.com/majkeloess">
                  GitHub repo
                  </a>
                  </li>
                  <li>
                    <a target="_blank" className="optbutton" href="">
                      Project page
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;