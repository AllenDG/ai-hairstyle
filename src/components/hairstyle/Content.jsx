import { motion } from "framer-motion"; // For animations

const Content = () => {
  return (
    <motion.div
      className="mb-6 text-center"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-purple-800">Explore Hairstyles</h1>
      <p className="mt-2 text-lg text-gray-600">
        Discover the perfect hairstyle that matches your personality and style.
      </p>
    </motion.div>
  );
};

export default Content;
