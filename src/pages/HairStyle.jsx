import Content from "@/components/hairstyle/Content"; // Assuming Content component is used for the header
import UploadPhoto from "@/features/hairstyle-ai/components/UploadPhoto";
import GenderSelection from "@/features/hairstyle-ai/components/GenderSelection";
import { motion } from "framer-motion"; // Importing framer-motion for animation

import HairstyleColorSelector from "@/features/hairstyle-ai/components/HairstyleColorSelector";
import GenerateButton from "@/features/hairstyle-ai/components/GenerateButton";
import ImageGenerated from "@/features/hairstyle-ai/components/ImageGenerated";
import InlineContent from "@/components/hairstyle/InlineContent";

export default function HairStyle() {
  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-10">
      {/* Header */}
      <Content />

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        {/* First Column with Scroll Animation */}
        <motion.div
          className="w-full max-w-3xl rounded-lg bg-gray-200 p-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Upload Photo Section */}
          <UploadPhoto />

          {/* Gender Selection */}
          <GenderSelection />

          {/* Hairstyle Color Selector */}
          <HairstyleColorSelector />

          {/* Generate Button */}
          <GenerateButton />
        </motion.div>

        {/* Second Column with Scroll Animation */}
        <motion.div
          className="w-full max-w-3xl rounded-lg bg-gray-200 p-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <ImageGenerated />
        </motion.div>
      </div>
      <InlineContent />
    </div>
  );
}
