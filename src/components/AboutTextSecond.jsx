import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import animation from "../content/animationTypes";

export default function AboutTextSecond(prop) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="box col-span-2 "
      variants={animation.leftVariant}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1, delay: 0.25 }}
    >
      <p className="text-xl xs:text-lg">
        Currently, I am expanding my skills by learning new technologies.
        Additionally, I am attempting to create something useful to observe
        various environments. I am developing this page from scratch and have
        deployed it on my own server (using DigitalOcean and Nginx) to see how
        everything appears.
      </p>
    </motion.div>
  );
}
