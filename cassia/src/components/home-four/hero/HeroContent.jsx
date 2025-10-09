import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../assets/images/logo/cassia-logo-red.png";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";
import { useEffect, useState } from "react";

function HeroContent() {
	const [styles, setStyles] = useState({
		logoWidth: "350px",
		subtitleSize: "28px",
		buttonPadding: "14px 28px",
		buttonFontSize: "18px",
		spacing: "40px"
	});

	const [hoveredButton, setHoveredButton] = useState(null);

	const navigate = useNavigate();

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 480) {
				setStyles({
					logoWidth: "180px",
					subtitleSize: "20px",
					buttonPadding: "8px 24px",
					buttonFontSize: "16px",
					spacing: "15px"
				});
			} else if (window.innerWidth <= 768) {
				setStyles({
					logoWidth: "220px",
					subtitleSize: "24px",
					buttonPadding: "9px 26px",
					buttonFontSize: "17px",
					spacing: "20px"
				});
			} else {
				setStyles({
					logoWidth: "250px",
					subtitleSize: "28px",
					buttonPadding: "10px 28px",
					buttonFontSize: "18px",
					spacing: "25px"
				});
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const handleViewMenu = () => {
		navigate('/Menu');
	};

	const handleShare = () => {
		// Add share functionality here
		if (navigator.share) {
			navigator.share({
				title: 'Cassia Fine Dine Catering',
				text: 'Experience exceptional catering services',
				url: window.location.href,
			});
		} else {
			// Fallback for browsers that don't support Web Share API
			navigator.clipboard.writeText(window.location.href);
			alert('Link copied to clipboard!');
		}
	};

	return (
		<div style={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			textAlign: 'center',
			width: '100%',
			maxWidth: '800px'
		}}>
			<FadeInStaggerTwo style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
				width: '100%'
			}} duration={1.2}>
				{/* Centered Logo */}
				<FadeInStaggerTwoChildren>
					<div style={{ marginBottom: styles.spacing }}>
						<img 
							src={Logo} 
							alt="Cassia Fine Dine Catering" 
							style={{ 
								width: styles.logoWidth,
								height: "auto",
								objectFit: "contain",
								display: "block",
								margin: "0 auto"
							}} 
						/>
					</div>
				</FadeInStaggerTwoChildren>

				{/* Subtitle */}
				<FadeInStaggerTwoChildren>
					<div style={{ marginBottom: styles.spacing }}>
						<h2 style={{
							color: "#67162e",
							fontSize: "25px",
							fontFamily: "JustSans, sans-serif",
							fontWeight: "300",
							margin: "0 auto",
							maxWidth: "700px",
							lineHeight: "1.4",
							textAlign: "center"
						}}>
							{/* Exceptional catering services for every occasion */}
							Elevate your gatherings with Cassia's exquisite restaurant dining and bespoke catering to the guests of UAE.

						</h2>
					</div>
				</FadeInStaggerTwoChildren>

				{/* Buttons */}
				<FadeInStaggerTwoChildren>
					<div style={{
						display: "flex",
						gap: window.innerWidth <= 480 ? "15px" : "20px",
						justifyContent: "center",
						alignItems: "center",
						flexWrap: "wrap"
					}}>
						{/* View Menu Button */}
						<button
							onClick={handleViewMenu}
							onMouseEnter={() => setHoveredButton('menu')}
							onMouseLeave={() => setHoveredButton(null)}
							style={{
								backgroundColor: "#67162e",
								color: "#ffffff",
								padding: styles.buttonPadding,
								borderRadius: "8px",
								border: "none",
								fontFamily: "Mondia, sans-serif",
								fontSize: styles.buttonFontSize,
								fontWeight: "600",
								cursor: "pointer",
								transition: "all 0.3s ease",
								position: "relative",
								overflow: "hidden",
								width: "140px",
								transform: hoveredButton === 'menu' ? "translateY(-3px)" : "translateY(0)",
								background: hoveredButton === 'menu' 
									? "linear-gradient(135deg, #67162e 0%, #4a0f20 100%)"
									: "#67162e"
							}}
						>
							View Menu
						</button>

						{/* Share Button */}
						<button
							onClick={handleShare}
							onMouseEnter={() => setHoveredButton('share')}
							onMouseLeave={() => setHoveredButton(null)}
							style={{
								backgroundColor: "transparent",
								color: "#000000",
								padding: styles.buttonPadding,
								borderRadius: "8px",
								border: "2px solid #67162e",
								fontFamily: "Mondia, sans-serif",
								fontSize: styles.buttonFontSize,
								fontWeight: "600",
								cursor: "pointer",
								transition: "all 0.3s ease",
								position: "relative",
								overflow: "hidden",
								width: "140px",
								transform: hoveredButton === 'share' ? "translateY(-3px)" : "translateY(0)",
								background: hoveredButton === 'share' 
									? "rgba(103, 22, 46, 0.1)"
									: "transparent"
							}}
						>
							<span style={{
								color: "#000000",
								transition: "color 0.3s ease"
							}}>
								Share
							</span>
						</button>
					</div>
				</FadeInStaggerTwoChildren>
			</FadeInStaggerTwo>
		</div>
	);
}

export default HeroContent;
