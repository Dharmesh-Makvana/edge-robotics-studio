import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 30) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];



  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 h-16 border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-center relative">
        <div className="flex items-center gap-3 absolute left-8">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} className="w-10 h-10" alt="Logo" />
            <span className="font-bold text-white hidden md:block">
              Edge Robotics Studio
            </span>
          </Link>
        </div>

        <ul className="flex gap-8 text-gray-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className={`transition-colors hover:text-primary ${location.pathname === link.href ? "text-primary font-medium" : ""
                  }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
