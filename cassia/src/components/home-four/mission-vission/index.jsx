import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import pill1 from "../../../assets/images/about/about us images-02.png";
import pill2 from "../../../assets/images/about/about us images-03.png";
import pill3 from "../../../assets/images/about/about us images-04.png";

function MissionVision() {
	const [fontSize, setFontSize] = useState({
		heading: "48px",
		text: "32px",
		pillHeight: "80px",
		buttonPadding: "12px 24px",
		buttonFontSize: "16px"
	});

	const [hoveredButton, setHoveredButton] = useState(null);

	const navigate = useNavigate();

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 480) {
				setFontSize({
					heading: "32px",
					text: "16px",
					pillHeight: "32px",
					buttonPadding: "14px 28px",
					buttonFontSize: "16px"
				});
			} else if (window.innerWidth <= 768) {
				setFontSize({
					heading: "40px",
					text: "18px",
					pillHeight: "45px",
					buttonPadding: "16px 32px",
					buttonFontSize: "18px"
				});
			} else {
				setFontSize({
					heading: "48px",
					text: "20px",
					pillHeight: "60px",
					buttonPadding: "18px 36px",
					buttonFontSize: "20px"
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

	const scrollToServices = () => {
		navigate('/Menu?service=catering');
	};

	const scrollToRestaurants = () => {
		navigate('/Menu?service=restaurant');
	};

	return (
		<div style={{ 
			padding: "120px 0",
			background: "linear-gradient(to right, #ffffff 0%, #fffbe6 100%)",
			position: "relative",
			overflow: "hidden"
		}}>
			{/* Decorative elements */}
			<div style={{
				position: "absolute",
				top: "50%",
				left: "0",
				width: "200px",
				height: "200px",
				background: "radial-gradient(circle, rgba(103, 22, 46, 0.05) 0%, rgba(103, 22, 46, 0) 70%)",
				borderRadius: "50%",
				transform: "translateY(-50%)",
			}}/>
			<div style={{
				position: "absolute",
				top: "20%",
				right: "10%",
				width: "150px",
				height: "150px",
				background: "radial-gradient(circle, rgba(103, 22, 46, 0.05) 0%, rgba(103, 22, 46, 0) 70%)",
				borderRadius: "50%",
			}}/>

			<div className="container">
				<motion.div 
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					style={{
						textAlign: "center",
						maxWidth: "1400px",
						margin: "0 auto",
						position: "relative",
						zIndex: 2,
						padding: window.innerWidth <= 480 ? "20px" : "0"
					}}
				>
					<div style={{
						marginBottom: window.innerWidth <= 480 ? "30px" : "60px",
						position: "relative",
						display: "inline-block"
					}}>
						<h2 style={{
							color: "#67162e",
							fontSize: fontSize.heading,
							fontWeight: "600",
							fontFamily: "Mondia, serif",
							marginBottom: window.innerWidth <= 480 ? "15px" : "20px",
							position: "relative",
							display: "inline-block"
						}}>
							About Us
						</h2>
						<div style={{
							width: window.innerWidth <= 480 ? "80px" : "120px",
							height: "3px",
							background: "linear-gradient(to right, #67162e 0%, rgba(103, 22, 46, 0.3) 100%)",
							margin: "0 auto",
							borderRadius: "2px",
							transition: "all 0.3s ease"
						}}/>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<p style={{
							color: "#67162e",
							fontSize: fontSize.text,
							lineHeight: window.innerWidth <= 480 ? "1.4" : "1.5",
							fontWeight: "500",
							fontFamily: "JustSans, sans-serif",
							maxWidth: "1200px",
							margin: "0 auto",
							padding: window.innerWidth <= 480 ? "0 15px" : "0",
							marginBottom: window.innerWidth <= 480 ? "30px" : "40px"
						}}>
							At <span style={{ 
								fontFamily: "Mondia, serif",
								color: "#67162e",
								fontWeight: "600"
							}}>Cassia</span>, we take pride in crafting exquisite, meticulously prepared dishes
							<img 
								src={pill1} 
								alt="" 
								style={{
									display: "inline-block",
									height: fontSize.pillHeight,
									margin: "0 3px",
									verticalAlign: "middle",
									transform: "translateY(-4px)"
								}}
							/>
							for businesses and special occasions. We ensure the utmost hygiene standards
							<img 
								src={pill2} 
								alt="" 
								style={{
									display: "inline-block",
									height: fontSize.pillHeight,
									margin: "0 3px",
									verticalAlign: "middle",
									transform: "translateY(-4px)"
								}}
							/>
							while efficiently handling large catering needs.
						</p>

						{/* Navigation Buttons */}
						<motion.div 
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.4 }}
							style={{
								display: "flex",
								gap: window.innerWidth <= 480 ? "15px" : "20px",
								justifyContent: "center",
								alignItems: "center",
								flexWrap: "wrap",
								marginBottom: window.innerWidth <= 480 ? "60px" : "80px"
							}}
						>
							<button
								onClick={scrollToServices}
								onMouseEnter={() => setHoveredButton('catering')}
								onMouseLeave={() => setHoveredButton(null)}
								style={{
									backgroundColor: "transparent",
									color: "#67162e", 
									padding: "8px 20px",
									borderRadius: "25px",
									border: "2px solid #67162e",
									fontFamily: "JustSans, sans-serif",
									fontSize: "16px",
									fontWeight: "500",
									cursor: "pointer",
									transition: "all 0.3s ease",
									position: "relative",
									overflow: "hidden",
									width: "200px",
									whiteSpace: "nowrap",
									boxShadow: hoveredButton === 'catering'
										? "0 0 20px rgba(103, 22, 46, 0.4), 0 0 40px rgba(103, 22, 46, 0.2)"
										: "0 4px 15px rgba(103, 22, 46, 0.1)",
									transform: hoveredButton === 'catering' ? "translateY(-2px)" : "translateY(0)",
									background: hoveredButton === 'catering'
										? "#67162e"
										: "transparent"
								}}
							>
								<span style={{
									color: hoveredButton === 'catering' ? "#f4e2b4" : "#67162e",
									transition: "color 0.3s ease"
								}}>
									Our Catering
								</span>
							</button>

							<button
								onClick={scrollToRestaurants}
								onMouseEnter={() => setHoveredButton('restaurants')}
								onMouseLeave={() => setHoveredButton(null)}
								style={{
									backgroundColor: "transparent",
									color: "#67162e",
									padding: "8px 20px",
									borderRadius: "25px",
									border: "2px solid #67162e",
									fontFamily: "JustSans, sans-serif",
									fontSize: "16px",
									fontWeight: "500",
									cursor: "pointer",
									transition: "all 0.3s ease",
									position: "relative",
									overflow: "hidden",
									width: "200px",
									whiteSpace: "nowrap",
									boxShadow: hoveredButton === 'restaurants' 
										? "0 0 20px rgba(103, 22, 46, 0.4), 0 0 40px rgba(103, 22, 46, 0.2)" 
										: "0 4px 15px rgba(103, 22, 46, 0.1)",
									transform: hoveredButton === 'restaurants' ? "translateY(-2px)" : "translateY(0)",
									background: hoveredButton === 'restaurants' 
										? "#67162e"
										: "transparent"
								}}
							>
								<span style={{
									color: hoveredButton === 'restaurants' ? "#f4e2b4" : "#67162e",
									transition: "color 0.3s ease"
								}}>
									Our Restaurants
								</span>
							</button>
						</motion.div>

						{/* Bottom Section - Services Display */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.6 }}
							style={{
								display: "flex",
								justifyContent: "space-around",
								alignItems: "center",
								maxWidth: "800px",
								margin: "0 auto",
								padding: window.innerWidth <= 480 ? "0 20px" : "0 40px",
								position: "relative"
							}}
						>
							{/* Restaurant */}
							<div style={{
								textAlign: "center",
								flex: 1,
								position: "relative"
							}}>
								<h3 style={{
									color: "#67162e",
									fontSize: window.innerWidth <= 480 ? "20px" : window.innerWidth <= 768 ? "24px" : "28px",
									fontWeight: "600",
									fontFamily: "Mondia, serif",
									margin: 0,
									letterSpacing: "0.5px"
								}}>
									Restaurant
								</h3>
							</div>

							{/* Vertical Divider */}
							<div style={{
								width: "1px",
								height: window.innerWidth <= 480 ? "40px" : "50px",
								background: "#67162e",
								opacity: "0.3",
								margin: "0 20px"
							}}/>

							{/* Catering */}
							<div style={{
								textAlign: "center",
								flex: 1,
								position: "relative"
							}}>
								<h3 style={{
									color: "#67162e",
									fontSize: window.innerWidth <= 480 ? "20px" : window.innerWidth <= 768 ? "24px" : "28px",
									fontWeight: "600",
									fontFamily: "Mondia, serif",
									margin: 0,
									letterSpacing: "0.5px"
								}}>
									Catering
								</h3>
							</div>

							{/* Vertical Divider */}
							<div style={{
								width: "1px",
								height: window.innerWidth <= 480 ? "40px" : "50px",
								background: "#67162e",
								opacity: "0.3",
								margin: "0 20px"
							}}/>

							{/* Banquet Halls */}
							<div style={{
								textAlign: "center",
								flex: 1,
								position: "relative"
							}}>
								<h3 style={{
									color: "#67162e",
									fontSize: window.innerWidth <= 480 ? "20px" : window.innerWidth <= 768 ? "24px" : "28px",
									fontWeight: "600",
									fontFamily: "Mondia, serif",
									margin: 0,
									letterSpacing: "0.5px"
								}}>
									Banquet Halls
								</h3>
							</div>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}

export default MissionVision;