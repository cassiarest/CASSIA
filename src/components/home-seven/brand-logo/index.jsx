import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";
import Brand1Img from "../../../assets/images/v7/client logos-06.png";
import Brand2Img from "../../../assets/images/v7/client logos-07.png";
import Brand4Img from "../../../assets/images/v7/client logos-09.png";
import Brand5Img from "../../../assets/images/v7/client logos-10.png";
import Brand6Img from "../../../assets/images/v7/client logos-11.png";
import Brand7Img from "../../../assets/images/v7/client logos-12.png";
import Brand8Img from "../../../assets/images/v7/client logos-13.png";
import Brand9Img from "../../../assets/images/v7/client logos-14.png";
import Brand10Img from "../../../assets/images/v7/client logos-15.png";

const logoImages = [
	Brand1Img, Brand2Img, Brand4Img, Brand5Img, Brand6Img, Brand7Img, Brand8Img, Brand9Img, Brand10Img,
	Brand1Img, Brand2Img, Brand4Img, Brand5Img, Brand6Img, Brand7Img, Brand8Img, Brand9Img, Brand10Img,
	Brand1Img, Brand2Img, Brand4Img, Brand5Img, Brand6Img, Brand7Img, Brand8Img, Brand9Img, Brand10Img,
	Brand1Img, Brand2Img, Brand4Img, Brand5Img, Brand6Img, Brand7Img, Brand8Img, Brand9Img, Brand10Img
];

const swiperConfig = {
	centeredSlides: true,
	speed: 4000,
	autoplay: { delay: 1 },
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: 2,
	spaceBetween: 30,
	breakpoints: {
		768: { slidesPerView: 3 },
		992: { slidesPerView: 4 },
		1200: { slidesPerView: 4 }
	}
};

function BrandLogo() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	const sectionStyle = {
		// backgroundColor: "#67162e",
		backgroundColor: "#fffbe6",
		padding: isMobile ? "40px 0" : "80px 0",
		width: "100%",
		margin: "0",
		boxSizing: "border-box"
	};

	const containerStyle = {
		maxWidth: "1200px",
		margin: "0 auto",
		padding: "0 20px",
		width: "100%",
		boxSizing: "border-box"
	};

	const headerStyle = {
		textAlign: "center",
		marginBottom: isMobile ? "40px" : "50px",
		padding: "0",
		margin: "0 0 " + (isMobile ? "40px" : "50px") + " 0"
	};

	const titleStyle = {
		fontFamily: "Mondia, serif",
		fontSize: isMobile ? "32px" : "42px",
		color: "#67162e",
		marginBottom: "20px",
		margin: "0 0 20px 0",
		padding: "0"
	};

	const descriptionStyle = {
		fontFamily: "JustSans, sans-serif",
		fontSize: isMobile ? "16px" : "18px",
		color: "#67162e",
		opacity: 0.9,
		maxWidth: "800px",
		margin: "0 auto",
		padding: "0",
		lineHeight: "1.6"
	};

	const sliderContainerStyle = {
		position: "relative",
		overflow: "hidden",
		margin: "0",
		padding: "0"
	};

	const fadeLeftStyle = {
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		width: isMobile ? "40px" : "80px",
		background: isMobile 
			? "linear-gradient(to right, #67162e 0%, rgba(103, 22, 46, 0.6) 60%, transparent 100%)"
			: "linear-gradient(to right, #67162e 0%, rgba(103, 22, 46, 0.95) 20%, rgba(103, 22, 46, 0.7) 40%, rgba(103, 22, 46, 0.4) 60%, rgba(103, 22, 46, 0.15) 80%, transparent 100%)",
		pointerEvents: "none",
		zIndex: 10
	};

	const fadeRightStyle = {
		position: "absolute",
		top: 0,
		right: 0,
		bottom: 0,
		width: isMobile ? "40px" : "80px",
		background: isMobile 
			? "linear-gradient(to left, #67162e 0%, rgba(103, 22, 46, 0.6) 60%, transparent 100%)"
			: "linear-gradient(to left, #67162e 0%, rgba(103, 22, 46, 0.95) 20%, rgba(103, 22, 46, 0.7) 40%, rgba(103, 22, 46, 0.4) 60%, rgba(103, 22, 46, 0.15) 80%, transparent 100%)",
		pointerEvents: "none",
		zIndex: 10
	};

	const logoCardStyle = {
		background: "#fffbe6",
		borderRadius: "20px",
		padding: isMobile ? "20px" : "30px",
		height: isMobile ? "120px" : "140px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		// boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
		margin: "0"
	};

	const logoImageStyle = {
		maxWidth: "100%",
		maxHeight: "80px",
		objectFit: "contain",
		opacity: 0.8,
		transition: "all 0.3s ease"
	};

	return (
		<div style={sectionStyle}>
			<div style={containerStyle}>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, margin: "-100px" }}
					transition={{ duration: 0.6 }}
					style={headerStyle}
				>
					<h2 style={titleStyle}>Our Partners</h2>
					<p style={descriptionStyle}>
						We are proud to collaborate with prestigious partners who share our commitment to excellence
					</p>
				</motion.div>

				<div style={sliderContainerStyle}>
					<Swiper {...swiperConfig}>
						{logoImages.map((image, index) => (
							<SwiperSlide key={`logo-${index}`}>
								<motion.div
									initial={{ opacity: 0, scale: 0.95 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: false }}
									transition={{ duration: 0.5 }}
									style={logoCardStyle}
								>
									<img 
										src={image} 
										alt="Partner logo" 
										style={logoImageStyle}
									/>
								</motion.div>
							</SwiperSlide>
						))}
					</Swiper>
					
					{/* <div style={fadeLeftStyle} />
					<div style={fadeRightStyle} /> */}
				</div>
			</div>
		</div>
	);
}

export default BrandLogo;
