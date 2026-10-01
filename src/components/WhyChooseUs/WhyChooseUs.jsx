import {
  ShieldCheck,
  UserRoundCheck,
  Target,
  Handshake,
  ArrowUpRight,
  UsersRound,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";

import approachImage from "../../assets/why-choose.png";

import "./WhyChooseUs.css";

const reasons = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Protection First",
    description:
      "We begin by understanding what needs to be protected before looking at financial solutions.",
  },
  {
    number: "02",
    icon: UserRoundCheck,
    title: "Personalized Guidance",
    description:
      "Every financial journey is different. Our approach is built around your goals, responsibilities and priorities.",
  },
  {
    number: "03",
    icon: Target,
    title: "Goal-Oriented Planning",
    description:
      "From family security to retirement, we connect financial decisions with meaningful life goals.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Long-Term Relationship",
    description:
      "We believe financial planning is an ongoing relationship, not a one-time conversation.",
  },
];

const steps = [
  {
    icon: UsersRound,
    title: "Understand",
    text: "Your goals",
  },
  {
    icon: ShieldCheck,
    title: "Protect",
    text: "What matters",
  },
  {
    icon: BarChart3,
    title: "Grow",
    text: "Your future",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-section section" id="why-us">
      <div className="why-container">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <motion.div
          className="why-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="why-label">
            <span />
            WHY GP ASSOCIATES
          </div>

          <p>
            Financial planning becomes more meaningful when it starts
            with understanding people, not just products.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN LAYOUT
        ===================================================== */}
        <div className="why-layout">
          {/* =====================================================
              LEFT FEATURE CARD
          ===================================================== */}
          <motion.div
            className="why-feature"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={approachImage}
              alt="Family looking toward the future"
              className="why-feature-image"
            />

            {/* overlay layers */}
            <div className="why-overlay-top" />
            <div className="why-overlay-side" />
            <div className="why-overlay-warm" />
            <div className="why-overlay-bottom-fade" />
            <div className="why-orb" />

            {/* top */}
            <div className="why-feature-top">
              <div className="why-feature-label">
                <span className="feature-label-line" />
                <span>THE GP APPROACH</span>
              </div>

              <a
                href="#contact"
                className="why-feature-arrow"
                aria-label="Start a conversation"
              >
                <ArrowUpRight size={18} strokeWidth={1.9} />
              </a>
            </div>

            {/* content */}
            <div className="why-feature-content">
              <div className="why-feature-number">
                <span>01</span>
                <i />
              </div>

              <h2>
                Your goals.
                <br />
                <em>Our guidance.</em>
              </h2>

              <p>
                We take time to understand where you are today, what
                you want to achieve tomorrow and how financial planning
                can connect the two.
              </p>
            </div>

            {/* bottom panel */}
            <div className="why-approach-panel">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div className="approach-step" key={step.title}>
                    <div className="approach-icon">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <strong>{step.title}</strong>
                    <span>{step.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT REASONS
          ===================================================== */}
          <div className="why-reasons">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  className="why-reason"
                  key={reason.number}
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                >
                  <div className="reason-number">{reason.number}</div>

                  <div className="reason-icon">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <div className="reason-content">
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}
        <motion.div
          className="why-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>THE GOAL</span>

          <strong>
            Make every financial decision with greater clarity and
            confidence.
          </strong>

          <a href="#contact">
            Start a conversation
            <ArrowUpRight size={17} strokeWidth={1.8} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;