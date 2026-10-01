import { useState } from "react";

import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  Clock3,
  CheckCircle2,
  AlertCircle,
  Loader2,
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });


  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);

    setStatus({
      type: "",
      message: "",
    });


    const form = event.currentTarget;

    const formData = new FormData(form);


    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );


      const data = await response.json();


      if (data.success) {
        setStatus({
          type: "success",
          message:
            "Thank you! Your enquiry has been sent successfully. We will contact you shortly.",
        });

        form.reset();
      } else {
        setStatus({
          type: "error",
          message:
            data.message ||
            "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error(
        "Web3Forms Error:",
        error
      );

      setStatus({
        type: "error",
        message:
          "Unable to send your enquiry right now. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section
      className="contact section"
      id="contact"
    >
      <div className="contact-container">

        {/* =========================================
            HEADER
        ========================================= */}
        <motion.div
          className="contact-header"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="contact-label">
            <span />
            GET IN TOUCH
          </div>

          <h2>
            Let's start a
            <em>
              {" "}
              meaningful conversation.
            </em>
          </h2>

          <p>
            Have a question about insurance or financial
            planning? Share a few details and let's
            understand how we can help.
          </p>
        </motion.div>


        {/* =========================================
            CONTACT LAYOUT
        ========================================= */}
        <div className="contact-layout">

          {/* =========================================
              LEFT CONTACT INFORMATION
          ========================================= */}
          <motion.div
            className="contact-info"
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <div className="contact-info-title">

              <span>
                GP ASSOCIATES
              </span>

              <h3>
                We're here to help you
                plan with clarity.
              </h3>

            </div>


            {/* =====================================
                CONTACT DETAILS
            ===================================== */}
            <div className="contact-details">

              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    href={item.href}
                    className="contact-detail"
                    key={item.label}
                    target={
                      item.label ===
                      "WhatsApp"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.label ===
                      "WhatsApp"
                        ? "noreferrer"
                        : undefined
                    }
                  >

                    <div className="contact-detail-icon">

                      <Icon
                        size={19}
                        strokeWidth={1.7}
                      />

                    </div>


                    <div>

                      <span>
                        {item.label}
                      </span>

                      <strong>
                        {item.value}
                      </strong>

                    </div>


                    <ArrowUpRight
                      className="contact-detail-arrow"
                      size={17}
                    />

                  </a>
                );
              })}

            </div>


            {/* =====================================
                OFFICE
            ===================================== */}
            <div className="contact-office">

              <div className="office-icon">

                <MapPin
                  size={19}
                  strokeWidth={1.8}
                />

              </div>


              <div>

                <span>
                  OUR OFFICE
                </span>

                <strong>
                  Puducherry, India
                </strong>

                <p>
                  Visit us for a personal conversation
                  about your financial goals and
                  protection needs.
                </p>

              </div>

            </div>


            {/* =====================================
                CONSULTATION HOURS
            ===================================== */}
            <div className="contact-hours">

              <Clock3
                size={18}
                strokeWidth={1.8}
              />


              <div>

                <span>
                  CONSULTATION HOURS
                </span>

                <strong>
                  Monday – Saturday
                </strong>

                <small>
                  By appointment
                </small>

              </div>

            </div>

          </motion.div>


          {/* =========================================
              RIGHT FORM
          ========================================= */}
          <motion.div
            className="contact-form-wrapper"
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            {/* FORM HEADING */}
            <div className="contact-form-heading">

              <span>
                BOOK A CONSULTATION
              </span>

              <h3>
                Tell us what
                <em>
                  {" "}
                  you're planning for.
                </em>
              </h3>

            </div>


            {/* =====================================
                WEB3FORMS
            ===================================== */}
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* Web3Forms Access Key */}
              <input
                type="hidden"
                name="access_key"
                value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY}
              />


              {/* Email Subject */}
              <input
                type="hidden"
                name="subject"
                value="New Consultation Enquiry - GP Associates"
              />


              {/* Sender Name */}
              <input
                type="hidden"
                name="from_name"
                value="GP Associates Website"
              />


              {/* =====================================
                  SPAM PROTECTION
              ===================================== */}
              <input
                type="checkbox"
                name="botcheck"
                className="contact-botcheck"
                tabIndex="-1"
                autoComplete="off"
              />


              {/* =====================================
                  NAME + PHONE
              ===================================== */}
              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="name">
                    YOUR NAME
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    autoComplete="name"
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="phone">
                    PHONE NUMBER
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    required
                    autoComplete="tel"
                  />

                </div>

              </div>


              {/* =====================================
                  EMAIL
              ===================================== */}
              <div className="form-group">

                <label htmlFor="email">
                  EMAIL ADDRESS
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                />

              </div>


              {/* =====================================
                  DISCUSSION TYPE
              ===================================== */}
              <div className="form-group">

                <label htmlFor="service">
                  WHAT WOULD YOU LIKE TO DISCUSS?
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  required
                >

                  <option
                    value=""
                    disabled
                  >
                    Select an option
                  </option>


                  <option value="Life Insurance">
                    Life Insurance
                  </option>

                  <option value="Health Insurance">
                    Health Insurance
                  </option>

                  <option value="Term Insurance">
                    Term Insurance
                  </option>

                  <option value="Motor Insurance">
                    Motor Insurance
                  </option>

                  <option value="Pension Planning">
                    Pension Planning
                  </option>

                  <option value="Financial Planning">
                    Financial Planning
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>


              {/* =====================================
                  MESSAGE
              ===================================== */}
              <div className="form-group">

                <label htmlFor="message">
                  YOUR MESSAGE
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us a little about what you need..."
                  required
                />

              </div>


              {/* =====================================
                  SUCCESS / ERROR MESSAGE
              ===================================== */}
              {status.message && (
                <div
                  className={`form-status ${
                    status.type === "success"
                      ? "form-status-success"
                      : "form-status-error"
                  }`}
                >

                  {status.type ===
                  "success" ? (
                    <CheckCircle2
                      size={19}
                    />
                  ) : (
                    <AlertCircle
                      size={19}
                    />
                  )}


                  <span>
                    {status.message}
                  </span>

                </div>
              )}


              {/* =====================================
                  SUBMIT
              ===================================== */}
              <button
                type="submit"
                className="contact-submit"
                disabled={isSubmitting}
              >

                {isSubmitting ? (
                  <>
                    <Loader2
                      size={18}
                      className="submit-loader"
                    />

                    Sending...
                  </>
                ) : (
                  <>
                    Send Enquiry

                    <ArrowUpRight
                      size={18}
                    />
                  </>
                )}

              </button>


              <p className="form-note">
                Your information will only be
                used to respond to your enquiry.
              </p>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}


export default Contact;