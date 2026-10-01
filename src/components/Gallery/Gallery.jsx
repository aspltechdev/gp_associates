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
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpg";
import img8 from "../../assets/8.jpg";
import img9 from "../../assets/9.jpg";
// import img10 from "../../assets/10.jpg";

import img11 from "../../assets/11.jpg";
// import img12 from "../../assets/12.jpg";
// import img13 from "../../assets/13.jpg";
// import img14 from "../../assets/14.jpg";
// import img15 from "../../assets/15.jpg";
import img16 from "../../assets/16.jpg";
import img17 from "../../assets/17.jpg";
// import img18 from "../../assets/18.jpg";
import img19 from "../../assets/19.jpg";
// import img20 from "../../assets/20.jpg";

// import img21 from "../../assets/21.jpg";
// import img22 from "../../assets/22.jpg";
// import img23 from "../../assets/23.jpg";
// import img24 from "../../assets/24.jpg";
import img25 from "../../assets/25.jpg";
import img26 from "../../assets/26.jpg";
// import img27 from "../../assets/27.jpg";
// import img28 from "../../assets/28.jpg";
// import img29 from "../../assets/29.jpg";
// import img30 from "../../assets/30.jpg";

import img31 from "../../assets/31.jpg";
// import img32 from "../../assets/32.jpg";
// import img33 from "../../assets/33.jpg";
import img34 from "../../assets/34.jpg";
// import img35 from "../../assets/35.jpg";
import img36 from "../../assets/36.jpg";
// import img37 from "../../assets/37.jpg";
import img38 from "../../assets/38.jpg";
// import img39 from "../../assets/39.jpg";
// import img40 from "../../assets/40.jpg";

import img41 from "../../assets/41.jpg";
import img42 from "../../assets/42.jpg";
import img43 from "../../assets/43.jpg";
import img44 from "../../assets/44.jpg";
// import img45 from "../../assets/45.jpg";
// import img46 from "../../assets/46.jpg";
// import img47 from "../../assets/47.jpg";
// import img48 from "../../assets/48.jpg";
// import img49 from "../../assets/49.jpg";
// import img50 from "../../assets/50.jpg";

// import img51 from "../../assets/51.jpg";
// import img52 from "../../assets/52.jpg";
// import img53 from "../../assets/53.jpg";
// import img54 from "../../assets/54.jpg";
// import img55 from "../../assets/55.jpg";
// import img56 from "../../assets/56.jpg";


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
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img17,
  img19,
  img25,
  img26,
  img31,
  img34,
  img36,
  img38,
  img41,
  img42,
  img43,
  img44,
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