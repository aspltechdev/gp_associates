import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  Clock3,
} from "lucide-react";
import { motion } from "framer-motion";
import "./Contact.css";

const contactDetails = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 90000 00000",
    href: "tel:+919000000000",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@gpassociates.in",
    href: "mailto:hello@gpassociates.in",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/919000000000",
  },
];

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="contact-container">

        {/* HEADER */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-label">
            <span></span>
            GET IN TOUCH
          </div>

          <h2>
            Let's start a
            <em> meaningful conversation.</em>
          </h2>

          <p>
            Have a question about insurance or financial planning?
            Share a few details and let's understand how we can help.
          </p>
        </motion.div>

        <div className="contact-layout">

          {/* LEFT */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >

            <div className="contact-info-title">
              <span>GP ASSOCIATES</span>
              <h3>We're here to help you plan with clarity.</h3>
            </div>

            <div className="contact-details">

              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    href={item.href}
                    className="contact-detail"
                    key={item.label}
                  >
                    <div className="contact-detail-icon">
                      <Icon size={19} strokeWidth={1.7} />
                    </div>

                    <div>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>

                    <ArrowUpRight
                      className="contact-detail-arrow"
                      size={17}
                    />
                  </a>
                );
              })}

            </div>

            {/* OFFICE */}
            <div className="contact-office">

              <div className="office-icon">
                <MapPin size={19} />
              </div>

              <div>
                <span>OUR OFFICE</span>

                <strong>
                  Puducherry, India
                </strong>

                <p>
                  Visit us for a personal conversation about your
                  financial goals and protection needs.
                </p>
              </div>

            </div>

            {/* HOURS */}
            <div className="contact-hours">

              <Clock3 size={18} />

              <div>
                <span>CONSULTATION HOURS</span>
                <strong>Monday – Saturday</strong>
                <small>By appointment</small>
              </div>

            </div>

          </motion.div>


          {/* FORM */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >

            <div className="contact-form-heading">
              <span>BOOK A CONSULTATION</span>

              <h3>
                Tell us what
                <em> you're planning for.</em>
              </h3>
            </div>

            <form className="contact-form">

              <div className="form-row">

                <div className="form-group">
                  <label>YOUR NAME</label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-group">
                  <label>PHONE NUMBER</label>

                  <input
                    type="tel"
                    placeholder="+91"
                  />
                </div>

              </div>

              <div className="form-group">
                <label>EMAIL ADDRESS</label>

                <input
                  type="email"
                  placeholder="you@example.com"
                />
              </div>

              <div className="form-group">
                <label>WHAT WOULD YOU LIKE TO DISCUSS?</label>

                <select defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option>Life Insurance</option>
                  <option>Health Insurance</option>
                  <option>Term Insurance</option>
                  <option>Motor Insurance</option>
                  <option>Pension Planning</option>
                  <option>Financial Planning</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>YOUR MESSAGE</label>

                <textarea
                  rows="4"
                  placeholder="Tell us a little about what you need..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact-submit"
              >
                Send Enquiry
                <ArrowUpRight size={18} />
              </button>

              <p className="form-note">
                Your information will only be used to respond to your enquiry.
              </p>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;