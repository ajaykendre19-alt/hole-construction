import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={scrolled ? "navbar scrolled" : "navbar"}>

        {/* Logo */}

        <a href="#home" className="logo">

          <img
            src="/logo.jpg"
            alt="Hole Construction"
            className="logo-img"
          />

          <div className="logo-text">
            <h2>Hole Construction</h2>
          </div>

        </a>

        {/* Mobile Menu */}

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation */}

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