import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import animation from "../content/animationTypes";
import Instagram from "../assets/Instagram.jsx";
import Github from "../assets/Github.jsx";
import Linkedin from "../assets/Linkedin.jsx";

export default function Socials(prop){

      const ref = useRef(null);
      const isInView = useInView(ref, {once: true});
      const mainControls = useAnimation();

      useEffect(() => {
      if(isInView){
            mainControls.start("visible");
      }
      }, [isInView]);

      
      return(
            <motion.div ref={ref}  className="box"
                        variants={animation.leftVariant}
                        initial='hidden'
                        animate={mainControls}
                        transition={{duration: 1, delay: 0.25 }}
                        >
                        <ul className="flex gap-4 justify-center">
                              <li>
                                    <Instagram color={prop.mode} size="50px" />
                              </li>
                              <li>
                                    <Github color={prop.mode} size="50px" />
                              </li>
                              <li>
                                    <Linkedin color={prop.mode} size="50px" />
                              </li>
                        </ul>
            </motion.div>
      );
}