import { motion } from "framer-motion";
import React from "react";

interface IProps {
  value: any;
  onSquareClick: any;
}

const Square: React.FC<IProps> = ({ value, onSquareClick }) => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: () => {
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay: 0.2, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay: 0.2, duration: 0.01 },
        },
      };
    },
  };

  return (
    <button
      className="w-20 h-20 md:w-32 md:h-32 lg:w-44 lg:h-44 border-2 border-white float-left -mr-[1px] -mt-[1px] p-0 text-center text-white cursor-edit"
      onClick={onSquareClick}
    >
      <motion.svg className="w-full h-full" initial="hidden" animate="visible">
        {value === "O" && (
          <motion.circle
            cx="50%"
            cy="50%"
            r="50%"
            stroke="#00cc88"
            fill={"transparent"}
            variants={draw}
            custom={1}
          />
        )}
        {value === "X" && (
          <>
            <motion.line
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
              stroke="#ff0055"
              variants={draw}
              custom={1}
            />
            <motion.line
              x1="0%"
              y1="100%"
              x2="100%"
              y2="0%"
              stroke="#ff0055"
              variants={draw}
              custom={1}
            />
          </>
        )}
      </motion.svg>
    </button>
  );
};

export default Square;
