import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import animation from "../content/animationTypes";

export default function ProjectSecond(prop){

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
                              <h1 className="text-3xl font-medium mb-4">wordleGame</h1>
                              <p className="mb-4 text-xl xs:text-lg" >
                                    The project required me to test my skills in retrieving and
                                    posting data to an API, predominantly using JavaScript (JS)
                                    with some CSS involvement.
                              </p>
                              <ul className="flex flex-row justify-end gap-5">
                                    <li>
                                    <a target="_blank" className="optbutton" href="https://github.com/majkeloess/wordleGame">
                                    GitHub repo
                                    </a>
                                    </li>
                                    <li>
                                    <a target="_blank" className="optbutton" href="https://majkeloess.github.io/wordleGame/">
                                    Project page
                                    </a>
                                    </li>
                              </ul>
                        </div>
            </motion.div>
      );
}