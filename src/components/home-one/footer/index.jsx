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
					<div className="row g-4 align-items-start">
						<div className="col-lg-7 order-1 order-lg-1">
							<h2 style={{
								fontFamily: 'Mondia, serif',
								fontSize: '48px',
								marginBottom: '30px',
								color: '#f4e2b4',
								lineHeight: '1.2'
							}}>
								Ready to get cooking?
							</h2>
							<p style={{
								fontFamily: 'JustSans, sans-serif',
								fontSize: '18px',
								marginBottom: '40px',
								color: '#f4e2b4',
								lineHeight: '1.6',
								maxWidth: '500px'
							}}>
								For us to understand your need, Send us a message 
							</p>
							<div className="d-none d-lg-block">
								<FooterContent />
							</div>
						</div>
						<div className="col-lg-5 order-2 order-lg-2">
							<div style={{
								backgroundColor: "#fffbe6",
								padding: "40px",
								borderRadius: "25px",
								"@media (max-width: 768px)": {
									padding: "30px 20px"
								}
							}}>
								<MessageForm />
							</div>
						</div>
						<div className="col-12 order-3 d-lg-none">
							<FooterContent />
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
