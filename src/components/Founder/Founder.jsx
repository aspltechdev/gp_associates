import {
  Award,
  BadgeCheck,
  ArrowUpRight,
  Quote,
} from "lucide-react";
import { motion } from "framer-motion";
import "./Founder.css";

function Founder() {
  return (
    <section className="founder section" id="founder">
      <div className="founder-container">

        {/* TOP LABEL */}
        <motion.div
          className="founder-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span></span>
          MEET YOUR FINANCIAL CONSULTANT
        </motion.div>

        <div className="founder-layout">

          {/* IMAGE */}
          <motion.div
            className="founder-visual"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >

            <div className="founder-image-frame">

              <img
                src="/images/founder/gunasegaran-perumal.png"
                alt="Gunasegaran Perumal - GP Associates"
              />

              <div className="founder-image-overlay"></div>

              <div className="founder-photo-tag">
                <Award size={17} />
                <div>
                  <strong>MDRT</strong>
                  <span>Chief Life Planner</span>
                </div>
              </div>

            </div>

            <div className="founder-decoration"></div>

            <div className="founder-experience">
              <span>GP</span>
              <strong>Associates</strong>
              <small>Financial & Insurance Consultants</small>
            </div>

          </motion.div>


          {/* CONTENT */}
          <motion.div
            className="founder-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >

            <div className="founder-eyebrow">
              <BadgeCheck size={17} />
              <span>PROFESSIONAL FINANCIAL GUIDANCE</span>
            </div>

            <h2>
              Meet
              <em> Gunasegaran Perumal.</em>
            </h2>

            <h3>
              MDRT • Chief Life Planner • Financial Consultant
            </h3>

            <p className="founder-lead">
              Financial planning is not only about choosing a product.
              It's about understanding people, their responsibilities,
              their ambitions and the future they want to build.
            </p>

            <p className="founder-description">
              At GP Associates, Gunasegaran Perumal works with individuals
              and families to bring greater clarity to insurance and
              financial planning decisions — with a focus on protection,
              long-term thinking and meaningful financial goals.
            </p>

            {/* QUOTE */}
            <div className="founder-quote">
              <Quote size={24} />

              <p>
                "A good financial plan should give you confidence
                about tomorrow while protecting what matters today."
              </p>
            </div>

            <a href="#contact" className="founder-button">
              Connect with Gunasegaran
              <ArrowUpRight size={18} />
            </a>

          </motion.div>

        </div>

        {/* CREDENTIAL STRIP */}
        <motion.div
          className="founder-credentials"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <div>
            <span>01</span>
            <strong>MDRT</strong>
            <small>Professional Recognition</small>
          </div>

          <div>
            <span>02</span>
            <strong>Protection</strong>
            <small>Family First Approach</small>
          </div>

          <div>
            <span>03</span>
            <strong>Planning</strong>
            <small>Goal Based Guidance</small>
          </div>

          <div>
            <span>04</span>
            <strong>Relationship</strong>
            <small>Long-Term Support</small>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Founder;