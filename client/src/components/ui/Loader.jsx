import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 bg-slate-950 flex flex-col justify-center items-center z-[9999]">

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
        }}
        className="text-7xl font-bold text-cyan-400"
      >
        AC
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: .5,
        }}
        className="mt-8 text-gray-400 tracking-[5px]"
      >
        Loading Portfolio...
      </motion.p>

      <div className="w-72 h-2 bg-slate-800 rounded-full mt-10 overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 2,
          }}
          className="h-full bg-cyan-400"
        />

      </div>

    </div>
  );
}

export default Loader;