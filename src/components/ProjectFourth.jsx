import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import animation from "../content/animationTypes";

export default function ProjectFourth(prop){

      const ref = useRef(null);
      const isInView = useInView(ref, {once: true});
      const mainControls = useAnimation();

      useEffect(() => {
      if(isInView){
            mainControls.start("visible");
      }
      }, [isInView]);

      
      return(
            <motion.div ref={ref}  className="box col-span-2"
                        variants={animation.middleVariant}
                        initial='hidden'
                        animate={mainControls}
                        transition={{duration: 1, delay: 0.25 }}
                        >
                        <div>
                              <h1 className="text-3xl font-medium mb-4">moodChecker CLI</h1>
                              <p className="mb-4 text-xl xs:text-lg" >
                                    I created my own Command Line Interface (CLI) from scratch to monitor my daily mood. I aimed to improve my Node.js skills and experimented with internal modules(fs, http),  yargs, asynchronous Node.js code, and a basic server setup.
                              </p>
                              <ul className="flex flex-row justify-end gap-5">
                                    <li>
                                    <a target="_blank" className="optbutton" href="https://github.com/majkeloess/moodChecker">
                                    GitHub repo
                                    </a>
                                    </li>
                              </ul>
                        </div>
            </motion.div>
      );
}