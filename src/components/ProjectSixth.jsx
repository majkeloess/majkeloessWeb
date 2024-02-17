import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import animation from "../content/animationTypes";

export default function ProjectSixth() {
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
      variants={animation.rightVariant}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1, delay: 0.25 }}
    >
      <div>
        <h1 className="text-3xl font-medium mb-4">nobelPrize</h1>
        <p className="mb-4 text-xl xs:text-lg">
          nobelPrize is a dynamic web application designed to retrieve data
          about Nobel laureates from the years 1901-1905. The application
          fetches the data dynamically from the NobelAPI based on the selected
          year. This project served as an introduction to TypeScript for me,
          while also allowing me to deepen my understanding of React Router and
          React Query. Additionally, the project was an opportunity to explore
          and test the capabilities of the MaterialUI library.
        </p>
        <ul className="flex flex-row justify-end gap-5">
          <li>
            <a
              target="_blank"
              className="optbutton"
              href="https://github.com/majkeloess/nobelPrize"
            >
              GitHub repo
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className="optbutton"
              href="https://majkeloess.github.io/nobelPrize/"
            >
              Project page
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
