import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function FooterLayout() {
  return (
    <div className="w-full bg-gray-800 text-white mt-10">
      <div className="container mx-auto px-4 py-5">
        {/* Footer Content */}
        <div className="flex flex-wrap justify-center gap-6 text-left">
          {/* Column 1: About */}
          <div className="w-full  p-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h3 className="mb-4 text-2xl font-semibold">About Us</h3>
            <p>
              We are a cutting-edge platform that helps you transform your look
              with just a photo. Discover your perfect hairstyle, instantly.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="w-full  p-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h3 className="mb-4 text-2xl font-semibold">Quick Links</h3>
            <ul>
              <li>
                <a href="/home" className="text-white hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-white hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-white hover:text-gray-300">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div className="w-full  p-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h3 className="mb-4 text-2xl font-semibold">Follow Us</h3>
            <div className="flex  space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl text-white hover:text-gray-300" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl text-white hover:text-gray-300" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl text-white hover:text-gray-300" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl text-white hover:text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-white pt-4 text-center">
          <p className="text-white">
            &copy; 2024 YourCompany. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
