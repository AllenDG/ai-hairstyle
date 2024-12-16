import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Assuming you have this component

export default function AboutPage() {
  return (
    <div className="border-2 border-gray-300 rounded-lg min-h-screen px-4 py-16">
      {/* Hero Section */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="mb-4 text-4xl font-semibold text-gray-800">About Us</h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          We are a team dedicated to bringing you the best hairstyle AI-powered
          technology. Our mission is to help you discover and try new hairstyles
          with ease and confidence.
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="mb-4 text-3xl font-semibold text-gray-800">
          Our Mission
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600">
          Our mission is to empower individuals to experiment with their looks
          using AI-driven technology that makes hairstyle selection effortless
          and fun. We believe that everyone should feel confident and explore
          new looks with ease.
        </p>
      </motion.div>

      {/* Vision Section */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="mb-4 text-3xl font-semibold text-gray-800">
          Our Vision
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600">
          We envision a world where anyone can confidently choose and experiment
          with their hairstyle, thanks to advanced AI technology. We strive to
          continually innovate, ensuring our platform remains the go-to
          destination for all things hairstyle, helping individuals discover
          their unique beauty and style effortlessly.
        </p>
      </motion.div>

      {/* Call to Action Button */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Button
          variant="default"
          className="rounded-lg bg-purple-800 px-6 py-3 text-white hover:bg-purple-900"
        >
          Join Us Today
        </Button>
      </motion.div>
    </div>
  );
}
