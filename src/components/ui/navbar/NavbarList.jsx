import { Link, useLocation } from "react-router-dom";

export default function NavbarList() {
  const location = useLocation(); // Get the current location
  const links = [
    { name: "Home", href: "/" },
    { name: "Hairstyle", href: "/hairstyle-ai" },
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <ul className="flex space-x-6">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            to={link.href}
            className={`relative rounded-lg px-3 py-1 transition-all duration-300 ${
              location.pathname === link.href
                ? "border bg-purple-100 bg-opacity-50 font-semibold text-purple-800"
                : "text-gray-700 hover:border hover:border-purple-500 hover:bg-purple-100 hover:bg-opacity-50 hover:text-purple-600"
            }`}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
