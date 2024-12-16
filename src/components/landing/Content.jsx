import { useEffect, useState } from "react";
import { MagicCard } from "@/components/ui/magic-card"; // Adjust the import path based on where MagicCard is located
import { motion } from "framer-motion"; // Importing framer-motion for animation

// Import JSON data
import hairstyles from "@/data/hairstyle.json"; // assuming you stored the JSON file in /data folder

export default function Content() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Set the data from JSON file
    setData(hairstyles);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      {/* AI Hairstyle Changer Text with Scroll Animation */}
      <motion.div
        className="mb-4 mt-20 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl font-semibold text-gray-800">
          AI Hairstyle Changer Online Free
        </h1>
      </motion.div>

      {/* Short Description with Scroll Animation */}
      <motion.div
        className="mb-6 text-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg text-gray-600">
          Transform your look instantly with our AI-powered hairstyle changer.
          Try a variety of styles to find the perfect one for you, all for free!
        </p>
      </motion.div>

      {/* Card Section with Hairstyle Images and Hover Animation */}
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {data.map((hairstyle) => (
          <motion.div
            key={hairstyle.id}
            className="flex max-w-sm flex-col items-center text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }} // Adds a hover effect for the card
          >
            <MagicCard
              gradientSize={200} // Adjust this value based on your needs
              gradientColor="#e3e3e3" // You can change the gradient color here
              gradientOpacity={0.8} // Adjust the opacity
            >
              <div className="p-0">
                <img
                  src={hairstyle.image}
                  alt={hairstyle.title}
                  className="h-[200px] w-[220px] rounded-t-lg object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-center p-4">
                <h3 className="text-xl font-semibold">{hairstyle.title}</h3>
              </div>
            </MagicCard>
          </motion.div>
        ))}
      </div>

      {/* New Section with Image on Left, Text on Right, and Button with Scroll Animation */}
      <div className="mt-20 flex items-center space-x-6">
        {/* Image on the left */}
        <motion.div
          className="w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://via.placeholder.com/500x200"
            alt="Sample Hairstyle"
            className="h-[300px] w-full rounded-lg object-cover"
          />
        </motion.div>

        {/* Text and Button on the right */}
        <motion.div
          className="w-2/3 pl-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Added left padding */}
          <h2 className="mb-4 text-4xl font-semibold text-gray-800">
            Try on Short, Long, or Fringe Haircut with Hairstyle AI
          </h2>
          <p className="text-md mb-4 text-gray-600">
            See how this hairstyle can complement your features. This AI-powered
            tool lets you visualize how you would look with this style before
            committing to it. Whether you&apos;re planning a new look for an
            upcoming event or simply exploring fresh ideas, this tool gives you
            the perfect way to experiment with hairstyles and find the best fit
            for your face shape and personality.
          </p>
          <button className="rounded-md bg-purple-800 px-4 py-2 text-white hover:bg-purple-900">
            Try It Now
          </button>
        </motion.div>
      </div>
    </div>
  );
}
