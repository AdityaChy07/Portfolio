import { motion } from "framer-motion";

function FloatingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[120px] top-0 left-0"
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
        }}
        className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[120px] bottom-0 right-0"
      />

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute w-[350px] h-[350px] rounded-full bg-blue-500/20 blur-[120px] top-1/2 left-1/2"
      />

    </div>
  );
}

export default FloatingBackground;