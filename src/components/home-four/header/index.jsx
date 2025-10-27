import { useState, useEffect } from 'react';
import HeaderLogo from "./HeaderLogo";
import HeaderButton from "./HeaderButton";

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isHeroVisible, setIsHeroVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            const viewportHeight = window.innerHeight;
            const heroHeight = viewportHeight; // 100vh
            
            const heroVisibleRatio = Math.max(0, 1 - (scrollTop / heroHeight));
            setIsHeroVisible(heroVisibleRatio >= 1.0);
            setIsScrolled(scrollTop > 50);
        };
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        handleScroll();
        handleResize();
        
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

	return (
        <header 
            className={`header-transition ${isScrolled ? "scrolled" : ""}`} 
            data-scrolled={isScrolled}
        >
            <div style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: isMobile ? "0 8px" : "0 16px",
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
                    gap: "8px"
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
                        minWidth: 0,
                        position: "relative",
                        zIndex: 1001
                    }}>
                        <HeaderButton />
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
