import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import animation from "../content/animationTypes";

export default function Records(prop) {
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
      className="box col-span-2 flex flex-col"
      variants={animation.middleVariant}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1, delay: 0.25 }}
    >
      <p className="text-2xl mb-8 xs:text-lg xs:mb-4">
        My passion lies in running and working out at the gym. This year, I
        accomplished an ultramarathon (58km with elevations of 1300m). In the
        upcoming year, I plan to challenge myself and attempt to surpass my
        previous records.
      </p>
      <ul className="self-end xs:self-center">
        <li className="text-xl">
          <span className="font-bold">5K</span> 19'36''
        </li>
        <li className="text-xl">
          <span className="font-bold">10K</span> 41'52''
        </li>
        <li className="text-xl">
          <span className="font-bold">Half Marathon</span> 1h 38'17''
        </li>
        <li className="text-xl">
          <span className="font-bold">Marathon</span> 3h 42'10''
        </li>
      </ul>
    </motion.div>
  );
}
