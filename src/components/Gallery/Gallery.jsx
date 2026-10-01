import { ArrowUpRight, Images } from "lucide-react";
import { motion } from "framer-motion";
import "./Gallery.css";

const galleryItems = [
  {
    id: 1,
    image: "/images/gallery/gallery-01.jpg",
    title: "Professional Excellence",
    category: "GP Associates",
    size: "large",
  },
  {
    id: 2,
    image: "/images/gallery/gallery-02.jpg",
    title: "Client Conversations",
    category: "Financial Planning",
    size: "small",
  },
  {
    id: 3,
    image: "/images/gallery/gallery-03.jpg",
    title: "Building Relationships",
    category: "Client Experience",
    size: "small",
  },
  {
    id: 4,
    image: "/images/gallery/gallery-04.jpg",
    title: "Professional Journey",
    category: "Moments",
    size: "wide",
  },
];

function Gallery() {
  return (
    <section className="gallery section" id="gallery">
      <div className="gallery-container">

        {/* HEADER */}
        <motion.div
          className="gallery-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="gallery-label">
            <span></span>
            MOMENTS & MILESTONES
          </div>

          <div className="gallery-heading">
            <h2>
              A journey built on
              <em> trust & relationships.</em>
            </h2>

            <p>
              Every conversation, milestone and relationship is part of
              the GP Associates journey.
            </p>
          </div>
        </motion.div>

        {/* GALLERY */}
        <div className="gallery-grid">

          {galleryItems.map((item, index) => (
            <motion.article
              className={`gallery-item gallery-${item.size}`}
              key={item.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
              />

              <div className="gallery-overlay"></div>

              <div className="gallery-content">
                <div>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>

                <div className="gallery-arrow">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </motion.article>
          ))}

          {/* EMPTY / FUTURE TILE */}
          <motion.div
            className="gallery-message"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="gallery-message-icon">
              <Images size={22} />
            </div>

            <span>MORE MOMENTS</span>

            <strong>
              Every relationship becomes part of the journey.
            </strong>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Gallery;