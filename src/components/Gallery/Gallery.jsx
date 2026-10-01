import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

import "./Gallery.css";


/* =========================================================
   FEATURED IMAGES
========================================================= */

import professionalExcellence from "../../assets/professional_excellence.png";
import clientConversations from "../../assets/client_conversations.png";
import buildingRelationships from "../../assets/building_relationships.png";
import professionalJourney from "../../assets/professional_journey.png";


/* =========================================================
   56 GALLERY IMAGES
========================================================= */

import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img7 from "../../assets/7.jpg";
import img8 from "../../assets/8.jpg";
import img9 from "../../assets/9.jpg";
import img12 from "../../assets/12.jpg";
import img17 from "../../assets/17.jpg";
import img19 from "../../assets/19.jpg";
import img25 from "../../assets/25.jpg";
import img26 from "../../assets/26.jpg";
import img31 from "../../assets/31.jpg";
import img36 from "../../assets/36.jpg";
import img41 from "../../assets/41.jpg";

/* =========================================================
   FEATURED DATA
========================================================= */

const featuredItems = [
  {
    image: professionalExcellence,
    category: "GP ASSOCIATES",
    title: "Professional Excellence",
    size: "large",
  },
  {
    image: clientConversations,
    category: "FINANCIAL PLANNING",
    title: "Client Conversations",
    size: "small",
  },
  {
    image: buildingRelationships,
    category: "CLIENT EXPERIENCE",
    title: "Building Relationships",
    size: "small",
  },
  {
    image: professionalJourney,
    category: "MOMENTS",
    title: "Professional Journey",
    size: "wide",
  },
];


/* =========================================================
   56 IMAGES ARRAY
========================================================= */

const galleryImages = [
  img1,
  img2,
  img7,
  img8,
  img9,
  img12,
  img17,
  img19,
  img25,
  img26,
  img31,
  img36,
  img41,
];


/* =========================================================
   LIGHTBOX ARRAY
========================================================= */

const allImages = [
  ...featuredItems.map(
    (item) => item.image
  ),
  ...galleryImages,
];


function Gallery() {
  const [selectedIndex, setSelectedIndex] =
    useState(null);


  const selectedImage =
    selectedIndex !== null
      ? allImages[selectedIndex]
      : null;


  /* =======================================================
     OPEN
  ======================================================= */

  const openImage = (index) => {
    setSelectedIndex(index);
  };


  /* =======================================================
     CLOSE
  ======================================================= */

  const closeImage = () => {
    setSelectedIndex(null);
  };


  /* =======================================================
     PREVIOUS
  ======================================================= */

  const previousImage = () => {
    setSelectedIndex(
      (current) => {
        if (current === null) {
          return null;
        }

        if (current === 0) {
          return allImages.length - 1;
        }

        return current - 1;
      }
    );
  };


  /* =======================================================
     NEXT
  ======================================================= */

  const nextImage = () => {
    setSelectedIndex(
      (current) => {
        if (current === null) {
          return null;
        }

        if (
          current ===
          allImages.length - 1
        ) {
          return 0;
        }

        return current + 1;
      }
    );
  };


  /* =======================================================
     KEYBOARD
  ======================================================= */

  useEffect(() => {
    if (
      selectedIndex === null
    ) {
      return undefined;
    }


    const handleKeyDown = (
      event
    ) => {
      if (
        event.key === "Escape"
      ) {
        closeImage();
      }

      if (
        event.key === "ArrowLeft"
      ) {
        previousImage();
      }

      if (
        event.key === "ArrowRight"
      ) {
        nextImage();
      }
    };


    document.body.style.overflow =
      "hidden";


    window.addEventListener(
      "keydown",
      handleKeyDown
    );


    return () => {
      document.body.style.overflow =
        "";

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selectedIndex]);


  return (
    <>
      <section
        className="gallery section"
        id="gallery"
      >
        <div className="gallery-container">

          {/* =================================================
              HEADER
          ================================================= */}

          <motion.div
            className="gallery-header"
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

            <div className="gallery-label">
              <span />

              MOMENTS & MILESTONES
            </div>


            <div className="gallery-heading">

              <h2>
                A journey built on

                <em>
                  trust & relationships.
                </em>
              </h2>


              <p>
                Every conversation,
                milestone and relationship
                becomes part of the
                GP Associates journey.
              </p>

            </div>

          </motion.div>


          {/* =================================================
              FEATURED 4 IMAGES
          ================================================= */}

          <div className="featured-gallery">

            {featuredItems.map(
              (item, index) => (
                <motion.article
                  className={`featured-item featured-${item.size}`}
                  key={item.title}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.55,
                    delay:
                      index * 0.07,
                  }}
                  onClick={() =>
                    openImage(index)
                  }
                >

                  <img
                    src={item.image}
                    alt={item.title}
                  />


                  <div className="featured-overlay" />


                  <div className="featured-content">

                    <div>

                      <span>
                        {item.category}
                      </span>

                      <h3>
                        {item.title}
                      </h3>

                    </div>


                    <div className="featured-arrow">

                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.8}
                      />

                    </div>

                  </div>

                </motion.article>
              )
            )}

          </div>


          {/* =================================================
              COLLECTION TITLE
          ================================================= */}

          <motion.div
            className="gallery-collection-header"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <div>

              <span>
                PHOTO COLLECTION
              </span>

              <h3>
                More moments from the journey
              </h3>

            </div>


            <p>
              A collection of professional
              milestones, events and meaningful
              moments from the GP Associates
              journey.
            </p>

          </motion.div>


          {/* =================================================
              PINTEREST / MASONRY GALLERY
          ================================================= */}

          <div className="gallery-masonry">

            {galleryImages.map(
              (image, index) => (
                <motion.button
                  type="button"
                  className="masonry-item"
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.08,
                  }}
                  transition={{
                    duration: 0.4,
                    delay:
                      (index % 8) *
                      0.025,
                  }}
                  onClick={() =>
                    openImage(
                      featuredItems.length +
                        index
                    )
                  }
                  aria-label="Open gallery image"
                >

                  <div className="masonry-image">

                    <img
                      src={image}
                      alt=""
                      loading="lazy"
                    />


                    <div className="masonry-hover">

                      <div className="masonry-view">

                        <Maximize2
                          size={17}
                          strokeWidth={1.8}
                        />

                      </div>

                    </div>

                  </div>

                </motion.button>
              )
            )}

          </div>

        </div>
      </section>


      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      <AnimatePresence>

        {selectedImage && (
          <motion.div
            className="gallery-lightbox"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={closeImage}
          >

            {/* CLOSE */}

            <button
              type="button"
              className="lightbox-close"
              onClick={closeImage}
              aria-label="Close image"
            >
              <X
                size={22}
                strokeWidth={1.7}
              />
            </button>


            {/* PREVIOUS */}

            <button
              type="button"
              className="lightbox-navigation lightbox-previous"
              onClick={(event) => {
                event.stopPropagation();

                previousImage();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft
                size={25}
              />
            </button>


            {/* IMAGE */}

            <motion.div
              className="lightbox-content"
              key={selectedIndex}
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              <img
                src={selectedImage}
                alt=""
              />

            </motion.div>


            {/* NEXT */}

            <button
              type="button"
              className="lightbox-navigation lightbox-next"
              onClick={(event) => {
                event.stopPropagation();

                nextImage();
              }}
              aria-label="Next image"
            >
              <ChevronRight
                size={25}
              />
            </button>

          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}


export default Gallery;