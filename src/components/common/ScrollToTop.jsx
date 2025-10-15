import { useEffect, useState } from "react";

export default function ScrollToTop() {
	const [showTopBtn, setShowTopBtn] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 700) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		showTopBtn && (
			<div 
				onClick={goToTop}
				style={{
					position: "fixed",
					bottom: "30px",
					right: "30px",
					width: "50px",
					height: "50px",
					backgroundColor: "#67162e",
					borderRadius: "50%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					cursor: "pointer",
					boxShadow: "0 4px 10px rgba(103, 22, 46, 0.2)",
					transition: "all 0.3s ease",
					opacity: showTopBtn ? 1 : 0,
					transform: `translateY(${showTopBtn ? '0' : '20px'})`,
					zIndex: 999,
					border: "2px solid #f4e2b4",
				}}
				onMouseEnter={(e) => {
					e.currentTarget.style.backgroundColor = "#7a1936";
					e.currentTarget.style.transform = "translateY(-3px)";
					e.currentTarget.style.boxShadow = "0 6px 15px rgba(103, 22, 46, 0.3)";
					e.currentTarget.style.borderColor = "#fffbe6";
				}}
				onMouseLeave={(e) => {
					e.currentTarget.style.backgroundColor = "#67162e";
					e.currentTarget.style.transform = "translateY(0)";
					e.currentTarget.style.boxShadow = "0 4px 10px rgba(103, 22, 46, 0.2)";
					e.currentTarget.style.borderColor = "#f4e2b4";
				}}
			>
				<div style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					width: "100%",
					height: "100%",
					padding: "12px"
				}}>
					<svg 
						width="24" 
						height="24" 
						viewBox="0 0 24 24" 
						fill="none" 
						xmlns="http://www.w3.org/2000/svg"
					>
						<path 
							d="M12 19L12 5M12 5L5 12M12 5L19 12" 
							stroke="#f4e2b4" 
							strokeWidth="2.5" 
							strokeLinecap="round" 
							strokeLinejoin="round"
						/>
					</svg>
				</div>
			</div>
		)
	);
}
