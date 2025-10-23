import { useState, useEffect } from "react";
// import serviceImage from "../../../assets/images/service/service-image.jpg";
import serviceImage1 from "../../../assets/images/service/service-image1.png";
import serviceImage2 from "../../../assets/images/service/service-image2.png";
import serviceImage3 from "../../../assets/images/service/service-image3.png";
import serviceImage4 from "../../../assets/images/service/service-image4.png";
import serviceImage5 from "../../../assets/images/service/service-image5.png";
import serviceImage6 from "../../../assets/images/service/service-image6.png";
function ServiceCard({ service: { title, description, iconClass }, index }) {
	const [isHovered, setIsHovered] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

    // Alternate card themes to match page (magenta and beige)
    const backgroundColor = index % 2 === 0 ? "#67162e" : "#fffbe6";
    const textColor = index % 2 === 0 ? "#f4e2b4" : "#67162e";

	// You'll need to add these images to your assets
	// const serviceImages = [
	// 	"/images/corporate-events.jpg",
	// 	"/images/mess-catering.jpg",
	// 	"/images/outdoor-events.jpg",
	// 	"/images/institutional.jpg",
	// 	"/images/ramadan.jpg",
	// 	"/images/labour-camp.jpg",
	// ];
	const serviceImages = [
		serviceImage1,
		serviceImage2,
		serviceImage3,
		serviceImage6,
		serviceImage5,
		serviceImage4,
	];

	return (
		<div 
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={() => setIsHovered(!isHovered)} // Added for mobile touch
			style={{
				padding: isMobile ? "20px 15px" : "40px 30px",
				backgroundColor: backgroundColor,
                height: isMobile ? "140px" : "280px",
				position: "relative",
				overflow: "hidden",
				borderRadius: isMobile ? "15px" : "25px",
				boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
				cursor: "pointer",
				transition: "all 0.4s ease",
				marginBottom: isMobile ? "10px" : "0"
			}}
		>
			{/* Background Image */}
			<div style={{
				position: "absolute",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				backgroundImage: `url(${serviceImages[index]})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				opacity: isHovered ? 1 : 0,
				transition: "opacity 0.4s ease",
				zIndex: 1
			}}/>

			{/* Overlay */}
			<div style={{
				position: "absolute",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				backgroundColor: isHovered ? "rgba(103, 22, 46, 0.85)" : "transparent",
				transition: "background-color 0.4s ease",
				zIndex: 2
			}}/>

			{/* Content */}
			<div style={{
				position: "relative",
				zIndex: 3,
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				transition: "transform 0.4s ease",
				transform: isHovered ? "translateY(-10px)" : "translateY(0)"
			}}>
                <h3 style={{
                    color: isHovered ? "#f4e2b4" : textColor,
                    fontSize: isMobile ? "16px" : "22px",
                    fontWeight: 600,
                    marginBottom: isHovered ? (isMobile ? "8px" : "16px") : 0,
                    fontFamily: "Mondia, serif",
                    lineHeight: isMobile ? "1.2" : "1.3",
                    transition: "all 0.4s ease",
                    textAlign: "center"
                }}>
					{title}
				</h3>
				
				{/* Description that appears on hover */}
				{/* <p style={{
					color: "#f4e2b4",
					fontSize: "16px",
					fontFamily: "JustSans, sans-serif",
					lineHeight: "1.6",
					margin: 0,
					opacity: isHovered ? 1 : 0,
					transform: isHovered ? "translateY(0)" : "translateY(20px)",
					transition: "all 0.4s ease",
					maxWidth: "280px",
					textAlign: "center",
					"@media (max-width: 768px)": {
						fontSize: "14px",
						lineHeight: "1.4",
						maxWidth: "240px"
					}
				}}>
					{description}
				</p> */}
			</div>
		</div>
	);
}

export default ServiceCard;
