import { useState} from "react";
import { BrowserRouter } from "react-router-dom";

import Footer from "./Footer.jsx";;
import React from "../assets/React";
import Title from "./Title.jsx";
import ProjectTitle from "./ProjectTitle.jsx";
import AboutTitle from "./AboutTitle.jsx";
import AboutTextFirst from "./AboutTextFirst.jsx";
import CubeBox from "./CubeBox.jsx";
import SkillList from "./SkillList.jsx";
import AboutTextSecond from "./AboutTextSecond.jsx";
import Image from "./Image.jsx";
import Spotify from "./Spotify.jsx";
import Records from "./Records.jsx";
import Socials from "./Socials.jsx";
import ProjectFirst from "./ProjectFirst.jsx";
import ProjectSecond from "./ProjectSecond.jsx";
import ProjectThird from "./ProjectThird.jsx";
import Comeback from "./Comeback.jsx";
import ProjectFourth from "./ProjectFourth.jsx";


function Home() {

  const [darkMode, setDarkMode] = useState(false);
  
  function changeMode() {
    setDarkMode(!darkMode);
  }
  const ListConditon = darkMode ? "white" : "black";
  const BackgroundConditon = darkMode ? "black" : "white";
  
  return (
  <BrowserRouter>
  <div className={`${darkMode && "dark"} overflow-x-hidden `}>
    <div className="light notlight text-neutral-600/90 dark:text-neutral-200/90">
      <div className="flex justify-center py-8 gap-4">
        <div className="grid grid-cols-3 grid-rows-6 gap-16 xs:gap-8 max-w-[1000px] xs:max-w-[400px] xs:flex xs:flex-col">
          <Title mode={darkMode} modeFun={changeMode} />
          <AboutTitle />
          <AboutTextFirst />
          <CubeBox />
          <SkillList mode={ListConditon}  />
          <AboutTextSecond />
          <Image />
          <Spotify />
          <Records />
          <Socials  mode={ListConditon}/>

          <ProjectTitle />
          <ProjectFirst />
          <ProjectSecond />
          <ProjectThird />
          <ProjectFourth />
        </div>
        <Comeback mode={ListConditon} />
      </div>
      <Footer />
    </div>
  </div>
  </BrowserRouter>
  );
}

export default Home;
