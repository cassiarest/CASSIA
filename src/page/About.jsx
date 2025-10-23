import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ExperienceCassiaBg from '../assets/images/logo/Experience cassia.png';
import BanquetHallBg from '../assets/images/logo/banquet hall.png';

function About() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsSmallMobile(width <= 480);
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const scrolled = scrollTop > 100;
      setIsScrolled(scrolled);
    };

    checkScreenSize();
    handleScroll(); // Check initial scroll position

    // Add scroll listeners to multiple elements for better compatibility
    window.addEventListener("resize", checkScreenSize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });
    document.body.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
      document.body.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Consistent padding pattern
  const cardPadding = isSmallMobile ? "10px 8px" : isMobile ? "15px 10px" : "40px";
  const sectionPadding = isSmallMobile ? "80px 0" : isMobile ? "100px 0" : "100px 0";
  const containerPadding = isSmallMobile ? "0 8px" : isMobile ? "0 10px" : isTablet ? "0 20px" : "0 40px";

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const textReveal = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const sectionStyle = {
    padding: sectionPadding,
    backgroundColor: "#67162e",
    backgroundImage: `url(${ExperienceCassiaBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: "relative",
    width: "100%",
    height: isSmallMobile ? "auto" : isMobile ? "100vh" : "100vh",
    minHeight: isSmallMobile ? "100vh" : "100vh",
    margin: "0",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    borderRadius: isSmallMobile ? "15px" : isMobile ? "20px" : "25px",
    border: "1px solid rgba(244, 226, 180, 0.3)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    marginBottom: isSmallMobile ? "10px" : isMobile ? "15px" : "25px",
  };

  const goToMenu = () => {
    // Force page refresh to reset all state
    window.location.href = '/Menu';
  };

  return (
    <>
      <div style={sectionStyle}>
        <div style={containerStyle}>
        {/* Header Section */}
        <div style={{
          marginBottom: isSmallMobile ? "20px" : isMobile ? "30px" : "54px",
          marginTop: isSmallMobile ? "150px" : isMobile ? "200px" : "255px",
          textAlign: "center"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: isSmallMobile ? "10px" : isMobile ? "15px" : "30px",
            flexDirection: isMobile ? "column" : "row",
            marginBottom: "10px",
            opacity: 1,
            transform: "none"
          }}>
            <span style={{
              fontFamily: "Mondia, sans-serif",
              fontSize: isSmallMobile ? "32px" : isMobile ? "40px" : "64px",
              color: "rgb(244, 226, 180)",
              lineHeight: isSmallMobile ? "1.1" : isMobile ? "1.2" : "1.3",
              margin: "0px",
              padding: "0px",
              textAlign: "center",
              fontWeight: "500",
              letterSpacing: isSmallMobile ? "1px" : "2px",
              opacity: 1,
              transform: "none"
            }}>
              Experience Cassia
            </span>
          </div>
          <p style={{
            fontFamily: "Mondia, sans-serif",
            fontSize: isSmallMobile ? "14px" : isMobile ? "13px" : "17px",
            lineHeight: isSmallMobile ? "1.4" : isMobile ? "1.5" : "1.7",
            color: "rgb(244, 226, 180)",
            maxWidth: "77%",
            margin: "0px auto",
            textAlign: "center",
            fontWeight: "400",
            letterSpacing: "0.3px",
            opacity: 1,
            transform: "none",
            padding: 0,
            // 4-line clamp without -webkit on mobile
            overflow: isMobile ? "hidden" : "visible",
            maxHeight: isSmallMobile ? `${1.4 * 4}em` : isMobile ? `${1.5 * 4}em` : "none",
            wordBreak: "break-word",
            hyphens: "auto"
          }}>
            Our premium restaurant experience with our selected menu of 120 well-curated dishes takes your culinary experience to the next level with an elevated dine-in experience for up to 100 people at a time, serving multiple cuisines like Indian, Arab, and Chinese.
          </p>
        </div>
        
        {/* Cuisines Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            marginTop: isSmallMobile ? "15px" : isMobile ? "20px" : "60px",
            marginBottom: isSmallMobile ? "15px" : isMobile ? "20px" : "60px",
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
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: isSmallMobile ? "25px" : isMobile ? "30px" : isTablet ? "70px" : "320px",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "nowrap",
              }}
            >
              {/* Arabic Cuisine */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: isMobile ? "center" : "flex-start",
                  justifyContent: "center",
                  minHeight: "60px",
                }}
              >
                <p
                  style={{
                    fontFamily: "Mondia, sans-serif",
                    fontSize: isSmallMobile ? "12px" : isMobile ? "14px" : "18px",
                    color: "#f4e2b4",
                    margin: "0",
                    fontWeight: "400",
                    letterSpacing: "0.3px",
                    textAlign: "center",
                    lineHeight: isSmallMobile ? "1.5" : isMobile ? "1.6" : "1.8",
                    opacity: 0.95,
                  }}
                >
                  Arabic Cuisine
                </p>
              </motion.div>

              {/* Indian & South-Indian Cuisine */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: isMobile ? "center" : "flex-start",
                  justifyContent: "center",
                  minHeight: "60px",
                }}
              >
                <p
                  style={{
                    fontFamily: "Mondia, sans-serif",
                    fontSize: isSmallMobile ? "12px" : isMobile ? "14px" : "18px",
                    color: "#f4e2b4",
                    margin: "0",
                    fontWeight: "400",
                    letterSpacing: "0.3px",
                    textAlign: "center",
                    lineHeight: isSmallMobile ? "1.5" : isMobile ? "1.6" : "1.8",
                    opacity: 0.95,
                  }}
                >
                  Indian & South-<br />Indian Cuisine
                </p>
              </motion.div>

              {/* Chinese Cuisine */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: isMobile ? "center" : "flex-start",
                  justifyContent: "center",
                  minHeight: "60px",
                }}
              >
                <p
                  style={{
                    fontFamily: "Mondia, sans-serif",
                    fontSize: isSmallMobile ? "12px" : isMobile ? "14px" : "18px",
                    color: "#f4e2b4",
                    margin: "0",
                    fontWeight: "400",
                    letterSpacing: "0.3px",
                    textAlign: "center",
                    lineHeight: isSmallMobile ? "1.5" : isMobile ? "1.6" : "1.8",
                    opacity: 0.95,
                  }}
                >
                  Chinese Cuisine
                </p>
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
        padding: isSmallMobile ? "0 8px" : isMobile ? "0 10px" : isTablet ? "0 20px" : "0 40px",
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
            gap: isSmallMobile ? "15px" : isMobile ? "20px" : "30px",
            marginTop: isSmallMobile ? "30px" : isMobile ? "40px" : "60px",
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
                fontSize: isSmallMobile ? "24px" : isMobile ? "28px" : "42px",
                marginTop: isSmallMobile ? "20px" : isMobile ? "25px" : "30px",
                marginBottom: isSmallMobile ? "20px" : isMobile ? "25px" : "30px",
                color: "#f4e2b4",
                lineHeight: "1.2",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              Our Banquet Hall
            </h3>
            
            {/* Banquet Hall Image */}
            <div style={{
              position: "relative",
              marginBottom: isSmallMobile ? "15px" : isMobile ? "20px" : "30px",
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
                  height: isSmallMobile ? "180px" : isMobile ? "200px" : "300px",
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
                fontSize: isSmallMobile ? "12px" : isMobile ? "13px" : "18px",
                lineHeight: isSmallMobile ? "1.5" : isMobile ? "1.6" : "1.7",
                color: "#f4e2b4",
                margin: 0,
                opacity: 0.95,
                textAlign: isMobile ? "center" : "left",
                maxWidth: "99%",
                // 4-line clamp without -webkit on mobile
                overflow: isMobile ? "hidden" : "visible",
                maxHeight: isSmallMobile ? `${1.5 * 4}em` : isMobile ? `${1.6 * 4}em` : "none",
                wordBreak: "break-word",
                hyphens: "auto"
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
              gap: isSmallMobile ? "20px" : isMobile ? "25px" : "35px",
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
                    fontSize: isSmallMobile ? "18px" : isMobile ? "20px" : "22px",
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
                    whileInView={{ width: isSmallMobile ? "60px" : isMobile ? "80px" : "100px" }}
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
                      margin: isSmallMobile ? "12px auto 0 auto" : isMobile ? "15px auto 0 auto" : "15px 0 0 auto",
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
          bottom: isSmallMobile ? "-15px" : isMobile ? "-20px" : "-40px",
          left: 0,
          right: 0,
          height: isSmallMobile ? "50px" : isMobile ? "60px" : "120px",
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
            opacity: isSmallMobile ? 0.06 : isMobile ? 0.08 : 0.1,
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
            opacity: isSmallMobile ? 0.10 : isMobile ? 0.12 : 0.15,
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
            opacity: isSmallMobile ? 0.12 : isMobile ? 0.15 : 0.2,
          }}
        />
      </div>
    </div>
    </>
  );
}

export default About;
