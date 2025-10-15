import { useState, useEffect } from "react";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setIsScrolled(scrollTop > 50);
		};
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
		
		return () => {
			window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
        <header style={{
			position: "fixed",
			top: "0",
			left: "0",
			right: "0",
			zIndex: 1000,
			backgroundColor: isScrolled ? "#ffffff" : "rgba(255,255,255,0.0)",
			boxShadow: isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
			transition: "all 0.3s ease",
			width: "100%",
            padding: "0"
		}}>
			<div style={{
				maxWidth: "1200px",
				margin: "0 auto",
                padding: isMobile ? "0 12px" : "0 16px",
				width: "100%",
				boxSizing: "border-box"
			}}>
                <nav style={{
					backgroundColor: "transparent",
                    padding: isMobile ? "6px 0" : "8px 0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    position: "relative",
                    margin: "0",
                    boxSizing: "border-box",
                    overflowX: "hidden"
                }}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        flexShrink: 0,
                        minWidth: 0
                    }}>
						<HeaderLogo />
					</div>
					
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        flexShrink: 0,
                        marginLeft: "auto",
                        minWidth: 0
                    }}>
						<HeaderButton />
					</div>
				</nav>
			</div>
		</header>
	);
}

export default Header;
