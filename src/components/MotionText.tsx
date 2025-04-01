import { motion } from "framer-motion";

const MotionText = () => {
  return (
    <div className="w-full h-[90px]  bg-[#EF4444] flex items-center overflow-hidden gap-8">
      {Array.from({ length: 10 }).map((_, index) => (
        <motion.p
          key={index}
          className="text-[#FAFAFA] text-[30px] flex-shrink-0 "
          initial={{ x: "100%" }}
          animate={{
            x: ["0%", "-100%"],
            transition: {
              x: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 0.1,
              },
            },
          }}
        >
          Fresh fast delivered
        </motion.p>
      ))}
    </div>
  );
};

export default MotionText;
