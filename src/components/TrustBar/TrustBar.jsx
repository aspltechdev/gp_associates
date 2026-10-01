import {
  Award,
  ShieldCheck,
  UserCheck,
  TrendingUp,
} from "lucide-react";

import "./TrustBar.css";

const trustItems = [
  {
    icon: Award,
    value: "MDRT",
    label: "Recognized Professional",
  },
  {
    icon: ShieldCheck,
    value: "Trusted",
    label: "Insurance Guidance",
  },
  {
    icon: UserCheck,
    value: "Personalized",
    label: "Financial Planning",
  },
  {
    icon: TrendingUp,
    value: "Future Focused",
    label: "Long-Term Approach",
  },
];

function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="trust-container">

        {/* Intro */}
        <div className="trust-intro">
          <span className="trust-intro-line"></span>

          <span>
            YOUR FINANCIAL JOURNEY,
            <strong> THOUGHTFULLY PLANNED.</strong>
          </span>
        </div>

        {/* Trust Items */}
        <div className="trust-items">

          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                className="trust-item"
                key={item.value}
              >
                <div className="trust-icon">
                  <Icon size={20} strokeWidth={1.8} />
                </div>

                <div className="trust-content">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>

                {index !== trustItems.length - 1 && (
                  <div className="trust-divider"></div>
                )}
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default TrustBar;