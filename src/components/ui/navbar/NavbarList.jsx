import { Link } from "react-router-dom";

export default function NavbarList() {
  const links = [
    { name: "Home", href: "/" },
    { name: "HairStyle", href: "/hairstyle-ai" },
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <ul className="flex space-x-6">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            to={link.href}
            className="text-gray-700 transition-colors hover:text-blue-600"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
