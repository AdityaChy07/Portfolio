function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] top-0 left-0 animate-pulse"></div>

      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] bottom-0 right-0 animate-pulse"></div>

      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[120px] top-1/2 left-1/2 -translate-x-1/2 animate-pulse"></div>

    </div>
  );
}

export default AuroraBackground;