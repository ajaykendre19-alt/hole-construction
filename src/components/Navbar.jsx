import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/hole logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Navbar Shadow on Scroll
  useEffect(() => {
    const handleNavbar = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleNavbar);

    return () => window.removeEventListener("scroll", handleNavbar);
  }, []);

  // Active Menu Highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={scrolled ? "navbar scrolled" : "navbar"}>

        <div className="logo">

          <img src={logo} alt="Hole Construction Logo" />

          <div className="logo-text">
            <h2>Hole Construction</h2>
            <span>Core Cutting • Demolition</span>
          </div>

        </div>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>

          <li>
            <a
              href="#home"
              className={active === "home" ? "active" : ""}
              onClick={closeMenu}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={active === "about" ? "active" : ""}
              onClick={closeMenu}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#services"
              className={active === "services" ? "active" : ""}
              onClick={closeMenu}
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#gallery"
              className={active === "gallery" ? "active" : ""}
              onClick={closeMenu}
            >
              Gallery
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={active === "contact" ? "active" : ""}
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>

        </ul>

      </nav>

      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
}

export default Navbar;