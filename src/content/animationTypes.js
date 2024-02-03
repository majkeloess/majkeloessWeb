const animation = {
  middleVariant: {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
    transition: { duration: 2, delay: 0.25 },
  },
  upperVariant: {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 30,
      },
    },
  },
  leftVariant: {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0 },
  },
  rightVariant: {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
  },
  upVariant: {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: 0 },
  },
};

export default animation;
