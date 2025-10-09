import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ErrorPage() {
	return (
		<div style={{
			minHeight: "100vh",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: "#67162e",
			padding: "20px"
		}}>
			<div style={{
				textAlign: "center",
				maxWidth: "600px"
			}}>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<h1 style={{
						fontSize: "120px",
						color: "#f4e2b4",
						margin: "0",
						fontFamily: "Mondia, serif",
						lineHeight: "1",
						"@media (max-width: 768px)": {
							fontSize: "80px"
						}
					}}>
						404
					</h1>
					
					<h2 style={{
						fontSize: "32px",
						color: "#ffffff",
						marginTop: "20px",
						marginBottom: "30px",
						fontFamily: "Mondia, serif",
						"@media (max-width: 768px)": {
							fontSize: "24px"
						}
					}}>
						Page Not Found
					</h2>

					<p style={{
						fontSize: "18px",
						color: "#ffffff",
						opacity: 0.9,
						marginBottom: "40px",
						fontFamily: "JustSans, sans-serif",
						lineHeight: "1.6",
						"@media (max-width: 768px)": {
							fontSize: "16px"
						}
					}}>
						We apologize, but the page you're looking for cannot be found. Please return to our homepage to continue exploring our luxury catering services.
					</p>

					<Link 
						to="/"
						style={{
							display: "inline-block",
							padding: "16px 40px",
							backgroundColor: "transparent",
							border: "2px solid #f4e2b4",
							color: "#f4e2b4",
							fontSize: "18px",
							fontFamily: "JustSans, sans-serif",
							textDecoration: "none",
							borderRadius: "30px",
							transition: "all 0.3s ease",
							"&:hover": {
								backgroundColor: "#f4e2b4",
								color: "#67162e"
							},
							"@media (max-width: 768px)": {
								padding: "14px 30px",
								fontSize: "16px"
							}
						}}
					>
						Return to Homepage
					</Link>
				</motion.div>

				{/* Decorative elements */}
				<div style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: "100%",
					maxWidth: "800px",
					height: "800px",
					background: "radial-gradient(circle, rgba(244, 226, 180, 0.05) 0%, rgba(244, 226, 180, 0) 70%)",
					pointerEvents: "none",
					zIndex: "0"
				}} />

				<div style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					background: "url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Ccircle cx=\"10\" cy=\"10\" r=\"1\" fill=\"%23f4e2b4\" fill-opacity=\"0.05\"/%3E%3C/svg%3E')",
					opacity: 0.5,
					pointerEvents: "none",
					zIndex: "0"
				}} />
			</div>
		</div>
	);
}

export default ErrorPage;
