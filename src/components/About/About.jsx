import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

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

        {/* LEFT VISUAL */}
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-card">

            <div className="about-card-top">
              <span>GP</span>

              <div className="about-growth-icon">
                <ArrowUpRight size={20} />
              </div>
            </div>

            <div className="about-growth">
              <div className="growth-bars">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="growth-arrow"></div>
            </div>

            <div className="about-card-bottom">
              <span>Your Goals</span>
              <strong>Your Future</strong>
            </div>

          </div>

          {/* Floating Badge */}
          <div className="about-floating-badge">
            <div className="badge-dot"></div>

            <div>
              <strong>Future Focused</strong>
              <span>Planning with purpose</span>
            </div>
          </div>

          {/* Decorative Circle */}
          <div className="about-decoration"></div>
        </motion.div>


        {/* RIGHT CONTENT */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >

          <div className="section-label">
            <span></span>
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