import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import animation from "../content/animationTypes";

export default function ProjectFirst(prop){

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
                        variants={animation.leftVariant}
                        initial='hidden'
                        animate={mainControls}
                        transition={{duration: 1, delay: 0.25 }}
                        >
                             <div>
                                    <h1 className="text-3xl font-medium mb-4">myWebpage v1.0</h1>
                                    <p className="mb-4 text-xl">
                                          I created this page to test my ability to design responsive
                                          layouts and implement features that I could use in the future,
                                          but it wasn't sufficient.
                                    </p>
                                    <ul className="flex flex-row justify-end gap-5">
                                          <li>
                                          <a target="_blank" className="optbutton" href="https://github.com/majkeloess/myWebpage">
                                          GitHub repo
                                          </a>
                                          </li>
                                          <li>
                                          <a target="_blank" className="optbutton" href="https://majkeloes.studio/">
                                          Project page
                                          </a>
                                          </li>
                                    </ul>
                              </div>
            </motion.div>
      );
}