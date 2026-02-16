import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 30) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full bg-transparent z-50 h-16"
    >
      <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-center relative">
        <div className="flex items-center gap-3 absolute left-8">
          <img src={logo} className="w-12 h-12" />
          <span className="font-bold text-white">
            Edge Robotics Studio
          </span>
        </div>

        <ul className="flex gap-8 text-gray-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-primary transition-colors">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
