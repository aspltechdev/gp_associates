// import {
//   HeartPulse,
//   ShieldCheck,
//   Car,
//   Umbrella,
//   PiggyBank,
//   ArrowUpRight,
// } from "lucide-react";
// import { motion } from "framer-motion";

// import "./Services.css";

// const services = [
//   {
//     id: 1,
//     title: "Life Insurance",
//     shortTitle: "Life",
//     description:
//       "Protect the people who matter most with thoughtful life insurance solutions designed around your family's needs.",
//     icon: ShieldCheck,
//     featured: true,
//   },
//   {
//     id: 2,
//     title: "Health Insurance",
//     shortTitle: "Health",
//     description:
//       "Prepare for unexpected medical expenses with suitable health protection solutions.",
//     icon: HeartPulse,
//   },
//   {
//     id: 3,
//     title: "Term Insurance",
//     shortTitle: "Term",
//     description:
//       "Focused financial protection that helps safeguard your family's future.",
//     icon: Umbrella,
//   },
//   {
//     id: 4,
//     title: "Motor Insurance",
//     shortTitle: "Motor",
//     description:
//       "Protection solutions for your vehicle against covered risks and unexpected situations.",
//     icon: Car,
//   },
//   {
//     id: 5,
//     title: "Pension Planning",
//     shortTitle: "Pension",
//     description:
//       "Plan ahead for greater financial confidence during your retirement years.",
//     icon: PiggyBank,
//   },
// ];

// function Services() {
//   return (
//     <section className="services section" id="services">
//       <div className="services-container">

//         {/* HEADER */}
//         <motion.div
//           className="services-header"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.7 }}
//         >
//           <div className="section-label">
//             <span></span>
//             OUR SOLUTIONS
//           </div>

//           <div className="services-heading-row">
//             <h2>
//               Protection for today.
//               <em>Planning for tomorrow.</em>
//             </h2>

//             <p>
//               Financial decisions become easier when you have
//               the right guidance. Explore solutions designed
//               around different stages of your financial journey.
//             </p>
//           </div>
//         </motion.div>


//         {/* SERVICES GRID */}
//         <div className="services-grid">

//           {services.map((service, index) => {
//             const Icon = service.icon;

//             return (
//               <motion.article
//                 key={service.id}
//                 className={`service-card ${
//                   service.featured ? "featured" : ""
//                 }`}
//                 initial={{
//                   opacity: 0,
//                   y: 35,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                   amount: 0.15,
//                 }}
//                 transition={{
//                   duration: 0.55,
//                   delay: index * 0.08,
//                 }}
//               >

//                 {/* CARD TOP */}
//                 <div className="service-card-top">

//                   <div className="service-icon">
//                     <Icon
//                       size={22}
//                       strokeWidth={1.8}
//                     />
//                   </div>

//                   <span className="service-number">
//                     0{index + 1}
//                   </span>

//                 </div>


//                 {/* CONTENT */}
//                 <div className="service-content">

//                   <span className="service-category">
//                     {service.shortTitle}
//                   </span>

//                   <h3>{service.title}</h3>

//                   <p>{service.description}</p>

//                 </div>


//                 {/* LINK */}
//                 <a
//                   href="#contact"
//                   className="service-link"
//                   aria-label={`Learn more about ${service.title}`}
//                 >
//                   <span>Explore solution</span>

//                   <span className="service-arrow">
//                     <ArrowUpRight size={17} />
//                   </span>
//                 </a>


//                 {/* FEATURED DECORATION */}
//                 {service.featured && (
//                   <div className="featured-decoration">
//                     <div></div>
//                     <div></div>
//                     <div></div>
//                   </div>
//                 )}

//               </motion.article>
//             );
//           })}

//         </div>


//         {/* BOTTOM CTA */}
//         <motion.div
//           className="services-bottom"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//         >
//           <div>
//             <span>Not sure what you need?</span>

//             <strong>
//               Let's understand your goals together.
//             </strong>
//           </div>

//           <a href="#contact">
//             Talk to a Consultant
//             <ArrowUpRight size={17} />
//           </a>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

// export default Services;


import {
  HeartPulse,
  ShieldCheck,
  Car,
  Umbrella,
  PiggyBank,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";
import "./Services.css";

const services = [
  {
    number: "01",
    title: "Life Insurance",
    tag: "Family Protection",
    description:
      "Build a strong financial safety net for your family with protection solutions aligned with your responsibilities and future goals.",
    icon: ShieldCheck,
    featured: true,
    points: ["Family protection", "Financial security", "Long-term planning"],
  },
  {
    number: "02",
    title: "Health Insurance",
    tag: "Health Protection",
    description:
      "Prepare for unexpected medical expenses with suitable health protection designed around your family's needs.",
    icon: HeartPulse,
  },
  {
    number: "03",
    title: "Term Insurance",
    tag: "Pure Protection",
    description:
      "Create a focused layer of financial protection that helps safeguard your family's future.",
    icon: Umbrella,
  },
  {
    number: "04",
    title: "Motor Insurance",
    tag: "Vehicle Protection",
    description:
      "Protect your vehicle against covered risks with practical insurance solutions.",
    icon: Car,
  },
  {
    number: "05",
    title: "Pension Planning",
    tag: "Retirement Planning",
    description:
      "Prepare for your retirement years with a structured approach to long-term financial planning.",
    icon: PiggyBank,
  },
];

function Services() {
  return (
    <section className="services section" id="services">
      <div className="services-container">

        {/* HEADER */}
        <motion.div
          className="services-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="services-label">
            <span></span>
            OUR SOLUTIONS
          </div>

          <div className="services-title-wrap">
            <h2>
              Solutions built around
              <em> what matters to you.</em>
            </h2>

            <p>
              From protecting your family today to preparing for tomorrow,
              GP Associates helps you make thoughtful financial decisions
              with clarity and confidence.
            </p>
          </div>
        </motion.div>

        {/* FEATURED SERVICE */}
        <motion.div
          className="services-featured"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          <div className="featured-content">

            <div className="featured-top">
              <span className="featured-number">01</span>

              <span className="featured-tag">
                FAMILY PROTECTION
              </span>
            </div>

            <div className="featured-main">

              <div className="featured-icon">
                <ShieldCheck size={32} strokeWidth={1.6} />
              </div>

              <div>
                <h3>Life Insurance</h3>

                <p>
                  Protect the people who matter most with a thoughtful
                  financial safety net designed around your family's
                  responsibilities and long-term goals.
                </p>

                <div className="featured-points">
                  <span>
                    <Check size={14} />
                    Family Protection
                  </span>

                  <span>
                    <Check size={14} />
                    Financial Security
                  </span>

                  <span>
                    <Check size={14} />
                    Future Planning
                  </span>
                </div>
              </div>
            </div>

            <a href="#contact" className="featured-link">
              Discuss your protection needs
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* VISUAL */}
          <div className="featured-visual">

            <div className="visual-orbit orbit-one"></div>
            <div className="visual-orbit orbit-two"></div>

            <div className="visual-center">
              <ShieldCheck size={42} strokeWidth={1.3} />
              <span>PROTECT</span>
              <strong>WHAT MATTERS</strong>
            </div>

            <div className="visual-dot dot-one"></div>
            <div className="visual-dot dot-two"></div>
            <div className="visual-dot dot-three"></div>

          </div>
        </motion.div>

        {/* OTHER SERVICES */}
        <div className="services-list">

          {services.slice(1).map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.a
                href="#contact"
                className="service-row"
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
              >

                <div className="service-row-number">
                  {service.number}
                </div>

                <div className="service-row-icon">
                  <Icon size={24} strokeWidth={1.7} />
                </div>

                <div className="service-row-content">
                  <span>{service.tag}</span>
                  <h3>{service.title}</h3>
                </div>

                <p>{service.description}</p>

                <div className="service-row-arrow">
                  <ArrowUpRight size={20} />
                </div>

              </motion.a>
            );
          })}

        </div>

        {/* BOTTOM CTA */}
        <motion.div
          className="services-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span>Not sure where to begin?</span>
            <strong>
              Let's understand your financial goals together.
            </strong>
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

export default Services;