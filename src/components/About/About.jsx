import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import aboutFinancial from "../../assets/about-financial.png";

import "./About.css";

const points = [
  "Personalized financial guidance",
  "Protection-focused planning",
  "Long-term relationship approach",
  "Solutions aligned with your goals",
];

function About() {
  return (
    <section className="about section" id="about">
      <div className="about-container">

        {/* =========================================
            LEFT IMAGE
        ========================================= */}
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <div className="about-image-card">

            {/* IMAGE */}
            <img
              src={aboutFinancial}
              alt="Financial planning and future growth"
              className="about-image"
            />

            {/* IMAGE OVERLAY */}
            <div className="about-image-overlay" />

            {/* TOP CONTENT */}
            <div className="about-image-top">
              <div className="about-image-brand">
                <strong>GP</strong>
                <span>ASSOCIATES</span>
              </div>

              <a
                href="#services"
                className="about-image-arrow"
                aria-label="Explore GP Associates services"
              >
                <ArrowUpRight size={20} />
              </a>
            </div>

            {/* BOTTOM CONTENT */}
            <div className="about-image-bottom">
              <span>Your Goals</span>

              <strong>Your Future</strong>
            </div>

            {/* DECORATIVE LINE */}
            <div className="about-image-line" />
          </div>

          {/* FLOATING BADGE */}
          <motion.div
            className="about-floating-badge"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.35,
            }}
          >
            <div className="badge-dot" />

            <div className="badge-content">
              <strong>Future Focused</strong>
              <span>Planning with purpose</span>
            </div>
          </motion.div>

          {/* BACKGROUND DECORATION */}
          <div className="about-decoration" />
        </motion.div>


        {/* =========================================
            RIGHT CONTENT
        ========================================= */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <div className="section-label">
            <span />
            ABOUT GP ASSOCIATES
          </div>

          <h2>
            Your financial future
            <em> deserves a thoughtful plan.</em>
          </h2>

          <p className="about-lead">
            At GP Associates, we believe financial planning is
            not simply about numbers. It is about understanding
            your goals, protecting what matters and preparing
            thoughtfully for the future.
          </p>

          <p className="about-description">
            With personalized guidance across insurance and
            financial planning, we help individuals and families
            make informed decisions based on their unique needs
            and long-term aspirations.
          </p>

          <div className="about-points">
            {points.map((point) => (
              <div className="about-point" key={point}>
                <CheckCircle2 size={18} />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <a href="#services" className="about-link">
            Explore our solutions

            <span>
              <ArrowUpRight size={17} />
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default About;