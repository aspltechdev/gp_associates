import {
  MessageCircle,
  Search,
  Lightbulb,
  FileCheck2,
  RefreshCw,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import "./Process.css";

const steps = [
  {
    number: "01",
    title: "Understand",
    subtitle: "Start with a conversation",
    description:
      "We understand your family, responsibilities, existing financial commitments and what you want to achieve.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Analyse",
    subtitle: "Look at the bigger picture",
    description:
      "We look at your current financial situation, protection needs and important future milestones.",
    icon: Search,
  },
  {
    number: "03",
    title: "Recommend",
    subtitle: "Explore suitable solutions",
    description:
      "Based on your needs, we explain relevant options clearly so you can make informed decisions.",
    icon: Lightbulb,
  },
  {
    number: "04",
    title: "Plan",
    subtitle: "Put your strategy into action",
    description:
      "Once you are comfortable with the approach, we help you move forward with the chosen plan.",
    icon: FileCheck2,
  },
  {
    number: "05",
    title: "Review",
    subtitle: "Keep your plan relevant",
    description:
      "Life changes. We encourage regular reviews so your financial planning can evolve with your goals.",
    icon: RefreshCw,
  },
];

function Process() {
  return (
    <section className="process section" id="process">
      <div className="process-container">

        {/* HEADER */}
        <motion.div
          className="process-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="process-label">
            <span></span>
            OUR PROCESS
          </div>

          <div className="process-heading">
            <h2>
              Simple conversations.
              <em> Thoughtful decisions.</em>
            </h2>

            <p>
              Financial planning doesn't have to feel complicated. We follow
              a clear process designed to make every step easier to understand.
            </p>
          </div>
        </motion.div>

        {/* PROCESS VISUAL */}
        <div className="process-visual">

          <div className="process-line">
            <div className="process-line-progress"></div>
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                className={`process-step ${
                  index === 0 ? "active-step" : ""
                }`}
                key={step.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
              >

                <div className="process-number">
                  {step.number}
                </div>

                <div className="process-icon">
                  <Icon size={23} strokeWidth={1.7} />
                </div>

                <div className="process-content">

                  <span>{step.subtitle}</span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          className="process-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="process-cta-left">
            <div className="process-cta-mark">
              GP
            </div>

            <div>
              <span>YOUR JOURNEY STARTS HERE</span>

              <strong>
                One conversation can bring clarity to your next step.
              </strong>
            </div>
          </div>

          <a href="#contact">
            Book a Consultation
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Process;