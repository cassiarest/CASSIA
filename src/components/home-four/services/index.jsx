import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
// import { FadeInStagger } from '../../animation/FadeInStagger';
import { FadeInStaggerTwo } from '../../animation/FadeInStaggerTwo';
import ServiceCard from "./ServiceCard";

const serviceData = [
	{
		id: crypto.randomUUID(),
		title: "Corporate Events & Business Catering",
		description:
			"Actionable strategies that align with your business objectives, ensuring you're on the path to success.",
		iconClass: "icon-idea-bulb",
	},
	{
		id: crypto.randomUUID(),
		title: "Mess Catering & Canteen Management",
		description:
			"We optimize your processes & work improve efficiency, and reduce costs to enhance overall performance.",
		iconClass: "icon-project-management",
	},
	{
		id: crypto.randomUUID(),
		title: "Outdoor Gatherings & Celebrations",
		description:
			"Our experts provide financial guide, help manage investments, & risk to ensure your financial health.",
		iconClass: "icon-start-up",
	},
	{
		id: crypto.randomUUID(),
		title: "Institutional Catering (Schools, Colleges, Hospitals)",
		description:
			"We offer IT consulting to guide new technology adoption for enhance all cybersecurity for your business.",
		iconClass: "icon-database",
	},
	{
		id: crypto.randomUUID(),
		title: "Ramadan Tents & Seasonal Events",
		description: "We help you develop effective and boost brand visibility to connect with your target audience.",
		iconClass: "icon-data-analysis-1",
	},
	{
		id: crypto.randomUUID(),
		title: "Labour Camp Daily Food Programs",
		description:
			"With industry-specific knowledge, we provide tailored solutions for all sectors like healthcare, finance.",
		iconClass: "icon-client-support",
	},
];

function Services() {
	const [styles, setStyles] = useState({
		sectionPadding: "60px 0",
		containerPadding: "30px",
		titleFontSize: "38px",
		borderRadius: "40px",
		marginBottom: "80px",
		titlePadding: "20px"
	});

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 480) {
				setStyles({
					sectionPadding: "20px 0",
					containerPadding: "15px",
					titleFontSize: "22px",
					borderRadius: "20px",
					marginBottom: "30px",
					titlePadding: "10px"
				});
			} else if (window.innerWidth <= 768) {
				setStyles({
					sectionPadding: "30px 0",
					containerPadding: "20px",
					titleFontSize: "24px",
					borderRadius: "30px",
					marginBottom: "40px",
					titlePadding: "15px"
				});
			} else {
				setStyles({
					sectionPadding: "60px 0",
					containerPadding: "30px",
					titleFontSize: "38px",
					borderRadius: "40px",
					marginBottom: "80px",
					titlePadding: "20px"
				});
			}
		};

		// Initial check
		handleResize();

		// Add event listener
		window.addEventListener('resize', handleResize);

		// Cleanup
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div id="services" style={{
			// padding: styles.sectionPadding,
			position: "relative",
			// background: "linear-gradient(135deg, #67162e 0%, #8b1e3a 20%, #67162e 100%)",
			overflow: "hidden"
		}}>
			{/* Decorative background elements */}
			<div style={{
				position: "absolute",
				top: "10%",
				left: "-5%",
				width: "300px",
				// height: "300px",
				// background: "radial-gradient(circle, rgba(244, 226, 180, 0.1) 0%, rgba(244, 226, 180, 0) 70%)",
				borderRadius: "50%",
			}}/>
			<div style={{
				position: "absolute",
				bottom: "20%",
				right: "-10%",
				width: "400px",
				height: "400px",
				// background: "radial-gradient(circle, rgba(244, 226, 180, 0.08) 0%, rgba(244, 226, 180, 0) 70%)",
				borderRadius: "50%",
			}}/>
			<div style={{
				position: "absolute",
				top: "50%",
				right: "70%",
				width: "200px",
				height: "200px",
				// background: "radial-gradient(circle, rgba(244, 226, 180, 0.06) 0%, rgba(244, 226, 180, 0) 70%)",
				borderRadius: "50%",
			}}/>

			<div className="container" style={{ position: "relative", zIndex: 2 }}>
				<div style={{
					marginBottom: styles.marginBottom,
					paddingLeft: styles.titlePadding,
					paddingRight: styles.titlePadding
				}}>
					<h1 style={{
						fontFamily: "Mondia, serif",
						fontSize: window.innerWidth <= 480 ? "28px" : "36px",
						color: "#f4e2b4",
						maxWidth: "1000px",
						margin: "0 auto",
						lineHeight: "1.2",
						fontWeight: 600,
						letterSpacing: "0.5px",
						textAlign: "center",
						paddingBottom: "15px"
					}}>Professional Catering</h1>
					<p style={{
						fontFamily: "Mondia, sans-serif",
						fontSize: window.innerWidth <= 480 ? "14px" : window.innerWidth <= 768 ? "13px" : "17px",
						lineHeight: window.innerWidth <= 480 ? "1.4" : window.innerWidth <= 768 ? "1.5" : "1.7",
						color: "rgb(244, 226, 180)",
						maxWidth: "77%",
						margin: "0px auto",
						textAlign: "justify",
						fontWeight: "400",
						letterSpacing: "0.3px",
						opacity: 1,
						padding: 0
					}}>
						We provide professional catering services for all occasions, from intimate family gatherings to large corporate and institutional events. Our commitment to quality and excellence has made us a trusted name in the region for over three decades.
					</p>
	
				</div>

				<div style={{ 
					padding: window.innerWidth <= 480 ? "0" : styles.containerPadding,
					borderRadius: styles.borderRadius,
					backgroundColor: "transparent",
					// boxShadow: "0 30px 60px rgba(0, 0, 0, 0.25)",
					margin: window.innerWidth <= 480 ? "0" : "0"
				}}>
					<div className="row g-2">
						{serviceData.map((service, index) => (
							<FadeInStaggerTwo 
								key={service.id} 
								index={index} 
								className={window.innerWidth <= 768 ? "col-6" : "col-xl-4 col-lg-6 col-md-6"}
							>
								<ServiceCard service={service} index={index} />
							</FadeInStaggerTwo>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Services;
