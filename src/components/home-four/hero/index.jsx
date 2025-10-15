// import HeroBg from "../../../assets/images/v4/hero-bg.png";
import HeroBg from "../../../assets/images/v4/hero.png";
import HeroContent from "./HeroContent";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
    const [arrowDown, setArrowDown] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => setArrowDown(true), 1200);
        return () => clearTimeout(timer);
    }, []);

    const handleScrollDown = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    };

    return (
        <div style={{ 
			backgroundImage: `url(${HeroBg})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			position: 'relative',
			overflow: 'hidden',
            height: '100vh',
            width: '100%',
			margin: '0',
			padding: '0'
		}}>
            <div className="hero-inner" style={{ 
				position: 'relative', 
				zIndex: 2,
                height: '100vh',
                width: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
                padding: '0 20px',
                overflow: 'hidden',
			}}>
				<HeroContent />
                {/* Scroll arrow */}
                <div
                    onClick={handleScrollDown}
                    className="scroll-arrow"
                    style={{
                        position: 'absolute',
                        bottom: '30px',
                        right: '30px',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        border: '2px solid #f4e2b4',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        background: '#67162e',
                        transition: 'all 0.4s ease',
                        animation: 'floatPulse 1.8s ease-in-out infinite',
                    }}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                            transition: 'transform 0.5s ease',
                            transform: arrowDown ? 'rotate(180deg)' : 'rotate(0deg)'
                        }}
                    >
                        <path
                            d="M12 19L12 5M12 5L5 12M12 5L19 12"
                            stroke="#f4e2b4"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
			</div>
            {/* Keyframes and responsive styles */}
            <style>{`
                @keyframes floatPulse {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(-6px); }
                    100% { transform: translateY(0); }
                }

                /* Mobile responsive styles */
                @media (max-width: 768px) {
                    .hero-inner { padding: 0 12px !important; }
                    .scroll-arrow {
                        bottom: 20px !important;
                        right: 20px !important;
                        width: 40px !important;
                        height: 40px !important;
                    }
                    
                    .scroll-arrow svg {
                        width: 20px !important;
                        height: 20px !important;
                    }
                }

                @media (max-width: 480px) {
                    .hero-inner { padding: 0 10px !important; }
                    .scroll-arrow {
                        bottom: 15px !important;
                        right: 15px !important;
                        width: 36px !important;
                        height: 36px !important;
                    }
                    
                    .scroll-arrow svg {
                        width: 18px !important;
                        height: 18px !important;
                    }
                }
            `}</style>
		</div>
	);
}

export default Hero;