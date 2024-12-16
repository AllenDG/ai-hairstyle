import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Assuming you have this component

export default function ContactPage() {
  return (
    <div className="min-h-screen rounded-lg border-2 border-gray-200 px-4 py-16">
      {/* Hero Section */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="mb-4 text-4xl font-semibold text-gray-800">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600">
          Have any questions or feedback? Feel free to reach out to us.
          We&apos;re here to help!
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="mx-auto max-w-4xl rounded-lg border-2 border-gray-200 bg-white p-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <form>
          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-2 block font-semibold text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block font-semibold text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="mb-2 block font-semibold text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message"
              rows="5"
            ></textarea>
          </div>

          {/* Submit Button */}
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
              Send Message
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}
