import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { HashLink as Link} from "react-router-hash-link";
import animation from "../content/animationTypes";
import Sun from "../assets/Sun.jsx";
import Moon from "../assets/Moon.jsx";

export default function Title(prop){
      
      const ref = useRef(null);
      const isInView = useInView(ref, {once: true});
      const mainControls = useAnimation();

      useEffect(() => {
      if(isInView){
            mainControls.start("visible");
      }
      }, [isInView]);

      
      return(      
      <motion.div ref={ref} className="box col-span-3 row-span-3"
          variants={animation.upperVariant}
          initial='hidden'
          animate={mainControls}
        
        >
<motion.button
      onClick={prop.modeFun}
      className="absolute top-10 right-10"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {prop.mode ? <Sun size="50px" /> : <Moon size="50px" />}
      </motion.div>
    </motion.button>
            <div>
              <p className="text-3xl mb-4">Hi, I am </p>
              <h1 className="font-medium text-9xl mb-10">majkeloess</h1>
              <p className="text-3xl mb-4 leading-10">
                I'm a Computer Science student with a passion for{" "}
                <span className="text-square">webDevelopment</span>. To know
                more about me, check out the{" "}
                <Link className="text-square" to="#about">
                  whoami
                </Link>
                . I have already completed several{" "}
                <Link className="text-square" to="#projects">
                  projects
                </Link>
                .
              </p>
            </div>
      </motion.div>
      );
}