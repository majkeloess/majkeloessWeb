import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import animation from "../content/animationTypes";
import Javascript from "../assets/Javascript";
import Tailwind from "../assets/Tailwind";
import Css from "../assets/Css";
import Html from "../assets/Html";
import Typescript from "../assets/Typescript";
import React from "../assets/React";
import Node from "../assets/Node";
import Express from "../assets/Express";
import Mongodb from "../assets/Mongodb";

export default function SkillList(prop){

      const ref = useRef(null);
      const isInView = useInView(ref, {once: true});
      const mainControls = useAnimation();

      useEffect(() => {
      if(isInView){
            mainControls.start("visible");
      }
      }, [isInView]);

      
      return(
            <motion.div ref={ref} className="box col-span-2"
                        variants={animation.middleVariant}
                        initial='hidden'
                        animate={mainControls}
                        transition={{duration: 1, delay: 0.25 }}
                        >
                             <ul className="flex flex-row gap-3">
                                    <li>
                                          <Html color={prop.mode} size="50px" />
                                    </li>
                                    <li>
                                          <Css color={prop.mode} size="50px" />
                                    </li>
                                    <li>
                                          <Tailwind color={prop.mode} size="50px" />
                                    </li>
                                    <li>
                                          <Javascript color={prop.mode} size="50px" />
                                    </li>
                                    <li>
                                          <Typescript color={prop.mode} size="50px" />
                                    </li>
                                    <li>
                                          <React color={prop.mode} size="50px" />
                                    </li>
                                    <li>
                                          <Node color={prop.mode} size="50px" />
                                    </li>
                                    <li>
                                          <Express color={prop.mode} size="50px" />
                                    </li>
                                    <li>
                                          <Mongodb color={prop.mode} size="50px" />
                                    </li>
                              </ul> 
            </motion.div>
      );
}