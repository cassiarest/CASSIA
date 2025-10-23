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
			zIndex: 9999,
			opacity: isLoaded ? 0 : 1,
			transition: "opacity 0.5s ease"
		}}>
		</div>
	);
}
