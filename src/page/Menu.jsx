import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import Services from '../components/home-four/services';
import About from './About';

function Menu() {
	const [fontSize, setFontSize] = useState({
		heading: "64px",
		subheading: "24px",
		text: "18px",
		cardTitle: "20px",
		buttonFontSize: "16px",
		buttonPadding: "12px 24px"
	});

	const [hoveredCard, setHoveredCard] = useState(null);
	
	// Get URL search parameters
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const serviceParam = searchParams.get('service');
	
	// Set initial service based on URL parameter, default to 'catering'
	const [activeService, setActiveService] = useState(serviceParam || 'catering');

	// Update activeService when URL parameters change
	useEffect(() => {
		if (serviceParam) {
			setActiveService(serviceParam);
		}
	}, [serviceParam]);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 480) {
				setFontSize({
					heading: "48px",
					subheading: "18px",
					text: "14px",
					cardTitle: "16px",
					buttonFontSize: "14px",
					buttonPadding: "10px 20px"
				});
			} else if (window.innerWidth <= 768) {
				setFontSize({
					heading: "56px",
					subheading: "20px",
					text: "16px",
					cardTitle: "18px",
					buttonFontSize: "15px",
					buttonPadding: "11px 22px"
				});
			} else {
				setFontSize({
					heading: "64px",
					subheading: "24px",
					text: "18px",
					cardTitle: "20px",
					buttonFontSize: "16px",
					buttonPadding: "12px 24px"
				});
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const cateringCategories = [
		{
			id: 1,
			title: "Corporate Events",
			description: "Professional catering for business meetings and conferences",
			image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&fit=crop&crop=center"
		},
		{
			id: 2,
			title: "Wedding Catering",
			description: "Elegant dining experiences for your special day",
			image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop&crop=center"
		},
		{
			id: 3,
			title: "Private Parties",
			description: "Customized menus for intimate gatherings",
			image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop&crop=center"
		},
		{
			id: 4,
			title: "Large Events",
			description: "Scalable catering solutions for grand celebrations",
			image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop&crop=center"
		}
	];

	const restaurantCategories = [
		{
			id: 1,
			title: "Appetizers & Starters",
			description: "Exquisite small plates to begin your culinary journey",
			image: "https://images.unsplash.com/photo-1621996346565-e3dbc97d2536?w=400&h=300&fit=crop&crop=center"
		},
		{
			id: 2,
			title: "Main Courses",
			description: "Carefully crafted dishes featuring premium ingredients",
			image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop&crop=center"
		},
		{
			id: 3,
			title: "Signature Desserts",
			description: "Indulgent sweet creations to perfect your dining experience",
			image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center"
		},
		{
			id: 4,
			title: "Beverage Selection",
			description: "Curated wines, cocktails, and artisanal beverages",
			image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop&crop=center"
		}
	];

	// Get current categories based on active service
	const menuCategories = activeService === 'catering' ? cateringCategories : restaurantCategories;

	const handleQuickView = (categoryId) => {
		console.log(`Quick view for category ${categoryId}`);
		// Add navigation logic here
	};

	const getQuoteButton = () => {
		console.log('Get a quote clicked');
		// Add quote logic here
	};

	// Handle service change and update URL
	const handleServiceChange = (service) => {
		setActiveService(service);
		navigate(`/Menu?service=${service}`, { replace: true });
	};

	return (
		<>
			<div style={{ 
				minHeight: "100vh",
				background: "linear-gradient(135deg, #67162e 0%, #8b1e3a 20%, #67162e 100%)",
				position: "relative",
				overflow: "hidden"
			}}>
							<About />
				{/* Decorative background elements */}
				<div style={{
					position: "absolute",
					top: "10%",
					left: "-5%",
					width: "300px",
					height: "300px",
					background: "radial-gradient(circle, rgba(244, 226, 180, 0.1) 0%, rgba(244, 226, 180, 0) 70%)",
					borderRadius: "50%",
				}}/>
				<div style={{
					position: "absolute",
					bottom: "20%",
					right: "-10%",
					width: "400px",
					height: "400px",
					background: "radial-gradient(circle, rgba(244, 226, 180, 0.08) 0%, rgba(244, 226, 180, 0) 70%)",
					borderRadius: "50%",
				}}/>
				<div style={{
					position: "absolute",
					top: "50%",
					right: "70%",
					width: "200px",
					height: "200px",
					background: "radial-gradient(circle, rgba(244, 226, 180, 0.06) 0%, rgba(244, 226, 180, 0) 70%)",
					borderRadius: "50%",
				}}/>

				{/* Header */}
				{/* <div style={{
					padding: window.innerWidth <= 480 ? "30px 20px" : "60px 0",
					position: "relative",
					zIndex: 2
				}}>
					<div className="container">
						<div style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: window.innerWidth <= 480 ? "40px" : "60px"
						}}>
							<motion.h1 
								initial={{ opacity: 0, x: -30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8 }}
								style={{
									color: "#f4e2b4",
									fontSize: window.innerWidth <= 480 ? "32px" : "48px",
									fontWeight: "600",
									fontFamily: "Mondia, serif",
									margin: 0
								}}
							>
								Cassia
							</motion.h1>

							<motion.button
								initial={{ opacity: 0, x: 30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8 }}
								onClick={getQuoteButton}
								style={{
									backgroundColor: "transparent",
									color: "#f4e2b4",
									padding: "12px 24px",
									borderRadius: "25px",
									border: "2px solid #f4e2b4",
									fontFamily: "JustSans, sans-serif",
									fontSize: "16px",
									fontWeight: "500",
									cursor: "pointer",
									transition: "all 0.3s ease"
								}}
								onMouseEnter={(e) => {
									e.target.style.backgroundColor = "#f4e2b4";
									e.target.style.color = "#67162e";
									e.target.style.transform = "translateY(-2px)";
									e.target.style.boxShadow = "0 6px 20px rgba(244, 226, 180, 0.3)";
								}}
								onMouseLeave={(e) => {
									e.target.style.backgroundColor = "transparent";
									e.target.style.color = "#f4e2b4";
									e.target.style.transform = "translateY(0)";
									e.target.style.boxShadow = "none";
								}}
							>
								Get a Quote
							</motion.button>
						</div>
					</div>
				</div> */}

				{/* Main Content */}
				<div style={{
					padding: window.innerWidth <= 480 ? "80px 20px 60px" : "120px 0 120px 0",
					position: "relative",
					zIndex: 2
				}}>
					<div className="container">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							style={{
								textAlign: "center",
								marginBottom: window.innerWidth <= 480 ? "40px" : "80px"
							}}
						>
							{/* <h2 style={{
								color: "#f4e2b4",
								fontSize: fontSize.heading,
								fontWeight: "600",
								fontFamily: "Mondia, serif",
								marginBottom: window.innerWidth <= 480 ? "15px" : "20px"
							}}>
								Our Menu
							</h2> */}

							{/* <div style={{
								display: "flex",
								justifyContent: "center",
								gap: window.innerWidth <= 480 ? "30px" : "60px",
								marginTop: window.innerWidth <= 480 ? "20px" : "30px",
								flexWrap: "wrap"
							}}>
								<motion.button
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.8, delay: 0.2 }}
									onClick={() => handleServiceChange('catering')}
									style={{
										background: "none",
										border: "none",
										cursor: "pointer",
										padding: "5px 0"
									}}
								>
									<p style={{
										color: "#f4e2b4",
										fontSize: fontSize.subheading,
										fontWeight: "400",
										fontFamily: "JustSans, sans-serif",
										opacity: activeService === 'catering' ? 1 : 0.6,
										textDecoration: activeService === 'catering' ? "underline" : "none",
										textDecorationColor: "#f4e2b4",
										textUnderlineOffset: "8px",
										textDecorationThickness: "2px",
										margin: 0,
										transition: "all 0.3s ease"
									}}>
										Professional Catering Services
									</p>
								</motion.button>

								<motion.button
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.8, delay: 0.4 }}
									onClick={() => handleServiceChange('restaurant')}
									style={{
										background: "none",
										border: "none",
										cursor: "pointer",
										padding: "5px 0"
									}}
								>
									<p style={{
										color: "#f4e2b4",
										fontSize: fontSize.subheading,
										fontWeight: "400",
										fontFamily: "JustSans, sans-serif",
										opacity: activeService === 'restaurant' ? 1 : 0.6,
										textDecoration: activeService === 'restaurant' ? "underline" : "none",
										textDecorationColor: "#f4e2b4",
										textUnderlineOffset: "8px",
										textDecorationThickness: "2px",
										margin: 0,
										transition: "all 0.3s ease"
									}}>
										Fine Dine Restaurant Experience
									</p>
								</motion.button>
							</div> */}
						</motion.div>

						{/* Menu Cards Grid or Services Component */}
						{activeService === 'catering' ? (
							<Services />
						) : (
							<motion.div
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: 0.3 }}
								style={{
									display: "grid",
									gridTemplateColumns: window.innerWidth <= 768 
										? (window.innerWidth <= 480 ? "1fr" : "repeat(2, 1fr)")
										: "repeat(4, 1fr)",
									gap: window.innerWidth <= 480 ? "20px" : "30px",
									maxWidth: "1400px",
									margin: "0 auto"
								}}
							>
								{menuCategories.map((category, index) => (
									<motion.div
										key={category.id}
										initial={{ opacity: 0, y: 30 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.6, delay: index * 0.1 }}
										onMouseEnter={() => setHoveredCard(category.id)}
										onMouseLeave={() => setHoveredCard(null)}
										style={{
											backgroundImage: `url(${category.image})`,
											backgroundSize: "cover",
											backgroundPosition: "center",
											border: "1px solid rgba(244, 226, 180, 0.2)",
											borderRadius: "20px",
											overflow: "hidden",
											cursor: "pointer",
											transition: "all 0.4s ease",
											transform: hoveredCard === category.id ? "translateY(-10px)" : "translateY(0)",
											boxShadow: hoveredCard === category.id 
												? "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(244, 226, 180, 0.3)"
												: "0 10px 30px rgba(0, 0, 0, 0.2)",
											minHeight: "400px",
											position: "relative"
										}}
									>
										{/* Image Overlay */}
										<div style={{
											position: "absolute",
											inset: 0,
											background: hoveredCard === category.id 
												? "linear-gradient(to bottom, rgba(103, 22, 46, 0.4) 0%, rgba(103, 22, 46, 0.8) 100%)"
												: "linear-gradient(to bottom, rgba(103, 22, 46, 0.3) 0%, rgba(103, 22, 46, 0.6) 100%)",
											transition: "all 0.3s ease"
										}}/>

										{/* Small Quick View Button - Bottom Right */}
										<button
											onClick={() => handleQuickView(category.id)}
											style={{
												position: "absolute",
												bottom: "15px",
												right: "15px",
												backgroundColor: hoveredCard === category.id ? "#f4e2b4" : "rgba(244, 226, 180, 0.8)",
												color: hoveredCard === category.id ? "#67162e" : "#67162e",
												padding: "8px 12px",
												borderRadius: "15px",
												border: "none",
												fontFamily: "JustSans, sans-serif",
												fontSize: "12px",
												fontWeight: "500",
												cursor: "pointer",
												transition: "all 0.3s ease",
												zIndex: 3,
												boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)"
											}}
										>
											Quick View
										</button>
									</motion.div>
								))}
							</motion.div>
						)}
				</div>
			</div>
		</div>
	</>
	);
}

export default Menu;
