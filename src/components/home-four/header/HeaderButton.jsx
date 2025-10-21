import { useState, useEffect } from 'react';
import BargerMenuImg from "../../../assets/images/v4/barger-menu.svg";

function HeaderButton() {
	const [buttonStyle, setButtonStyle] = useState({
		padding: "10px 20px",
		fontSize: "16px",
		borderRadius: "20px",
		visible: true
	});

	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			const w = window.innerWidth;
			if (w <= 360) {
				setButtonStyle({ padding: "4px 10px", fontSize: "12px", borderRadius: "10px", visible: false });
			} else if (w <= 480) {
				setButtonStyle({ padding: "5px 12px", fontSize: "13px", borderRadius: "12px", visible: false });
			} else if (w <= 768) {
				setButtonStyle({ padding: "6px 16px", fontSize: "14px", borderRadius: "14px", visible: true });
			} else {
				setButtonStyle({ padding: "7px 20px", fontSize: "16px", borderRadius: "20px", visible: true });
			}
		};

		const handleScroll = () => {
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
			const scrolled = scrollTop > 100;
			setIsScrolled(scrolled);
		};

		handleResize();
		handleScroll(); // Check initial scroll position

		// Add scroll listeners to multiple elements for better compatibility
		window.addEventListener('resize', handleResize);
		window.addEventListener('scroll', handleScroll, { passive: true });
		document.addEventListener('scroll', handleScroll, { passive: true });
		document.body.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('scroll', handleScroll);
			document.removeEventListener('scroll', handleScroll);
			document.body.removeEventListener('scroll', handleScroll);
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
			display: buttonStyle.visible ? "flex" : "none",
			alignItems: "center",
			flexShrink: 0,
			marginLeft: "12px"
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
					transition: "all 0.4s ease",
					outline: "none",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					boxShadow: isScrolled ? "0 4px 15px rgba(103, 22, 46, 0.3)" : "none"
				}}
				onMouseEnter={(e) => {
					if (isScrolled) {
						e.target.style.backgroundColor = "#8b1e3a";
						e.target.style.borderColor = "#8b1e3a";
						e.target.style.transform = "translateY(-2px)";
						e.target.style.boxShadow = "0 6px 20px rgba(103, 22, 46, 0.4)";
					} else {
						e.target.style.backgroundColor = "#f4e2b4";
						e.target.style.color = "#67162e";
						e.target.style.borderColor = "#f4e2b4";
						e.target.style.transform = "translateY(-2px)";
						e.target.style.boxShadow = "0 6px 20px rgba(244, 226, 180, 0.3)";
					}
				}}
				onMouseLeave={(e) => {
					e.target.style.backgroundColor = isScrolled ? "#67162e" : "transparent";
					e.target.style.color = isScrolled ? "#f4e2b4" : "#ffffff";
					e.target.style.borderColor = isScrolled ? "#67162e" : "#ffffff";
					e.target.style.transform = "translateY(0)";
					e.target.style.boxShadow = isScrolled ? "0 4px 15px rgba(103, 22, 46, 0.3)" : "none";
				}}
			>
				{/* <img src={BargerMenuImg} alt="BargerMenuImg" /> */}
				Get a Quote 	
			</button>
		</div>
	);
}

export default HeaderButton;
