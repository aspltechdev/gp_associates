import {
  ShieldCheck,
  UserRoundCheck,
  Target,
  Handshake,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
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

function WhyChooseUs() {
  return (
    <section className="why-section section">
      <div className="why-container">

        {/* HEADER */}
        <motion.div
          className="why-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="why-label">
            <span></span>
            WHY GP ASSOCIATES
          </div>

          <p>
            Financial planning becomes more meaningful when it starts with
            understanding people, not just products.
          </p>
        </motion.div>

        <div className="why-layout">

          {/* LEFT FEATURE PANEL */}
          <motion.div
            className="why-feature"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >

            <div className="why-feature-top">
              <span>THE GP APPROACH</span>

              <div className="why-feature-arrow">
                <ArrowUpRight size={20} />
              </div>
            </div>

            <div className="why-feature-content">

              <div className="why-big-number">
                01
              </div>

              <h2>
                Your goals.
                <br />
                <em>Our guidance.</em>
              </h2>

              <p>
                We take time to understand where you are today, what you
                want to achieve tomorrow and how financial planning can
                connect the two.
              </p>

            </div>

            {/* DECORATIVE GRAPH */}
            <div className="why-growth">

              <div className="growth-line"></div>

              <div className="growth-point point-one"></div>
              <div className="growth-point point-two"></div>
              <div className="growth-point point-three"></div>

              <span className="growth-label label-one">
                TODAY
              </span>

              <span className="growth-label label-two">
                TOMORROW
              </span>

            </div>

            <div className="why-feature-bottom">
              <span>PLAN</span>
              <span>PROTECT</span>
              <span>GROW</span>
            </div>

          </motion.div>

          {/* RIGHT REASONS */}
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

                  <div className="reason-number">
                    {reason.number}
                  </div>

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

        {/* BOTTOM STATEMENT */}
        <motion.div
          className="why-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>THE GOAL</span>

          <strong>
            Make every financial decision with greater clarity and confidence.
          </strong>

          <a href="#contact">
            Start a conversation
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default WhyChooseUs;