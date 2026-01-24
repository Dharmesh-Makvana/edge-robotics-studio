import logo from "../assets/logo.png";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-200 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} className="w-8 h-8" />
          <span className="font-semibold text-secondary">
            Edge Robotics Studio
          </span>
        </div>

        <ul className="flex gap-8 text-gray-600">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-gray-900">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
