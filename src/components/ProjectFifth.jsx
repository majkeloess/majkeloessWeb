import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import animation from "../content/animationTypes";

export default function ProjectFifth() {
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
      className="box col-span-3"
      variants={animation.middleVariant}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1, delay: 0.25 }}
    >
      <div>
        <h1 className="text-3xl font-medium mb-4">weatherApp</h1>
        <p className="mb-4 text-xl xs:text-lg">
          The main goal of the project was to develop a user-friendly weather
          application. This initiative aimed to enhance my understanding of
          manipulating JSON objects derived from REST APIs, and also provided an
          opportunity to explore the functionalities of Postman.
        </p>
        <ul className="flex flex-row justify-end gap-5">
          <li>
            <a
              target="_blank"
              className="optbutton"
              href="https://github.com/majkeloess/weatherApp"
            >
              GitHub repo
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className="optbutton"
              href="https://majkeloess.dev/weatherApp"
            >
              Project page
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
