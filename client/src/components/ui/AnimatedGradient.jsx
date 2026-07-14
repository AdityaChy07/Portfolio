import { motion } from "framer-motion";

function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, 80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, -100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[140px]"
      />

      <motion.div
        animate={{
          y: [0, -120, 0],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 w-[350px] h-[350px] rounded-full bg-blue-500/20 blur-[130px]"
      />

    </div>
  );
}

export default AnimatedGradient;