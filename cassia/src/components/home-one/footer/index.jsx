import FooterBottom from "./FooterBottom";
import FooterContent from "./FooterContent";
import MessageForm from "./MessageForm";

function Footer() {
	return (
		<footer id="contact" style={{
			backgroundColor: "#67162e",
			padding: "60px 0 30px",
			color: "#f4e2b4",
			"@media (max-width: 768px)": {
				padding: "40px 0 20px"
			}
		}}>
			<div className="container">
				<div style={{
					paddingBottom: "40px",
					"@media (max-width: 768px)": {
						paddingBottom: "30px"
					}
				}}>
					<div className="row g-4">
						<div className="col-lg-7">
							<FooterContent />
						</div>
						<div className="col-lg-5">
							<div style={{
								backgroundColor: "#fffbe6",
								padding: "40px",
								borderRadius: "25px",
								"@media (max-width: 768px)": {
									padding: "30px 20px"
								}
							}}>
								<h4 style={{
									color: "#67162e",
									fontSize: "32px",
									fontWeight: "600",
									marginBottom: "30px",
									fontFamily: "Mondia, serif",
									"@media (max-width: 768px)": {
										fontSize: "28px",
										marginBottom: "20px",
										textAlign: "center"
									}
								}}>Send us a message</h4>
								<MessageForm />
							</div>
						</div>
					</div>
				</div>
				<div style={{
					borderTop: "1px solid rgba(244, 226, 180, 0.2)",
					paddingTop: "30px",
					"@media (max-width: 768px)": {
						paddingTop: "20px"
					}
				}}>
					<div className="row">
						<FooterBottom />
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
