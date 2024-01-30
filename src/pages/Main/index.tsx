import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

const Main: React.FC = () => {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        whileHover={{ scale: 1.1 }}
      >
        <Link to={ROUTES.game} className="text-white font-bold text-4xl">
          Start the game
        </Link>
      </motion.div>
    </main>
  );
};

export default Main;
