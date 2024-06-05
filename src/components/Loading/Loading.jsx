/* eslint-disable react/prop-types */
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const Loading = ({ onComplete }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 8 });
    animation.then(() => onComplete()); 
    return () => animation.stop();
  }, [count, onComplete]);

  return (
    <div className="container_loader">
      <motion.h1 className="font-display text-[60px]">
        {rounded}
      </motion.h1>
    </div>
  );
};

export default Loading;
