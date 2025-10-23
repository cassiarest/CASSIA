import { useEffect, useState } from "react";

export default function Preloader() {
	const [showLoader, setShowLoader] = useState(true);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		// Handle screen size
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth < 340);
		};
		handleResize();
		window.addEventListener('resize', handleResize);

		// Handle the load event
		const handleLoad = () => {
			setIsLoaded(true);
		};
		window.addEventListener("load", handleLoad);

		// Set a timeout to hide the loader
		const timer = setTimeout(() => {
			setShowLoader(false);
		}, 700);

		return () => {
			window.removeEventListener("load", handleLoad);
			window.removeEventListener('resize', handleResize);
			clearTimeout(timer);
		};
	}, []);

	if (!showLoader) return null;

	return (
		<div style={{
			position: "fixed",
			top: 0,
			left: 0,
			width: "100vw",
			height: "100vh",
			backgroundColor: "#67162e",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			zIndex: 9999,
			opacity: isLoaded ? 0 : 1,
			transition: "opacity 0.5s ease",
			transform: "translateZ(0)",
			WebkitTransform: "translateZ(0)",
			WebkitBackfaceVisibility: "hidden",
			backfaceVisibility: "hidden"
		}}>
			{/* Hide loading animation on mobile, show only on desktop */}
			<div style={{
				display: window.innerWidth <= 768 ? "none" : "flex",
				gap: isSmallScreen ? "8px" : "15px",
				alignItems: "center",
				justifyContent: "center",
				transform: "translateZ(0)",
				WebkitTransform: "translateZ(0)",
				WebkitBackfaceVisibility: "hidden",
				backfaceVisibility: "hidden",
				padding: "10px"
			}}>
				{[1, 2, 3, 4].map((index) => (
					<div
						key={index}
						style={{
							width: isSmallScreen ? "12px" : "20px",
							height: isSmallScreen ? "12px" : "20px",
							backgroundColor: "#f4e2b4",
							borderRadius: "50%",
							animation: `loaderDot 1s infinite ease-in-out ${index * 0.2}s`,
							transform: "translateZ(0)",
							WebkitTransform: "translateZ(0)",
							WebkitBackfaceVisibility: "hidden",
							backfaceVisibility: "hidden"
						}}
					/>
				))}
			</div>
			<style>
				{`
					@keyframes loaderDot {
						0%, 100% {
							transform: scale(0.3);
							opacity: 0.3;
						}
						50% {
							transform: scale(1);
							opacity: 1;
						}
					}
				`}
			</style>
		</div>
	);
}
