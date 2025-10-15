import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import Shape2Img from "../../../assets/images/v4/shape2.png";
import Thumb1Img from "../../../assets/images/v4/alwaleem.jpg";
import walaem from "../../../assets/images/v4/walaem.png";

function WhyChooseUs() {
	const [isMobile, setIsMobile] = useState(false);
	const [isTablet, setIsTablet] = useState(false);

	useEffect(() => {
		const checkScreenSize = () => {
			const width = window.innerWidth;
			setIsMobile(width <= 768);
			setIsTablet(width > 768 && width <= 1024);
		};

		checkScreenSize();
		window.addEventListener('resize', checkScreenSize);
		return () => window.removeEventListener('resize', checkScreenSize);
	}, []);

	// Consistent padding pattern with mission/vision cards
	const cardPadding = isMobile ? "25px 15px" : "40px";
	const sectionPadding = isMobile ? "40px 0" : "100px 0";
	const containerPadding = isMobile ? "0 16px" : "0 40px";

	const fadeInUp = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 }
	};

	const textReveal = {
		hidden: { opacity: 0, y: 10 },
		visible: { opacity: 1, y: 0 }
	};

	const sectionStyle = {
		padding: sectionPadding,
		backgroundColor: "#ffffff",
		position: "relative",
		width: "100%",
		margin: "0",
		boxSizing: "border-box"
	};

	const containerStyle = {
		maxWidth: "1200px",
		margin: "0 auto",
		padding: containerPadding,
		width: "100%",
		boxSizing: "border-box"
	};

	const gridStyle = {
		display: "grid",
		gridTemplateColumns: isMobile ? "1fr" : "1fr 1.2fr",
		gap: isMobile ? "20px" : "40px",
		alignItems: "center"
	};

	const imageCardStyle = {
		position: "relative",
		borderRadius: isMobile ? "8px" : "12px",
		backgroundColor: "rgb(255, 251, 230)",
		padding: isMobile ? "20px 16px" : cardPadding,
		boxShadow: "0 20px 40px rgba(103, 22, 46, 0.1)",
		margin: "0",
		order: isMobile ? 2 : 1
	};

	const contentSectionStyle = {
		textAlign: "center",
		padding: "0",
		order: isMobile ? 1 : 2
	};

	const textCardStyle = {
		padding: cardPadding,
		background: "rgba(103, 22, 46, 0.03)",
		borderRadius: isMobile ? "12px" : "20px",
		border: "1px solid rgba(103, 22, 46, 0.05)",
		boxShadow: "0 10px 30px rgba(103, 22, 46, 0.03)",
		marginBottom: isMobile ? "12px" : "25px"
	};

	return (
		<div style={sectionStyle}>
			<div style={containerStyle}>
				<div style={gridStyle}>
					{/* Image Card */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						style={imageCardStyle}
					>
						<div style={{
							display: "flex",
							flexDirection: "column",
							gap: "20px"
						}}>
							<img 
								src={Thumb1Img} 
								alt="Al Walaem Restaurant History" 
								style={{
									width: "100%",
									height: "auto",
									display: "block",
									borderRadius: isMobile ? "20px" : "20px",
									marginBottom: "15px"
								}}
							/>
							<div style={{
								fontFamily: "JustSans, sans-serif",
								fontSize: isMobile ? "15px" : "16px",
								lineHeight: "1.6",
								color: "#67162e",
								textAlign: "left"
							}}>
								<h3 style={{
									fontFamily: "Mondia, serif",
								fontSize: isMobile ? "22px" : "24px",
									marginBottom: "15px",
									margin: "0 0 15px 0",
									color: "#67162e"
								}}>A Legacy of Fine Dining</h3>
								<p style={{
									marginBottom: "10px",
									margin: "0 0 10px 0",
									padding: "0"
								}}>
									Since 1985, Al Walaem has been a cornerstone of authentic Middle Eastern cuisine in the region. What began as a small family restaurant has evolved into a culinary institution, preserving traditional recipes while embracing modern gastronomy.
								</p>
							</div>
						</div>
					</motion.div>

					{/* Content Section */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ margin: "-100px" }}
						style={contentSectionStyle}
					>
						{/* Header */}
						<motion.div 
							variants={fadeInUp}
							style={{ 
								marginBottom: isMobile ? "30px" : "40px",
								textAlign: "center"
							}}
						>
							<div style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							gap: isMobile ? "12px" : "30px",
								flexDirection: isMobile ? "column" : "row",
								textAlign: "left"
							}}>
								<motion.span 
									variants={textReveal}
									custom={0}
									style={{
										fontFamily: "Mondia, sans-serif",
								fontSize: isMobile ? "32px" : "60px",
										color: "#67162e",
										textAlign: "center",
										lineHeight: isMobile ? "1.2" : "1.3",
										margin: "0",
										padding: "0",
										textAlign: "left"
									}}
								>
									Our Legacy
									<p style={{textAlign: "left"}}>Inspired and passed down from Al-Waleam</p>
								</motion.span>

								<motion.div 
									variants={textReveal}
									custom={1}
									style={{
										width: isMobile ? "80px" : "2px",
										height: isMobile ? "2px" : "60px",
										background: isMobile 
											? "linear-gradient(to right, #67162e 0%, rgba(103, 22, 46, 0.3) 100%)"
											: "linear-gradient(to bottom, #67162e 0%, rgba(103, 22, 46, 0.3) 100%)",
										margin: "0 auto",
										borderRadius: "2px"
									}}
								/>

								<motion.img 
									variants={textReveal}
									custom={2}
									src={walaem} 
									alt="Al Walaem Restaurant" 
									style={{
										width: isMobile ? "150px" : "200px",
										height: "auto",
										filter: "drop-shadow(0 4px 8px rgba(103, 22, 46, 0.15))"
									}} 
								/>
							</div>
						</motion.div>
						
						{/* Text Content */}
						<div style={{
							fontFamily: "JustSans, sans-serif",
							fontSize: isMobile ? "16px" : "18px",
							lineHeight: isMobile ? "1.6" : "1.8",
							color: "#67162e",
							textAlign: "center",
							maxWidth: "800px",
							margin: "0 auto"
						}}>
							<motion.p 
								variants={textReveal}
								custom={3}
								style={textCardStyle}
							>
								With a culinary legacy that stretches back over <span style={{
									fontWeight: "600",
									color: "#67162e",
									borderBottom: "2px solid rgba(103, 22, 46, 0.3)"
								}}>30 years</span>, our team has served thousands of guests—from family gatherings to large corporate and institutional events.
							</motion.p>
							
							<motion.p 
								variants={textReveal}
								custom={4}
								style={textCardStyle}
							>
								Built on the trusted foundation of <span style={{
									fontWeight: "600",
									color: "#67162e",
									borderBottom: "2px solid rgba(103, 22, 46, 0.3)"
								}}>Al Walaem Restaurant</span>, a beloved name in Ras Al Khaimah since 1994, Cassia is led by seasoned professionals who understand what it takes to deliver consistently excellent food and flawless service.
							</motion.p>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Wave Effect */}
			<div style={{
				position: "absolute",
				bottom: isMobile ? "-20px" : "-40px",
				left: 0,
				right: 0,
				height: isMobile ? "60px" : "120px",
				overflow: "hidden",
				zIndex: 1
			}}>
				<div style={{
					position: "absolute",
					bottom: 0,
					left: 0,
					right: 0,
					height: "100%",
					background: "#67162e",
					clipPath: "polygon(0 100%, 100% 100%, 100% 40%, 75% 60%, 50% 40%, 25% 60%, 0 40%)",
					opacity: isMobile ? 0.08 : 0.1
				}}/>
				<div style={{
					position: "absolute",
					bottom: "10px",
					left: 0,
					right: 0,
					height: "100%",
					background: "#67162e",
					clipPath: "polygon(0 100%, 100% 100%, 100% 45%, 85% 65%, 60% 45%, 35% 65%, 0 45%)",
					opacity: isMobile ? 0.12 : 0.15
				}}/>
				<div style={{
					position: "absolute",
					bottom: "20px",
					left: 0,
					right: 0,
					height: "100%",
					background: "#67162e",
					clipPath: "polygon(0 100%, 100% 100%, 100% 50%, 70% 70%, 40% 50%, 15% 70%, 0 50%)",
					opacity: isMobile ? 0.15 : 0.2
				}}/>
			</div>
		</div>
	);
}

export default WhyChooseUs;
