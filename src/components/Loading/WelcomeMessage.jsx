import { motion } from "framer-motion";

const WelcomeMessage = () => {
  const text = "Pramod k Maloo".split(" ");
  const defaultAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.div className="welcome-message">
      <motion.span initial="hidden" animate="visible" aria-hidden>
        {text.map((el, i) => (
          <motion.span
            variants={defaultAnimation}
            transition={{
              duration: 2,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </motion.span>
    </motion.div>
  );
};


export default WelcomeMessage;
