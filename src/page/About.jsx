import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ExperienceCassiaBg from '../assets/images/logo/ExperienceCassia.png';
import BanquetHallBg from '../assets/images/logo/banquet hall.png';

function About() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Consistent padding pattern
  const cardPadding = isMobile ? "25px 15px" : "40px";
  const sectionPadding = isMobile ? "40px 0" : "100px 0";
  const containerPadding = isMobile ? "0 20px" : "0 40px";

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const textReveal = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const sectionStyle = {
    padding: "120px 20px",
    backgroundColor: "#67162e",
    backgroundImage: `url(${ExperienceCassiaBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: "relative",
    width: "100%",
    height: "100vh",
    margin: "0",
    boxSizing: "border-box",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: containerPadding,
    width: "100%",
    boxSizing: "border-box",
  };

  const textCardStyle = {
    padding: cardPadding,
    background: "rgba(244, 226, 180, 0.95)",
    borderRadius: isMobile ? "20px" : "25px",
    border: "1px solid rgba(244, 226, 180, 0.3)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    marginBottom: isMobile ? "15px" : "25px",
  };

  return (
    <>
      <div style={sectionStyle}>
        <div style={containerStyle}>
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            marginBottom: isMobile ? "40px" : "60px",
            textAlign: "center",
          }}
        >
          <motion.div
            variants={fadeInUp}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: isMobile ? "15px" : "30px",
              flexDirection: isMobile ? "column" : "row",
              marginBottom: isMobile ? "30px" : "40px",
            }}
          >
            <motion.span
              variants={textReveal}
              style={{
                fontFamily: "Mondia, sans-serif",
                fontSize: isMobile ? "40px" : "64px",
                color: "#f4e2b4",
                lineHeight: isMobile ? "1.2" : "1.3",
                margin: "0",
                padding: "0",
                textAlign: "center",
                fontWeight: "700",
                letterSpacing: "1px",
              }}
            >
              Experience Cassia
            </motion.span>

            {/* <motion.div
              variants={textReveal}
              style={{
                width: isMobile ? "80px" : "2px",
                height: isMobile ? "2px" : "60px",
                background: isMobile
                  ? "linear-gradient(to right, #f4e2b4 0%, rgba(244, 226, 180, 0.3) 100%)"
                  : "linear-gradient(to bottom, #f4e2b4 0%, rgba(244, 226, 180, 0.3) 100%)",
                margin: "0 auto",
                borderRadius: "2px",
              }}
            /> */}
          </motion.div>

          <motion.p
            variants={textReveal}
            style={{
              fontFamily: "JustSans, sans-serif",
              fontSize: isMobile ? "18px" : "20px",
              lineHeight: isMobile ? "1.7" : "1.8",
              color: "#f4e2b4",
              maxWidth: "900px",
              margin: "0 auto",
              textAlign: "center",
              fontWeight: "400",
              letterSpacing: "0.3px",
              opacity: 0.95,
            }}
          >
            Our premium restaurant experience with our selected menu of 120
            well-curated dishes takes your culinary experience to the next level
            with an elevated dine-in experience for up to 100 people at a time,
            serving multiple cuisines like Indian, Arab, and Chinese.
          </motion.p>
        </motion.div>
        {/* Cuisines Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            marginTop: isMobile ? "40px" : "60px",
            marginBottom: isMobile ? "40px" : "60px",
          }}
        >
          <motion.div
            variants={fadeInUp}
            style={{
              textAlign: "center",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            <h3
              style={{
                fontFamily: "Mondia, serif",
                fontSize: isMobile ? "28px" : "36px",
                marginBottom: isMobile ? "40px" : "50px",
                color: "#f4e2b4",
                textAlign: "center",
                fontWeight: "600",
                letterSpacing: "0.5px",
              }}
            >
              Our Cuisines
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                gap: isMobile ? "25px" : "30px",
                alignItems: "stretch",
              }}
            >
              {/* Arabic Cuisine Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                style={{
                  background: "rgba(244, 226, 180, 0.95)",
                  borderRadius: "20px",
                  padding: isMobile ? "30px 20px" : "40px 30px",
                  textAlign: "center",
                  border: "1px solid rgba(244, 226, 180, 0.3)",
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(10px)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Card Background Pattern */}
                <div
                  style={{
                    position: "absolute",
                    top: "-50%",
                    right: "-50%",
                    width: "100%",
                    height: "100%",
                    background:
                      "radial-gradient(circle, rgba(103, 22, 46, 0.05) 0%, transparent 70%)",
                    borderRadius: "50%",
                  }}
                />

                <h4
                  style={{
                    fontFamily: "Mondia, serif",
                    fontSize: isMobile ? "20px" : "24px",
                    color: "#67162e",
                    margin: "0",
                    fontWeight: "600",
                    letterSpacing: "0.5px",
                    position: "relative",
                    zIndex: 2,
                    textAlign: "center",
                  }}
                >
                  Arabic Cuisine
                </h4>
              </motion.div>

              {/* Indian & South-Indian Cuisine Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                style={{
                  background: "rgba(244, 226, 180, 0.95)",
                  borderRadius: "20px",
                  padding: isMobile ? "30px 20px" : "40px 30px",
                  textAlign: "center",
                  border: "1px solid rgba(244, 226, 180, 0.3)",
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(10px)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Card Background Pattern */}
                <div
                  style={{
                    position: "absolute",
                    top: "-50%",
                    right: "-50%",
                    width: "100%",
                    height: "100%",
                    background:
                      "radial-gradient(circle, rgba(103, 22, 46, 0.05) 0%, transparent 70%)",
                    borderRadius: "50%",
                  }}
                />

                <h4
                  style={{
                    fontFamily: "Mondia, serif",
                    fontSize: isMobile ? "20px" : "24px",
                    color: "#67162e",
                    margin: "0",
                    fontWeight: "600",
                    letterSpacing: "0.5px",
                    position: "relative",
                    zIndex: 2,
                    textAlign: "center",
                  }}
                >
                  Indian & South-Indian Cuisine
                </h4>
              </motion.div>

              {/* Chinese Cuisine Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                style={{
                  background: "rgba(244, 226, 180, 0.95)",
                  borderRadius: "20px",
                  padding: isMobile ? "30px 20px" : "40px 30px",
                  textAlign: "center",
                  border: "1px solid rgba(244, 226, 180, 0.3)",
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(10px)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Card Background Pattern */}
                <div
                  style={{
                    position: "absolute",
                    top: "-50%",
                    right: "-50%",
                    width: "100%",
                    height: "100%",
                    background:
                      "radial-gradient(circle, rgba(103, 22, 46, 0.05) 0%, transparent 70%)",
                    borderRadius: "50%",
                  }}
                />

                <h4
                  style={{
                    fontFamily: "Mondia, serif",
                    fontSize: isMobile ? "20px" : "24px",
                    color: "#67162e",
                    margin: "0",
                    fontWeight: "600",
                    letterSpacing: "0.5px",
                    position: "relative",
                    zIndex: 2,
                    textAlign: "center",
                  }}
                >
                  Chinese Cuisine
                </h4>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        </div>
      </div>

      {/* Separate Banquet Hall Section */}
    <div style={{
      padding: "1px 0px 90px",
      background: "linear-gradient(135deg, #67162e 0%, #8b1e3a 20%, #67162e 100%)",
      position: "relative",
      width: "100%",
      margin: "0",
      boxSizing: "border-box",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: isMobile ? "0 20px" : "0 40px",
        width: "100%",
        boxSizing: "border-box",
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            gap: isMobile ? "20px" : "30px",
            marginTop: isMobile ? "40px" : "60px",
          }}
        >
          {/* Left Side - Title, Image and Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              flex: 1,
              textAlign: isMobile ? "center" : "left",
            }}
          >
            <h3
              style={{
                fontFamily: "Mondia, serif",
                fontSize: isMobile ? "28px" : "36px",
                marginBottom: "20px",
                color: "#f4e2b4",
                lineHeight: "1.2",
              }}
            >
              Our Banquet Hall
            </h3>
            
            {/* Banquet Hall Image */}
            <div style={{
              position: "relative",
              marginBottom: "30px",
              borderRadius: "15px",
              overflow: "hidden",
              width: "100%",
              margin: "0 0 30px 0"
            }}>
              <img 
                src={BanquetHallBg} 
                alt="Our Banquet Hall" 
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  display: "block"
                }}
              />
              {/* Fade gradient overlay */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(135deg, rgba(103, 22, 46, 0.4) 0%, rgba(139, 30, 58, 0.3) 50%, rgba(103, 22, 46, 0.5) 100%)",
                pointerEvents: "none"
              }} />
            </div>
            
            <p
              style={{
                fontFamily: "JustSans, sans-serif",
                fontSize: isMobile ? "16px" : "18px",
                lineHeight: "1.6",
                color: "#f4e2b4",
                margin: "0",
                opacity: 0.9,
              }}
            >
              Host your special moments in our elegant indoor banquet hall,
              designed to accommodate 100+ guests in a sophisticated and
              immersive environment. We offer customizable food options to
              perfectly match your event's vision.
            </p>
          </motion.div>

          {/* Right Side - Event Types */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: isMobile ? "25px" : "35px",
              alignItems: isMobile ? "center" : "flex-end",
              paddingTop: isMobile ? "10px" : "20px",
            }}
          >
            {[
              "Corporate Events",
              "Family Gatherings",
              "Celebratory Parties",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, x: 30 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.6 + index * 0.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 12
                }}
                whileHover={{
                  scale: 1.05,
                  x: -10,
                  transition: { duration: 0.3 }
                }}
                style={{
                  textAlign: isMobile ? "center" : "right",
                  position: "relative",
                  cursor: "pointer",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                }}
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.3 }}
                  whileHover={{
                    color: "#ffffff",
                    transition: { duration: 0.2 }
                  }}
                  style={{
                    fontFamily: "Mondia, serif",
                    fontSize: isMobile ? "20px" : "22px",
                    color: "#f4e2b4",
                    margin: "0",
                    fontWeight: "500",
                    letterSpacing: "0.5px",
                    lineHeight: "1.3",
                    transition: "color 0.3s ease",
                  }}
                >
                  {item}
                </motion.p>
                {index < 2 && (
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: isMobile ? "80px" : "100px" }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 1.0 + index * 0.3,
                      ease: "easeOut"
                    }}
                    style={{
                      height: "1px",
                      background:
                        "linear-gradient(to right, #f4e2b4 0%, rgba(244, 226, 180, 0.3) 100%)",
                      margin: isMobile ? "15px auto 0 auto" : "15px 0 0 auto",
                      borderRadius: "1px",
                    }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Wave Effect */}
      <div
        style={{
          position: "absolute",
          bottom: isMobile ? "-20px" : "-40px",
          left: 0,
          right: 0,
          height: isMobile ? "60px" : "120px",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "100%",
            background: "#67162e",
            clipPath:
              "polygon(0 100%, 100% 100%, 100% 40%, 75% 60%, 50% 40%, 25% 60%, 0 40%)",
            opacity: isMobile ? 0.08 : 0.1,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: 0,
            right: 0,
            height: "100%",
            background: "#67162e",
            clipPath:
              "polygon(0 100%, 100% 100%, 100% 45%, 85% 65%, 60% 45%, 35% 65%, 0 45%)",
            opacity: isMobile ? 0.12 : 0.15,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: 0,
            right: 0,
            height: "100%",
            background: "#67162e",
            clipPath:
              "polygon(0 100%, 100% 100%, 100% 50%, 70% 70%, 40% 50%, 15% 70%, 0 50%)",
            opacity: isMobile ? 0.15 : 0.2,
          }}
        />
      </div>
    </div>
    </>
  );
}

export default About;
