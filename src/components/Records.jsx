import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import animation from "../content/animationTypes";

export default function Records(prop){

      const ref = useRef(null);
      const isInView = useInView(ref, {once: true});
      const mainControls = useAnimation();

      useEffect(() => {
      if(isInView){
            mainControls.start("visible");
      }
      }, [isInView]);

      
      return(
            <motion.div ref={ref}  className="box row-span-2"
                        variants={animation.leftVariant}
                        initial='hidden'
                        animate={mainControls}
                        transition={{duration: 1, delay: 0.25 }}
                        >
                         <ul>
                              <li className="text-xl"><span className="font-bold">5K</span> 19'36''</li>
                              <li className="text-xl"><span className="font-bold">10K</span> 41'52''</li>
                              <li className="text-xl"><span className="font-bold">Half Marathon</span> 1h 38'17''</li>
                              <li className="text-xl"><span className="font-bold">Marathon</span> 3h 42'10''</li>
                        </ul>
            </motion.div>
      );
}