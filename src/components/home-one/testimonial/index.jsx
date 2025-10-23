import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { useState, useEffect } from "react";

const testimonialsData = [
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Exceptional Catering Service",
		description:
			"We were moving from our long-time caterers to Cassia Restaurant and Catering services, as an HR, these are long due steps. Over the course of two months, all hiccups were eliminated and now our employees’ food options are running smoothly.",
		author: "Nauman Khan",
		designation: "Cladtec Ras al Khaimah HR",
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Perfect Wedding Reception",
		description:
			"Cassia has been able to handle our large staff efficiently. Employees of all nationalities can choose the food they prefer. I also appreciate how they introduce a new menu every 30 days.",
		author: "Imran Yousef",
		designation: "Asst. Administration Manager, Mabani Steel	",
	}
];

function Testimonial() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		checkScreenSize();
		window.addEventListener('resize', checkScreenSize);
		return () => window.removeEventListener('resize', checkScreenSize);
	}, []);

	const sectionVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3
			}
		}
	};

	const sectionStyle = {
		padding: isMobile ? "40px 0" : "120px 0 60px 0",
		backgroundColor: "#fffbe6",
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

	const headerStyle = {
		textAlign: "center",
		marginBottom: isMobile ? "30px" : "60px"
	};

	const subtitleStyle = {
		fontFamily: "JustSans, sans-serif",
		fontSize: isMobile ? "18px" : "20px",
		color: "#67162e",
		opacity: 0.8,
		display: "block",
		marginBottom: isMobile ? "10px" : "15px",
		margin: "0 0 " + (isMobile ? "10px" : "15px") + " 0"
	};

	const titleStyle = {
		fontFamily: "Mondia, serif",
		fontSize: isMobile ? "36px" : "48px",
		color: "#67162e",
		maxWidth: "800px",
		margin: "0 auto",
		position: "relative",
		padding: "0"
	};

	const gridStyle = {
		display: "grid",
		gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
		gap: isMobile ? "20px" : "30px"
	};

	const getCardStyle = (index) => ({
		background: index % 2 === 0 ? "#67162e" : "#ffffff",
		borderRadius: isMobile ? "20px" : "30px",
		padding: isMobile ? "25px 15px" : "40px",
		height: "100%",
		boxShadow: "0 20px 40px rgba(103, 22, 46, 0.1)",
		display: "flex",
		flexDirection: "column"
	});

	const getCardTitleStyle = (index) => ({
		fontFamily: "Mondia, serif",
		fontSize: isMobile ? "24px" : "28px",
		color: index % 2 === 0 ? "#f4e2b4" : "#67162e",
		marginBottom: isMobile ? "15px" : "20px",
		margin: "0 0 " + (isMobile ? "15px" : "20px") + " 0",
		padding: "0"
	});

	const getCardTextStyle = (index) => ({
		fontFamily: "JustSans, sans-serif",
		fontSize: isMobile ? "15px" : "16px",
		lineHeight: "1.8",
		color: index % 2 === 0 ? "#ffffff" : "#67162e",
		opacity: 0.9,
		marginBottom: "30px",
		margin: "0 0 30px 0",
		flex: 1,
		padding: "0"
	});

	const getCardFooterStyle = (index) => ({
		borderTop: `1px solid ${index % 2 === 0 ? 'rgba(244, 226, 180, 0.2)' : 'rgba(103, 22, 46, 0.1)'}`,
		paddingTop: "20px",
		marginTop: "auto"
	});

	const getAuthorStyle = (index) => ({
		fontFamily: "Mondia, serif",
		fontSize: "20px",
		color: index % 2 === 0 ? "#f4e2b4" : "#67162e",
		marginBottom: "5px",
		margin: "0 0 5px 0",
		padding: "0"
	});

	const getDesignationStyle = (index) => ({
		fontFamily: "JustSans, sans-serif",
		fontSize: "14px",
		color: index % 2 === 0 ? "#ffffff" : "#67162e",
		opacity: 0.7,
		margin: "0",
		padding: "0"
	});

	return (
		<div style={sectionStyle}>
			<div style={containerStyle}>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, margin: "-100px" }}
					variants={sectionVariants}
					style={headerStyle}
				>
					<span style={subtitleStyle}>
						Client Testimonials
					</span>
					<h2 style={titleStyle}>
						Creating Memorable Experiences
					</h2>
				</motion.div>

				<div style={gridStyle}>
					{testimonialsData.map((testimonial, index) => (
						<motion.div
							key={testimonial.id}
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: {
									opacity: 1,
									y: 0,
									transition: {
										duration: 0.6,
										delay: index * 0.2
									}
								}
							}}
							style={getCardStyle(index)}
						>
							{/* <h3 style={getCardTitleStyle(index)}>
								{testimonial.title}
							</h3> */}
							<p style={getCardTextStyle(index)}>
								"{testimonial.description}"
							</p>
							<div style={getCardFooterStyle(index)}>
								<h4 style={getAuthorStyle(index)}>
									{testimonial.author}
								</h4>
								<span style={getDesignationStyle(index)}>
									{testimonial.designation}
								</span>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Decorative elements */}
			{/* <div style={{
				position: "absolute",
				top: 0,
				left: 0,
				right: 0,
				height: "120px",
				overflow: "hidden",
				transform: "rotate(180deg)",
				"@media (max-width: 768px)": {
					height: "80px"
				}
			}}>
				<div style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					height: "100%",
					background: "#67162e",
					clipPath: "polygon(0 0, 100% 0, 100% 60%, 75% 40%, 50% 60%, 25% 40%, 0 60%)",
					opacity: 0.1
				}}/>
				<div style={{
					position: "absolute",
					top: "10px",
					left: 0,
					right: 0,
					height: "100%",
					background: "#67162e",
					clipPath: "polygon(0 0, 100% 0, 100% 55%, 85% 35%, 60% 55%, 35% 35%, 0 55%)",
					opacity: 0.15
				}}/>
			</div> */}
		</div>
	);
}

export default Testimonial;
