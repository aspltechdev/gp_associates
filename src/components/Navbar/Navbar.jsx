// import { useState } from "react";
// import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
// import "./Navbar.css";

// const navLinks = [
//   { label: "Home", href: "#home" },
//   { label: "About", href: "#about" },
//   { label: "Services", href: "#services" },
//   { label: "Process", href: "#process" },
//   { label: "Contact", href: "#contact" },
// ];

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleLinkClick = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <header className="navbar">
//       <div className="navbar-container">

//         {/* Logo */}
//         <a href="#home" className="navbar-logo" onClick={handleLinkClick}>
//           <div className="logo-mark">
//             <span>GP</span>
//           </div>

//           <div className="logo-content">
//             <span className="logo-name">GP ASSOCIATES</span>
//             <span className="logo-tagline">
//               Financial & Insurance Consultants
//             </span>
//           </div>
//         </a>

//         {/* Desktop Navigation */}
//         <nav className="desktop-nav">
//           {navLinks.map((link) => (
//             <a key={link.label} href={link.href}>
//               {link.label}
//             </a>
//           ))}
//         </nav>

//         {/* Desktop CTA */}
//         <div className="navbar-actions">
//           <a href="tel:+919000000000" className="navbar-phone">
//             <Phone size={16} />
//             <span>Call Us</span>
//           </a>

//           <a href="#contact" className="navbar-cta">
//             Let's Talk
//             <ArrowUpRight size={17} />
//           </a>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="mobile-menu-btn"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle navigation"
//         >
//           {menuOpen ? <X size={25} /> : <Menu size={25} />}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
//         <nav>
//           {navLinks.map((link) => (
//             <a
//               key={link.label}
//               href={link.href}
//               onClick={handleLinkClick}
//             >
//               {link.label}
//             </a>
//           ))}
//         </nav>

//         <a href="#contact" className="mobile-cta" onClick={handleLinkClick}>
//           Book a Consultation
//           <ArrowUpRight size={18} />
//         </a>
//       </div>
//     </header>
//   );
// }

// export default Navbar;

import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  ArrowUpRight,
} from "lucide-react";

import "./Navbar.css";
import logo from "../../assets/logo.png";


const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* ================= LOGO ================= */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={handleLinkClick}
        >
          <img
            src={logo}
            alt="GP Associates"
            className="navbar-logo-image"
          />

          <div className="logo-content">
            <span className="logo-name">
              GP ASSOCIATES
            </span>

            <span className="logo-tagline">
              Financial & Insurance Consultants
            </span>
          </div>
        </a>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ================= DESKTOP CTA ================= */}
        <div className="navbar-actions">

          <a
            href="tel:+919000000000"
            className="navbar-phone"
          >
            <Phone size={16} />
            <span>Call Us</span>
          </a>

          <a
            href="#contact"
            className="navbar-cta"
          >
            Let's Talk
            <ArrowUpRight size={17} />
          </a>

        </div>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>

      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >
        <nav>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="mobile-cta"
          onClick={handleLinkClick}
        >
          Book a Consultation
          <ArrowUpRight size={18} />
        </a>
      </div>
    </header>
  );
}

export default Navbar;