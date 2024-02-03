import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import animation from "../content/animationTypes";

export default function ProjectThird(prop) {
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
      className="box row-span-2"
      variants={animation.middleVariant}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1, delay: 0.25 }}
    >
      <div>
        <h1 className="text-3xl font-medium mb-4">simpleCalculator</h1>
        <p className="mb-4 text-xl xs:text-lg">
          My first project after completing FrontendMasters Bootcamp in which, I
          was testing my HTML, CSS & JS skills.
        </p>
        <ul className="flex flex-col justify-center gap-5">
          <li>
            <a
              target="_blank"
              className="optbutton"
              href="https://github.com/majkeloess/calculator"
            >
              GitHub repo
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className="optbutton"
              href="https://majkeloess.github.io/calculator/"
            >
              Project page
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
