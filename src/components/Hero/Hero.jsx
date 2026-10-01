// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   ShieldCheck,
//   Sparkles,
//   Phone,
// } from "lucide-react";

// import "./Hero.css";

// function Hero() {
//   return (
//     <section className="hero" id="home">

//       {/* Background Elements */}
//       <div className="hero-grid"></div>

//       <div className="hero-glow hero-glow-one"></div>
//       <div className="hero-glow hero-glow-two"></div>

//       <div className="hero-container">

//         {/* LEFT CONTENT */}
//         <motion.div
//           className="hero-content"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >

//           <motion.div
//             className="hero-eyebrow"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//           >
//             <span className="eyebrow-line"></span>

//             <span>MDRT • CHIEF LIFE PLANNER</span>

//             <Sparkles size={14} />
//           </motion.div>

//           <h1>
//             Plan Today.
//             <span> Protect Tomorrow.</span>
//           </h1>

//           <p className="hero-description">
//             Thoughtful insurance and financial planning solutions
//             designed around your family's goals, protection and
//             long-term financial future.
//           </p>

//           <div className="hero-buttons">

//             <a href="#contact" className="hero-primary-btn">
//               Book a Consultation
//               <ArrowRight size={18} />
//             </a>

//             <a href="tel:+919000000000" className="hero-secondary-btn">
//               <Phone size={17} />
//               Talk to an Expert
//             </a>

//           </div>

//           <div className="hero-trust">

//             <div className="hero-trust-icon">
//               <ShieldCheck size={20} />
//             </div>

//             <div>
//               <strong>Personalized Financial Guidance</strong>
//               <span>Built around your goals</span>
//             </div>

//           </div>

//         </motion.div>

//         {/* RIGHT VISUAL */}
//         <motion.div
//           className="hero-visual"
//           initial={{ opacity: 0, scale: 0.94 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.25, duration: 0.9 }}
//         >

//           <div className="hero-image-wrapper">

//             <div className="hero-image-ring"></div>

//             <div className="hero-image-placeholder">

//               <div className="placeholder-content">
//                 <span className="placeholder-initials">
//                   GP
//                 </span>

//                 <span className="placeholder-text">
//                   Consultant Portrait
//                 </span>
//               </div>

//             </div>

//             {/* Floating Card */}
//             <motion.div
//               className="hero-floating-card hero-card-top"
//               animate={{ y: [0, -8, 0] }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             >
//               <div className="floating-icon">
//                 <ShieldCheck size={18} />
//               </div>

//               <div>
//                 <span>Financial</span>
//                 <strong>Protection</strong>
//               </div>
//             </motion.div>

//             {/* MDRT Card */}
//             <motion.div
//               className="hero-floating-card hero-card-bottom"
//               animate={{ y: [0, 8, 0] }}
//               transition={{
//                 duration: 4.5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             >
//               <div className="mdrt-number">
//                 MDRT
//               </div>

//               <div>
//                 <span>Chief Life</span>
//                 <strong>Planner</strong>
//               </div>
//             </motion.div>

//           </div>

//         </motion.div>

//       </div>

//       {/* Bottom Scroll */}
//       <a href="#about" className="hero-scroll">
//         <span>Scroll to explore</span>

//         <span className="scroll-line"></span>
//       </a>

//     </section>
//   );
// }

// export default Hero;

import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Phone,
} from "lucide-react";

import "./Hero.css";
import hero from "../../assets/hero1.png";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background Elements */}
      <div className="hero-grid"></div>

      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-container">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
          >
            <span className="eyebrow-line"></span>

            <span>
              MDRT • CHIEF LIFE PLANNER
            </span>

            <Sparkles size={14} />
          </motion.div>

          <h1>
            Plan Today.
            <span> Protect Tomorrow.</span>
          </h1>

          <p className="hero-description">
            Thoughtful insurance and financial planning
            solutions designed around your family's goals,
            protection and long-term financial future.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <a
              href="#contact"
              className="hero-primary-btn"
            >
              Book a Consultation
              <ArrowRight size={18} />
            </a>

            <a
              href="tel:+919000000000"
              className="hero-secondary-btn"
            >
              <Phone size={17} />
              Talk to an Expert
            </a>

          </div>

          {/* Trust */}
          <div className="hero-trust">

            <div className="hero-trust-icon">
              <ShieldCheck size={20} />
            </div>

            <div>
              <strong>
                Personalized Financial Guidance
              </strong>

              <span>
                Built around your goals
              </span>
            </div>

          </div>

        </motion.div>


        {/* ================= RIGHT VISUAL ================= */}
        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.25,
            duration: 0.9,
          }}
        >

          <div className="hero-image-wrapper">

            {/* Decorative Ring */}
            <div className="hero-image-ring"></div>

            {/* Founder Image */}
            <div className="hero-image-placeholder">

              <img
                src={hero}
                alt="Gunasegaran Perumal - GP Associates"
                className="hero-founder-image"
              />

            </div>


            {/* ================= FLOATING CARD 1 ================= */}
            <motion.div
              className="hero-floating-card hero-card-top"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <div className="floating-icon">
                <ShieldCheck size={18} />
              </div>

              <div>
                <span>Financial</span>
                <strong>Protection</strong>
              </div>

            </motion.div>


            {/* ================= FLOATING CARD 2 ================= */}
            <motion.div
              className="hero-floating-card hero-card-bottom"
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <div className="mdrt-number">
                MDRT
              </div>

              <div>
                <span>Chief Life</span>
                <strong>Planner</strong>
              </div>

            </motion.div>

          </div>

        </motion.div>

      </div>


      {/* ================= SCROLL ================= */}
      <a
        href="#about"
        className="hero-scroll"
      >
        <span>
          Scroll to explore
        </span>

        <span className="scroll-line"></span>
      </a>

    </section>
  );
}

export default Hero;