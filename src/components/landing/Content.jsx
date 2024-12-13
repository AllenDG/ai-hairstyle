// Content.jsx

import TextRevealByWord from "@/components/ui/text-reveal";
import { FaCog, FaRocket, FaBriefcase } from "react-icons/fa"; // Example icons from react-icons

export default function Content() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      {/* Landing Page Section with Text Reveal */}
      <div className="mb-8 max-w-3xl text-center">
        <TextRevealByWord
          text="Welcome to Our Interactive Landing Page, Where Innovation Meets Creativity"
          className="text-reveal-section text-2xl font-semibold text-gray-800"
        />
      </div>

      {/* Card Section with Icons */}
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {/* Card 1 */}
        <div className="rounded-lg bg-white p-6 text-center shadow-lg">
          <FaCog className="mb-4 text-4xl text-gray-700" />
          <h3 className="text-xl font-semibold text-gray-800">
            Customizable Settings
          </h3>
          <p className="mt-2 text-gray-600">
            Tailor your experience with various settings.
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-lg bg-white p-6 text-center shadow-lg">
          <FaRocket className="mb-4 text-4xl text-gray-700" />
          <h3 className="text-xl font-semibold text-gray-800">
            Innovative Features
          </h3>
          <p className="mt-2 text-gray-600">
            Explore cutting-edge features to enhance your productivity.
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-lg bg-white p-6 text-center shadow-lg">
          <FaBriefcase className="mb-4 text-4xl text-gray-700" />
          <h3 className="text-xl font-semibold text-gray-800">
            Professional Tools
          </h3>
          <p className="mt-2 text-gray-600">
            Equip yourself with professional tools for success.
          </p>
        </div>
      </div>
    </div>
  );
}
