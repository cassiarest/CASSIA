import CountUp from "react-countup";
import { useState, useEffect, useRef } from "react";

function AboutCounter() {
	const [isVisible, setIsVisible] = useState(false);
	const counterRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.3 }
		);

		if (counterRef.current) {
			observer.observe(counterRef.current);
		}

		return () => {
			if (counterRef.current) {
				observer.unobserve(counterRef.current);
			}
		};
	}, []);

	return (
		<div 
			ref={counterRef}
			style={{
				// background: "#ffffff",
				borderRadius: "30px",
				paddingTop: "80px",
				height: "100%",
				opacity: isVisible ? 1 : 0,
				transform: isVisible ? "translateY(0)" : "translateY(20px)",
				transition: "opacity 0.8s ease, transform 0.8s ease",
				// boxShadow: "0 20px 40px rgba(103, 22, 46, 0.1)"
			}}
		>
			<div style={{
				display: "flex",
				flexDirection: "column",
				gap: "40px"
			}}>
				{/* Years of Experience */}
				<div style={{ textAlign: "center" }}>
					<h2 style={{
						color: "#67162e",
						fontFamily: "Mondia, serif",
						fontSize: "48px",
						marginBottom: "10px"
					}}>
						{isVisible && <CountUp end={30} duration={2.5} />}+
					</h2>
					<p style={{
						color: "#67162e",
						fontFamily: "JustSans, sans-serif",
						fontSize: "18px",
						margin: 0
					}}>Years of Experience</p>
				</div>

				{/* Successful Events */}
				<div style={{ textAlign: "center" }}>
					<h2 style={{
						color: "#67162e",
						fontFamily: "Mondia, serif",
						fontSize: "48px",
						marginBottom: "10px"
					}}>
						{isVisible && <CountUp end={500} duration={2.5} delay={0.2} />}+
					</h2>
					<p style={{
						color: "#67162e",
						fontFamily: "JustSans, sans-serif",
						fontSize: "18px",
						margin: 0
					}}>Events Catered</p>
				</div>

				{/* Client Satisfaction */}
				<div style={{ textAlign: "center" }}>
					<h2 style={{
						color: "#67162e",
						fontFamily: "Mondia, serif",
						fontSize: "48px",
						marginBottom: "10px"
					}}>
						{isVisible && <CountUp end={100} duration={2.5} delay={0.4} />}%
					</h2>
					<p style={{
						color: "#67162e",
						fontFamily: "JustSans, sans-serif",
						fontSize: "18px",
						margin: 0
					}}>Client Satisfaction</p>
				</div>

				{/* People Served Daily */}
				<div style={{ textAlign: "center" }}>
					<h2 style={{
						color: "#67162e",
						fontFamily: "Mondia, serif",
						fontSize: "48px",
						marginBottom: "10px"
					}}>
						{isVisible && <CountUp end={1500} duration={2.5} delay={0.6} />}+
					</h2>
					<p style={{
						color: "#67162e",
						fontFamily: "JustSans, sans-serif",
						fontSize: "18px",
						margin: 0
					}}>People served 3 times daily</p>
				</div>
			</div>
		</div>
	);
}

export default AboutCounter;
