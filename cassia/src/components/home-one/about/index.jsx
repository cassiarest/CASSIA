import Video from "./Video";
import Star2Img from "../../../assets/images/v1/star2.png";
import AboutCounter from "./AboutCounter";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
		window.addEventListener('resize', checkScreenSize);
		return () => window.removeEventListener('resize', checkScreenSize);
	}, []);

	const sectionStyle = {
		padding: isMobile ? "40px 0" : "100px 0",
		background: "linear-gradient(135deg, #ffffff 0%, #fffbe6 100%)",
		position: "relative",
		width: "100%",
		margin: "0",
		boxSizing: "border-box"
	};

	const containerStyle = {
		maxWidth: "1200px",
		margin: "0 auto",
		padding: isMobile ? "0 20px" : "0 40px",
		width: "100%",
		boxSizing: "border-box"
	};

	const gridStyle = {
		display: "grid",
		gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "1fr 1fr 1fr",
		gap: isMobile ? "30px" : "40px",
		alignItems: "stretch"
	};

	const missionCardStyle = {
		background: "#67162e",
		borderRadius: isMobile ? "25px" : "30px",
		padding: isMobile ? "25px 15px" : "40px",
		boxShadow: "0 20px 40px rgba(103, 22, 46, 0.1)",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center"
	};

	const visionCardStyle = {
		background: "#fffbe6",
		borderRadius: isMobile ? "25px" : "30px",
		padding: isMobile ? "25px 15px" : "40px",
		boxShadow: "0 20px 40px rgba(103, 22, 46, 0.1)",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center"
	};

	const counterCardStyle = {
		// background: "#f4e2b4",
		borderRadius: isMobile ? "25px" : "30px",
		padding: isMobile ? "25px 15px" : "40px",
		// boxShadow: "0 20px 40px rgba(103, 22, 46, 0.1)",
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	};

	const missionTitleStyle = {
		color: "#f4e2b4",
		fontFamily: "Mondia, serif",
		fontSize: isMobile ? "28px" : "36px",
		marginBottom: "20px",
		margin: "0 0 20px 0",
		padding: "0",
		textAlign: isMobile ? "center" : "left",
		fontWeight: "400"
	};

	const visionTitleStyle = {
		color: "#67162e",
		fontFamily: "Mondia, serif",
		fontSize: isMobile ? "28px" : "36px",
		marginBottom: "20px",
		margin: "0 0 20px 0",
		padding: "0",
		textAlign: isMobile ? "center" : "left",
		fontWeight: "400"
	};

	const missionTextStyle = {
		color: "#fffbe6",
		fontFamily: "JustSans, sans-serif",
		fontSize: isMobile ? "16px" : "18px",
		lineHeight: isMobile ? "1.6" : "1.8",
		margin: "0",
		padding: "0",
		textAlign: isMobile ? "center" : "left"
	};

	const visionTextStyle = {
		color: "#67162e",
		fontFamily: "JustSans, sans-serif",
		fontSize: isMobile ? "16px" : "18px",
		lineHeight: isMobile ? "1.6" : "1.8",
		margin: "0",
		padding: "0",
		textAlign: isMobile ? "center" : "left"
	};

	return (
		<div style={sectionStyle}>
			<div style={containerStyle}>
				<div style={gridStyle}>
					{/* Mission Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						style={{
							...missionCardStyle,
							alignItems: "flex-start",
							justifyContent: "flex-start",
							paddingTop: "40px"
						}}
					>
						<h2 style={{
							...missionTitleStyle,
							textAlign: "left"
						}}>
							Our Mission
						</h2>
						<p style={{
							...missionTextStyle,
							textAlign: "left"
						}}>
							At Cassia, our mission is simple—serve great food, made with care, in a way that makes every event feel special. We focus on quality, hygiene, and flavor while staying true to our roots and always putting our clients first.
						</p>
					</motion.div>

					{/* Vision Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						style={{
							...visionCardStyle,
							alignItems: "flex-start",
							justifyContent: "flex-start",
							paddingTop: "40px"
						}}
					>
						<h2 style={{
							...visionTitleStyle,
							textAlign: "left"
						}}>
							Our Vision
						</h2>
						<p style={{
							...visionTextStyle,
							textAlign: "left"
						}}>
							To be the UAE's most trusted name in large-scale catering—where tradition, quality, and innovation meet to create unforgettable food experiences for every occasion.
						</p>
					</motion.div>

					{/* Counter Section */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
						style={counterCardStyle}
					>
						<AboutCounter />
					</motion.div>
				</div>
			</div>
		</div>
	);
}

export default About;
