import {
  Shield,
  Home,
  GraduationCap,
  HeartPulse,
  BriefcaseBusiness,
  Sunrise,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import "./FinancialGoals.css";

const goals = [
  {
    number: "01",
    icon: Shield,
    title: "Protect Your Family",
    text: "Create financial protection for the people who depend on you.",
  },
  {
    number: "02",
    icon: Home,
    title: "Build Your Future",
    text: "Plan for major milestones such as buying a home and building assets.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Children's Future",
    text: "Prepare financially for education and important future milestones.",
  },
  {
    number: "04",
    icon: BriefcaseBusiness,
    title: "Grow Your Wealth",
    text: "Build a disciplined approach toward long-term financial growth.",
  },
  {
    number: "05",
    icon: Sunrise,
    title: "Plan Retirement",
    text: "Create a financial roadmap for greater confidence in your later years.",
  },
];

function FinancialGoals() {
  return (
    <section className="financial-goals section">
      <div className="financial-goals-container">

        {/* HEADER */}
        <motion.div
          className="goals-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="goals-label">
            <span></span>
            YOUR FINANCIAL JOURNEY
          </div>

          <div className="goals-heading">
            <h2>
              Different goals.
              <em> One thoughtful plan.</em>
            </h2>

            <p>
              Your financial priorities change as life changes. We help you
              think ahead and plan for the moments that matter most.
            </p>
          </div>
        </motion.div>

        {/* JOURNEY */}
        <div className="goals-journey">

          <div className="journey-line">
            <span></span>
          </div>

          {goals.map((goal, index) => {
            const Icon = goal.icon;

            return (
              <motion.div
                className="goal-item"
                key={goal.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
              >
                <div className="goal-top">
                  <span>{goal.number}</span>
                </div>

                <div className="goal-icon">
                  <Icon size={22} strokeWidth={1.7} />
                </div>

                <div className="goal-content">
                  <h3>{goal.title}</h3>

                  <p>{goal.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM FEATURE */}
        <motion.div
          className="goals-bottom"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="goals-bottom-icon">
            <HeartPulse size={22} />
          </div>

          <div>
            <span>THE RIGHT PLAN STARTS WITH THE RIGHT CONVERSATION</span>

            <strong>
              Tell us what you're planning for.
            </strong>
          </div>

          <a href="#contact">
            Discuss Your Goals
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default FinancialGoals;