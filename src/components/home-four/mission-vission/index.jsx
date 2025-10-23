import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
	const [imagesInView, setImagesInView] = useState(false);
	const [isMobile, setIsMobile] = useState(false);


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
					text: "15px", // Changed to 15px for mobile
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
			setIsMobile(window.innerWidth <= 768);
		};

		// Initial check
		handleResize();

		// Add event listener
		window.addEventListener('resize', handleResize);

		// Cleanup
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const scrollToServices = () => {
		// Force page refresh to reset all state
		window.location.href = '/Menu?service=catering';
	};

	const scrollToRestaurants = () => {
		// Force page refresh to reset all state
		window.location.href = '/Menu?service=restaurant';
	};

	return (
		<div id="about" style={{ 
			padding: window.innerWidth <= 480 ? "60px 0" : "120px 0",
			background: "linear-gradient(to right, #ffffff 0%, #fffbe6 100%)",
			position: "relative",
			overflow: "hidden"
		}}>
			{/* Decorative elements */}
			<div style={{
				position: "absolute",
				top: "50%",
				left: "0",
				width: window.innerWidth <= 480 ? "120px" : "200px",
				height: window.innerWidth <= 480 ? "120px" : "200px",
				background: "radial-gradient(circle, rgba(103, 22, 46, 0.05) 0%, rgba(103, 22, 46, 0) 70%)",
				borderRadius: "50%",
				transform: "translateY(-50%)",
			}}/>
			<div style={{
				position: "absolute",
				top: window.innerWidth <= 480 ? "10%" : "20%",
				right: window.innerWidth <= 480 ? "5%" : "10%",
				width: window.innerWidth <= 480 ? "90px" : "150px",
				height: window.innerWidth <= 480 ? "90px" : "150px",
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
						onAnimationComplete={() => setImagesInView(true)}
					>
						<p style={{
							color: "#67162e",
							fontSize: fontSize.text,
							lineHeight: window.innerWidth <= 480 ? "1.4" : "1.5",
							fontWeight: "500",
							fontFamily: "JustSans, sans-serif",
							maxWidth: "77%",
							margin: "0 auto",
							padding: 0,
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
									// Start as diamond (rotate 45deg with diamond clip-path), transition to rectangle (no rotation, rectangle clip-path)
									transform: imagesInView 
										? "translateY(-4px) rotate(0deg)"
										: "translateY(-4px) rotate(45deg)",
									borderRadius: imagesInView ? "8px" : "0px",
									clipPath: imagesInView 
										// Rectangle shape at end
										? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
										// Diamond shape at start
										: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
									transition: "transform 1s cubic-bezier(0.23, 1, 0.32, 1) 0.5s, border-radius 1.2s ease-in-out 0.5s, clip-path 1.2s ease-in-out 0.5s"
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
                                    transform: imagesInView 
                                        ? "translateY(-4px) rotate(0deg)"
                                        : "translateY(-4px) rotate(45deg)",
                                    borderRadius: imagesInView ? "8px" : "0px",
                                    clipPath: imagesInView 
                                        ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                                        : "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                                    transition: "transform 1s cubic-bezier(0.23, 1, 0.32, 1) 0.6s, border-radius 1.2s ease-in-out 0.6s, clip-path 1.2s ease-in-out 0.6s"
                                }}
                            />
							while efficiently handling large catering needs.
						</p>

					{/* Navigation Buttons removed */}

						{/* Bottom Section - Services Display */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.6 }}
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-around",
							alignItems: "center",
							gap: isMobile ? "8px" : "0",
							maxWidth: "800px",
							margin: "0 auto",
							padding: isMobile ? "0 8px" : "0 40px",
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
									fontSize: window.innerWidth <= 480 ? "14px" : window.innerWidth <= 768 ? "16px" : "28px",
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
							height: isMobile ? "30px" : "50px",
							background: "#67162e",
							opacity: "0.3",
							margin: "0 8px",
							borderRadius: "2px"
						}}/>

							{/* Catering */}
							<div style={{
								textAlign: "center",
								flex: 1,
								position: "relative"
							}}>
								<h3 style={{
									color: "#67162e",
									fontSize: window.innerWidth <= 480 ? "14px" : window.innerWidth <= 768 ? "16px" : "28px",
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
							height: isMobile ? "30px" : "50px",
							background: "#67162e",
							opacity: "0.3",
							margin: "0 8px",
							borderRadius: "2px"
						}}/>

							{/* Banquet Halls */}
							<div style={{
								textAlign: "center",
								flex: 1,
								position: "relative"
							}}>
								<h3 style={{
									color: "#67162e",
									fontSize: window.innerWidth <= 480 ? "14px" : window.innerWidth <= 768 ? "16px" : "28px",
									fontWeight: "600",
									fontFamily: "Mondia, serif",
									margin: 0,
									letterSpacing: "0.5px"
								}}>
									Banquet Halls
								</h3>
							</div>
						</motion.div>

						{/* Experience Cassia button (same as hero) */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.7 }}
							style={{ display: "flex", justifyContent: "center", marginTop: window.innerWidth <= 480 ? "20px" : "30px" }}
						>
							<button
								onClick={() => {
									// Force page refresh to reset all state
									window.location.href = '/Menu';
								}}
								style={{
									backgroundColor: "#67162e",
									color: "#ffffff",
									padding: window.innerWidth <= 480 ? "10px 24px" : "14px 28px",
									borderRadius: "8px",
									border: "none",
									fontFamily: "Mondia, sans-serif",
									fontSize: window.innerWidth <= 480 ? "16px" : "18px",
									fontWeight: "600",
									cursor: "pointer",
									transition: "all 0.3s ease",
									width: window.innerWidth <= 480 ? "200px" : "220px"
								}}
							>
								Experience cassia
							</button>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}

export default MissionVision;