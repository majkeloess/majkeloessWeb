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
                        variants={animation.rightVariant}
                        initial='hidden'
                        animate={mainControls}
                        transition={{duration: 1, delay: 0.25 }}
                        >
                        <ul className="flex gap-4 justify-center">
                              <motion.li whileHover={{scale: 1.15}} aria-label='Instagram'>
                                    <Instagram color={prop.mode} size="50px" />
                              </motion.li>
                              <motion.li whileHover={{scale: 1.15}} aria-label="GitHub">
                                    <Github color={prop.mode} size="50px" />
                              </motion.li>
                              <motion.li whileHover={{scale: 1.15}} aria-label="Linkedin">
                                    <Linkedin color={prop.mode} size="50px" />
                              </motion.li>
                        </ul>
            </motion.div>
      );
}