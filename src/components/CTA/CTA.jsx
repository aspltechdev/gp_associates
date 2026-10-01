import { ArrowUpRight, CalendarDays, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import "./CTA.css";

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">

        {/* BACKGROUND DECORATION */}
        <div className="cta-glow cta-glow-one"></div>
        <div className="cta-glow cta-glow-two"></div>

        <div className="cta-grid-pattern"></div>

        {/* CONTENT */}
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="cta-label">
            <span></span>
            YOUR NEXT CHAPTER STARTS HERE
          </div>

          <h2>
            Plan today.
            <br />
            <em>Live tomorrow with confidence.</em>
          </h2>

          <p>
            Whether you're protecting your family, planning for your
            children's future or preparing for retirement, the right
            conversation can be the beginning of a thoughtful financial plan.
          </p>

          <div className="cta-actions">
            <a href="#contact" className="cta-primary">
              Book a Consultation
              <ArrowUpRight size={18} />
            </a>

            <a href="tel:+919000000000" className="cta-secondary">
              <CalendarDays size={17} />
              Talk to a Consultant
            </a>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          className="cta-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="cta-orbit orbit-large"></div>
          <div className="cta-orbit orbit-medium"></div>
          <div className="cta-orbit orbit-small"></div>

          <div className="cta-center">
            <ShieldCheck size={36} strokeWidth={1.4} />

            <span>GP</span>

            <strong>
              PROTECT
              <br />
              & PLAN
            </strong>
          </div>

          <div className="cta-floating cta-floating-one">
            <span>01</span>
            <strong>Protect</strong>
          </div>

          <div className="cta-floating cta-floating-two">
            <span>02</span>
            <strong>Plan</strong>
          </div>

          <div className="cta-floating cta-floating-three">
            <span>03</span>
            <strong>Grow</strong>
          </div>
        </motion.div>

        {/* BOTTOM TRUST */}
        <div className="cta-trust">
          <span>
            <i></i>
            Personalized Guidance
          </span>

          <span>
            <i></i>
            Protection Focused
          </span>

          <span>
            <i></i>
            Long-Term Thinking
          </span>
        </div>

      </div>
    </section>
  );
}

export default CTA;