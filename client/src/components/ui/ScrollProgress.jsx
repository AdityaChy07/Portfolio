import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 origin-left z-[9999] shadow-lg"
      style={{
        scaleX: scrollYProgress,
        width: "100%",
      }}
    />
  );
}

export default ScrollProgress;