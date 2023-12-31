import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import animation from "../content/animationTypes";

export default function AboutTextFirst(prop){

      const ref = useRef(null);
      const isInView = useInView(ref, {once: true});
      const mainControls = useAnimation();

      useEffect(() => {
      if(isInView){
            mainControls.start("visible");
      }
      }, [isInView]);

      
      return(
            <motion.div ref={ref} className="box col-span-2 row-span-2 text-2xl xs:text-lg"
                        variants={animation.rightVariant}
                        initial='hidden'
                        animate={mainControls}
                        transition={{duration: 1, delay: 0.25 }}
                        >
                              <p>
                              I am currently a student at AGH University of Science
                              and Technology. At the university, I am focusing on technologies
                              such as C/C++. About half a year ago, I ventured into web
                              development, delving into technologies like HTML, CSS, Tailwind
                              CSS, JavaScript, and React. Presently, I am expanding my skills
                              by learning TypeScript, Node.js, and Express.
                              </p>
            </motion.div>
      );
}