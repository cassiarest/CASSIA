import CountUp from "react-countup";

function AboutCounter() {
	return (
		<div style={{
			// background: "#ffffff",
			borderRadius: "30px",
			height: "100%",
			// boxShadow: "0 20px 40px rgba(103, 22, 46, 0.1)"
		}}>
			<div style={{
				display: "flex",
				flexDirection: "column",
				gap: "40px"
			}}>
				{/* Years of Experience */}
				<div style={{ textAlign: "center" }}>
					<h2 style={{
						color: "#67162e",
						fontFamily: "Mondia, serif",
						fontSize: "48px",
						marginBottom: "10px"
					}}>
						<CountUp end={30} duration={3} redraw={true} enableScrollSpy />+
					</h2>
					<p style={{
						color: "#67162e",
						fontFamily: "JustSans, sans-serif",
						fontSize: "18px",
						margin: 0
					}}>Years of Experience</p>
				</div>

				{/* Successful Events */}
				<div style={{ textAlign: "center" }}>
					<h2 style={{
						color: "#67162e",
						fontFamily: "Mondia, serif",
						fontSize: "48px",
						marginBottom: "10px"
					}}>
						<CountUp end={500} duration={3} redraw={true} enableScrollSpy />+
					</h2>
					<p style={{
						color: "#67162e",
						fontFamily: "JustSans, sans-serif",
						fontSize: "18px",
						margin: 0
					}}>Events Catered</p>
				</div>

				{/* Client Satisfaction */}
				<div style={{ textAlign: "center" }}>
					<h2 style={{
						color: "#67162e",
						fontFamily: "Mondia, serif",
						fontSize: "48px",
						marginBottom: "10px"
					}}>
						<CountUp end={100} duration={3} redraw={true} enableScrollSpy />%
					</h2>
					<p style={{
						color: "#67162e",
						fontFamily: "JustSans, sans-serif",
						fontSize: "18px",
						margin: 0
					}}>Client Satisfaction</p>
				</div>

				{/* People Served Daily */}
				<div style={{ textAlign: "center" }}>
					<h2 style={{
						color: "#67162e",
						fontFamily: "Mondia, serif",
						fontSize: "48px",
						marginBottom: "10px"
					}}>
						<CountUp end={1500} duration={3} redraw={true} enableScrollSpy />+
					</h2>
					<p style={{
						color: "#67162e",
						fontFamily: "JustSans, sans-serif",
						fontSize: "18px",
						margin: 0
					}}>People served 3 times daily</p>
				</div>
			</div>
		</div>
	);
}

export default AboutCounter;
