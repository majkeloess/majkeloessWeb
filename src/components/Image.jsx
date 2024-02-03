import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import animation from "../content/animationTypes";

export default function Image(prop) {
  const main =
    "https://res.cloudinary.com/dq5exroyd/image/upload/v1704822413/blkd0pseufpvy8hmaxni.jpg";
  const second =
    "https://res.cloudinary.com/dq5exroyd/image/upload/v1704822413/eanooakqk9iakl9ezxwo.jpg";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function changeCard() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <motion.div
      ref={ref}
      className=" row-span-1 xs:min-h-[400px] p-0 m-0 rounded-2xl shadow-xl min-w-[300px] min-h-[400px] bg-white/25 dark:bg-black/25 bg-clip-padding backdrop-filter backdrop-blur-md"
      variants={animation.rightVariant}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1, delay: 0.25 }}
    >
      <motion.div
        className="w-[100%] h-[100%] flip-card-inner"
        onClick={changeCard}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div
          className="flip-card-front w-[100%] h-[100%] bg-cover rounded-2xl shadow-xl min-w-[300px] min-h-[150px]"
          style={{ backgroundImage: `url(${second})` }}
        ></div>
        <div
          className="flip-card-back w-[100%] h-[100%] bg-cover rounded-2xl shadow-xl min-w-[300px] min-h-[150px]"
          style={{ backgroundImage: `url(${main})` }}
        ></div>
      </motion.div>
    </motion.div>
  );
}
