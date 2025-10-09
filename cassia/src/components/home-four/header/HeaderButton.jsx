import { useState, useEffect } from 'react';
import BargerMenuImg from "../../../assets/images/v4/barger-menu.svg";

function HeaderButton() {
	const [buttonStyle, setButtonStyle] = useState({
		padding: "10px 20px",
		fontSize: "16px",
		borderRadius: "20px"
	});

	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 480) {
				setButtonStyle({
					padding: "5px 15px",
					fontSize: "14px",
					borderRadius: "15px"
				});
			} else if (window.innerWidth <= 768) {
				setButtonStyle({
					padding: "6px 18px",
					fontSize: "15px",
					borderRadius: "18px"
				});
			} else {
				setButtonStyle({
					padding: "7px 20px",
					fontSize: "16px",
					borderRadius: "20px"
				});
			}
		};

		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setIsScrolled(scrollTop > 50);
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const scrollToContact = () => {
		const contactSection = document.getElementById('contact');
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div className="header-btn" style={{
			display: "flex",
			alignItems: "center",
			flexShrink: 0
		}}>
			<button
				// className="aximo-default-btn aximo-header-btn outline-btn pill barger-menu"
				onClick={scrollToContact}
				style={{ 
					backgroundColor: isScrolled ? "#67162e" : "transparent", 
					color: isScrolled ? "#f4e2b4" : "#ffffff", 
					// borderRadius: buttonStyle.borderRadius, 
					borderRadius: "8px",
					padding: buttonStyle.padding, 
					fontFamily: "JustSans, sans-serif",
					fontSize: buttonStyle.fontSize,
					fontWeight: "600",
					border: isScrolled ? "2px solid #67162e" : "2px solid #ffffff",
					cursor: "pointer",
					whiteSpace: "nowrap",
					transition: "all 0.3s ease",
					outline: "none",
					display: "flex",
					alignItems: "center",
					justifyContent: "center"
				}}
				onMouseEnter={(e) => {
					if (isScrolled) {
						e.target.style.backgroundColor = "#8b1e3f";
						e.target.style.borderColor = "#8b1e3f";
					} else {
						e.target.style.backgroundColor = "#ffffff";
						e.target.style.color = "#67162e";
						e.target.style.borderColor = "#ffffff";
					}
				}}
				onMouseLeave={(e) => {
					e.target.style.backgroundColor = isScrolled ? "#67162e" : "transparent";
					e.target.style.color = isScrolled ? "#f4e2b4" : "#ffffff";
					e.target.style.borderColor = isScrolled ? "#67162e" : "#ffffff";
				}}
			>
				{/* <img src={BargerMenuImg} alt="BargerMenuImg" /> */}
				Get a Quote 	
			</button>
		</div>
	);
}

export default HeaderButton;
