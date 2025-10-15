import LogoWhiteImg from "../../../assets/images/logo/cassia-logo.png";

function FooterBottom() {
	return (
		<>
			<div className="col-lg-6">
				<div style={{
					padding: "20px 0",
					"@media (max-width: 768px)": {
						padding: "10px 0",
						textAlign: "center"
					}
				}}>
					<a href="/" style={{
						display: "inline-block"
					}}>
						<img 
							src={LogoWhiteImg} 
							alt="Cassia Fine Dine Catering" 
							style={{
								height: "40px",
								filter: "brightness(0) invert(1) sepia(0.3) saturate(1.5) hue-rotate(-10deg)",
								"@media (max-width: 768px)": {
									height: "35px"
								}
							}}
						/>
					</a>
				</div>
			</div>
			<div className="col-lg-6">
				<div style={{
					textAlign: "right",
					padding: "20px 0",
					"@media (max-width: 768px)": {
						textAlign: "center",
						padding: "10px 0"
					}
				}}>
					<p style={{
						margin: 0,
						color: "#f4e2b4",
						fontFamily: "JustSans, sans-serif",
						fontSize: "16px",
						opacity: 0.9,
						"@media (max-width: 768px)": {
							fontSize: "14px"
						}
					}}>
						&copy; Copyright 2024, All Rights Reserved by Cassia Fine Dine Catering
					</p>
				</div>
			</div>
		</>
	);
}

export default FooterBottom;
