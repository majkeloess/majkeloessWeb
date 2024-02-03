import { HashLink as Link } from "react-router-hash-link";
import Homebut from "../assets/HomeBut";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import animation from "../content/animationTypes";

export default function Comeback(prop) {
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
      variants={animation.rightVariant}
      initial="hidden"
      animate={mainControls}
      className="fixed xs:bottom-1 xs:right-1 bottom-5 right-5"
    >
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link aria-label="Home" to="#">
          <Homebut color={prop.mode} size="35px" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
