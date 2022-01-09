import Lottie from "react-lottie";
import * as loading from "./loader.json";
import React from "react";
import { motion } from "framer-motion/dist/framer-motion";


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Loader() {
  return (
    
      <motion.div animate={{ opacity: [0, 1] }} >
        <Lottie options={defaultOptions} height={250} width={250} />
      </motion.div>
    
  );
}
