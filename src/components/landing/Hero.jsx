import { Button } from "@/components/ui/button"; // ShadCN Button component
import { BorderBeam } from "@/components/ui/border-beam"; // Importing the BorderBeam component
import { motion } from "framer-motion"; // Importing framer-motion for animation

export default function Hero() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-400 to-purple-800 text-white">
      {/* Transparent Robot Image Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://firebasestorage.googleapis.com/v0/b/test-2ac5c.appspot.com/o/robot.png?alt=media&token=6649e398-cf5a-426c-b13a-00008a02e8be")',
          backgroundSize: "contain", // Adjusts the size of the image to fit within the container
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
          opacity: 0.2, // Adjusts the transparency of the image
        }}
      ></div>
      <div className="absolute inset-0 z-10 bg-black opacity-40"></div>
      <div className="relative z-20 px-4 text-center sm:px-8 lg:px-16">
        {/* Title Animation */}
        <motion.h1
          className="mb-4 text-5xl font-bold leading-tight sm:text-6xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Welcome to Hairstyle.AI
        </motion.h1>

        {/* Description Animation */}
        <motion.p
          className="mb-8 text-xl sm:text-2xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Discover the best hairstyle ideas powered by AI. Find styles that fit
          your personality and preferences.
        </motion.p>

        {/* Call-to-action button Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <Button
            variant="default"
            className="h-[60px] rounded-md bg-purple-700 px-6 py-3 text-xl hover:bg-purple-900"
          >
            Get Started
          </Button>
        </motion.div>

        {/* BorderBeam Effect - Adding the circular animation */}
        <div className="relative mx-auto mt-12 max-w-lg">
          {/* BorderBeam Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            <BorderBeam
              className="absolute inset-0"
              size={200}
              duration={10}
              anchor={90}
              borderWidth={2}
              colorFrom="#ffaa40"
              colorTo="#9c40ff"
              delay={0}
            />
          </motion.div>

          <div className="relative z-20 p-4 text-center">
            <motion.h2
              className="mb-4 text-2xl font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            >
              Why Choose Us?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            >
              Our AI technology helps you find your next look with ease. Whether
              you&apos;re looking for something bold or subtle, we have it all.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
