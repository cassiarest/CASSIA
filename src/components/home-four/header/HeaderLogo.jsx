import { Link, useLocation } from "react-router-dom";
// import Logo from "../../../assets/images/logo/logo-dark.svg";
import Logo from "../../../assets/images/logo/cassia-logo-red.png";
import GoldenLogo from "../../../assets/images/logo/cassia-logo.png";
import { useState, useEffect } from "react";

function HeaderLogo() {
    const [logoWidth, setLogoWidth] = useState("140px");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
	const location = useLocation();

	// Check if we're on the Menu route
	const isMenuRoute = location.pathname === '/Menu';

	useEffect(() => {
        const handleResize = () => {
			const w = window.innerWidth;
			if (w <= 768) {
				setLogoWidth("97px");
			} else {
				setLogoWidth("188px");
			}
            setIsMobile(w <= 768);
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

    return (
        <div className="brand-logo" style={{
            display: "flex",
            alignItems: "center", 
            flexShrink: 0,
            padding: "0",
            marginRight: isMobile ? "8px" : "35px"
        }}>
			<Link to="/" style={{
				display: "flex",
				alignItems: "center",
				textDecoration: "none"
			}}>
				<img 
					src={isMenuRoute ? GoldenLogo : Logo} 
					alt="Cassia Fine Dine Catering" 
					className="light-version-logo" 
					style={{ 
						width: logoWidth,
						height: "auto",
						objectFit: "contain",
						transition: "all 0.3s ease",
						display: "block",
						// border: "1px solid red"
					}} 
				/>
			</Link>
		</div>
	);
}

export default HeaderLogo;
