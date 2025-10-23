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

	const rightColumnWidth = isMobile ? "100%" : "560px";

	const gridStyle = {
		display: "grid",
		gridTemplateColumns: isMobile ? "1fr" : `1fr ${rightColumnWidth}`,
		gap: isMobile ? "30px" : "40px",
		alignItems: "stretch"
	};

	const missionCardStyle = {
		background: "#67162e",
		borderRadius: isMobile ? "25px" : "30px",
		padding: isMobile ? "25px 15px" : "40px",
		boxShadow: "0 20px 40px rgba(103, 22, 46, 0.1)",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center"
	};

	const visionCardStyle = {
		background: "#fffbe6",
		borderRadius: isMobile ? "25px" : "30px",
		padding: isMobile ? "25px 15px" : "40px",
		boxShadow: "0 20px 40px rgba(103, 22, 46, 0.1)",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center"
	};

	const counterCardStyle = {
		// background: "#f4e2b4",
		borderRadius: isMobile ? "25px" : "30px",
		// padding removed
		// boxShadow: "0 20px 40px rgba(103, 22, 46, 0.1)",
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	};

	const missionTitleStyle = {
		color: "#f4e2b4",
		fontFamily: "Mondia, serif",
		fontSize: isMobile ? "29px" : "37px",
		marginBottom: "20px",
		margin: "0 0 20px 0",
		padding: "0",
		textAlign: "center",
		fontWeight: "400"
	};

	const visionTitleStyle = {
		color: "#67162e",
		fontFamily: "Mondia, serif",
		fontSize: isMobile ? "29px" : "37px",
		marginBottom: "20px",
		margin: "0 0 20px 0",
		padding: "0",
		textAlign: "center",
		fontWeight: "400"
	};

	const missionTextStyle = {
		color: "#fffbe6",
		fontFamily: "JustSans, sans-serif",
		fontSize: isMobile ? "15px" : "17px",
		lineHeight: isMobile ? "1.6" : "1.8",
		margin: "0",
		padding: "0",
		textAlign: "left"
	};

	const visionTextStyle = {
		color: "#67162e",
		fontFamily: "JustSans, sans-serif",
		fontSize: isMobile ? "15px" : "17px",
		lineHeight: isMobile ? "1.6" : "1.8",
		margin: "0",
		padding: "0",
		textAlign: "left"
	};

	return (
		<div style={sectionStyle}>
			<div style={containerStyle}>
				<div style={gridStyle}>
					{/* Stacked Mission and Vision (no forced column; can appear left) */}
					<div style={{ width: rightColumnWidth, justifySelf: isMobile ? "stretch" : "start" }}>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							style={{
								...missionCardStyle,
								alignItems: "flex-start",
								justifyContent: "flex-start",
								paddingTop: "40px",
								marginBottom: isMobile ? "20px" : "24px"
							}}
						>
							<h2 style={{
								...missionTitleStyle
							}}>
								Our Mission 
							</h2>
							<p style={{
								...missionTextStyle
							}}>
								At Cassia, our mission is simple—serve great food, made with care, in a way that makes every event feel special. We focus on quality, hygiene, and flavor while staying true to our roots and always putting our clients first.
							</p>
						</motion.div>

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
								...visionTitleStyle
							}}>
								Our Vision
							</h2>
							<p style={{
								...visionTextStyle
							}}>
								To be the UAE's most trusted name in large-scale catering—where tradition, quality, and innovation meet to create unforgettable food experiences for every occasion.
							</p>
						</motion.div>
					</div>

					{/* Counter on right (landscape), below on mobile */}
					<div style={{ ...counterCardStyle, gridColumn: isMobile ? "auto" : "2 / 3" }}>
						<AboutCounter />
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
