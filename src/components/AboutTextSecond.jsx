import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import animation from "../content/animationTypes";

export default function AboutTextSecond(prop){

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
                              <p className="text-2xl">
                                    I like to play and watch football, my favorite player is
                                    Cristiano Ronaldo. Currently, my passion lies in running and
                                    working out at the gym. This year, I accomplished 
                                    an ultramarathon (58km with elevations of 1300m). In the upcoming
                                    year, I plan to challenge myself and attempt to surpass my
                                    previous records.
                              </p>
            </motion.div>
      );
}