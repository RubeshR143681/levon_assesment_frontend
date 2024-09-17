const RedLight = ({ active, countdown }) => (
  <div className="relative">
    <div
      className={`w-16 h-16 rounded-full bg-red-500 ${
        !active && "opacity-30"
      } transition-opacity duration-500`}
    />
    {active && (
      <span className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {countdown}
      </span>
    )}
  </div>
);

export default RedLight;
