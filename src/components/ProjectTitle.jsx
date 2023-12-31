import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import animation from "../content/animationTypes";

export default function ProjectTitle(prop){

      const ref = useRef(null);
      const isInView = useInView(ref, {once: true});
      const mainControls = useAnimation();

      useEffect(() => {
      if(isInView){
            mainControls.start("visible");
      }
      }, [isInView]);

      
      return(
            <motion.div ref={ref} id="projects" className="box text-7xl font-medium"
                        variants={animation.leftVariant}
                        initial='hidden'
                        animate={mainControls}
                        transition={{duration: 1, delay: 0.25 }}
                        >
                              projects
            </motion.div>
      );
}