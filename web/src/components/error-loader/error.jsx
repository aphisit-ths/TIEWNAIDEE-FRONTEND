import Lottie from "react-lottie";
import * as loading from "./error-loader.json";
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

export default function ErrorLoader() {
  return (
    
      <motion.div animate={{ opacity: [0, 1] }} >
        <Lottie options={defaultOptions} height={400} width={800} />
        <h1>พบข้อผิดพลาดบางประการ ขออภัยในความไม่สะดวกด้วยครับ </h1>
      </motion.div>
    
  );
}
