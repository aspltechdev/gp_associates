// import {
//   ArrowUpRight,
//   Phone,
//   Mail,
//   MapPin,
//   Instagram,
//   Facebook,
//   Linkedin,
// } from "lucide-react";
// import "./Footer.css";

// const footerLinks = [
//   { label: "Home", href: "#home" },
//   { label: "About", href: "#about" },
//   { label: "Services", href: "#services" },
//   { label: "Process", href: "#process" },
//   { label: "Founder", href: "#founder" },
//   { label: "Contact", href: "#contact" },
// ];

// const services = [
//   "Life Insurance",
//   "Health Insurance",
//   "Term Insurance",
//   "Motor Insurance",
//   "Pension Planning",
// ];

// function Footer() {
//   return (
//     <footer className="footer">

//       {/* TOP CTA STRIP */}
//       <div className="footer-top">
//         <div className="footer-container footer-top-inner">

//           <div>
//             <span>READY WHEN YOU ARE</span>

//             <h2>
//               Your future deserves
//               <em> a thoughtful plan.</em>
//             </h2>
//           </div>

//           <a href="#contact">
//             Start a Conversation
//             <ArrowUpRight size={18} />
//           </a>

//         </div>
//       </div>


//       {/* MAIN FOOTER */}
//       <div className="footer-main">

//         <div className="footer-container footer-grid">

//           {/* BRAND */}
//           <div className="footer-brand">

//             <a href="#home" className="footer-logo">

//               <div className="footer-logo-mark">
//                 GP
//               </div>

//               <div>
//                 <strong>GP ASSOCIATES</strong>
//                 <span>
//                   Financial & Insurance Consultants
//                 </span>
//               </div>

//             </a>

//             <p>
//               Thoughtful insurance and financial planning guidance
//               designed around your family's goals, protection and
//               long-term future.
//             </p>

//             <div className="footer-socials">

//               <a
//                 href="#"
//                 aria-label="Instagram"
//               >
//                 <Instagram size={16} />
//               </a>

//               <a
//                 href="#"
//                 aria-label="Facebook"
//               >
//                 <Facebook size={16} />
//               </a>

//               <a
//                 href="#"
//                 aria-label="LinkedIn"
//               >
//                 <Linkedin size={16} />
//               </a>

//             </div>

//           </div>


//           {/* QUICK LINKS */}
//           <div className="footer-column">

//             <h3>Explore</h3>

//             <nav>
//               {footerLinks.map((link) => (
//                 <a
//                   href={link.href}
//                   key={link.label}
//                 >
//                   {link.label}
//                 </a>
//               ))}
//             </nav>

//           </div>


//           {/* SERVICES */}
//           <div className="footer-column">

//             <h3>Solutions</h3>

//             <nav>
//               {services.map((service) => (
//                 <a
//                   href="#services"
//                   key={service}
//                 >
//                   {service}
//                 </a>
//               ))}
//             </nav>

//           </div>


//           {/* CONTACT */}
//           <div className="footer-column footer-contact">

//             <h3>Contact</h3>

//             <a href="tel:+919000000000">
//               <Phone size={16} />
//               <span>+91 90000 00000</span>
//             </a>

//             <a href="mailto:hello@gpassociates.in">
//               <Mail size={16} />
//               <span>hello@gpassociates.in</span>
//             </a>

//             <div className="footer-address">
//               <MapPin size={17} />

//               <span>
//                 Puducherry,
//                 <br />
//                 India
//               </span>
//             </div>

//           </div>

//         </div>

//       </div>


//       {/* BOTTOM BAR */}
//       <div className="footer-bottom">

//         <div className="footer-container footer-bottom-inner">

//           <p>
//             © {new Date().getFullYear()} GP Associates.
//             All rights reserved.
//           </p>

//           <div className="footer-legal">
//             <a href="#">Privacy Policy</a>
//             <a href="#">Terms & Conditions</a>
//           </div>

//           <a href="#home" className="back-top">
//             Back to top
//             <ArrowUpRight size={15} />
//           </a>

//         </div>

//       </div>

//     </footer>
//   );
// }

// export default Footer;


import {
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

import "./Footer.css";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Founder", href: "#founder" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Life Insurance",
  "Health Insurance",
  "Term Insurance",
  "Motor Insurance",
  "Pension Planning",
];

function Footer() {
  return (
    <footer className="footer">

      {/* TOP CTA */}
      <div className="footer-top">
        <div className="footer-container footer-top-inner">

          <div className="footer-top-content">
            <span>READY WHEN YOU ARE</span>

            <h2>
              Your future deserves
              <em> a thoughtful plan.</em>
            </h2>
          </div>

          <a href="#contact" className="footer-top-btn">
            Start a Conversation
            <ArrowUpRight size={18} />
          </a>

        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="footer-main">
        <div className="footer-container footer-grid">

          {/* BRAND */}
          <div className="footer-brand">

            <a href="#home" className="footer-logo">

              <div className="footer-logo-mark">
                GP
              </div>

              <div className="footer-logo-content">
                <strong>GP ASSOCIATES</strong>
                <span>
                  Financial & Insurance Consultants
                </span>
              </div>

            </a>

            <p>
              Thoughtful insurance and financial planning
              guidance designed around your family's goals,
              protection and long-term future.
            </p>

            {/* SOCIAL ICONS */}
            <div className="footer-socials">

              <a
                href="#"
                aria-label="Instagram"
                className="footer-social instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="footer-social facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="footer-social linkedin"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* EXPLORE */}
          <div className="footer-column">

            <h3>Explore</h3>

            <nav>
              {footerLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.label}
                >
                  {link.label}
                </a>
              ))}
            </nav>

          </div>

          {/* SERVICES */}
          <div className="footer-column">

            <h3>Solutions</h3>

            <nav>
              {services.map((service) => (
                <a
                  href="#services"
                  key={service}
                >
                  {service}
                </a>
              ))}
            </nav>

          </div>

          {/* CONTACT */}
          <div className="footer-column footer-contact">

            <h3>Contact</h3>

            <a href="tel:+919000000000">
              <Phone size={16} />
              <span>+91 90000 00000</span>
            </a>

            <a href="mailto:hello@gpassociates.in">
              <Mail size={16} />
              <span>hello@gpassociates.in</span>
            </a>

            <div className="footer-address">
              <MapPin size={17} />

              <span>
                Puducherry,
                <br />
                India
              </span>
            </div>

          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <div className="footer-container footer-bottom-inner">

          <p>
            © {new Date().getFullYear()} GP Associates.
            All rights reserved.
          </p>

          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>

          <a href="#home" className="back-top">
            Back to top
            <ArrowUpRight size={15} />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;