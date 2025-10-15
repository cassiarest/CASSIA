import Shape1Img from "../../../assets/images/v1/shape1.png";
import Star2Img from "../../../assets/images/v1/star2.png";
function FooterContent() {
	return (
		<div style={{
			position: 'relative',
			color: '#f4e2b4',
			padding: '20px 0'
		}}>
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
			
			<div style={{
				marginBottom: '40px'
			}}>
				<div style={{
					marginBottom: '20px'
				}}>
					<p style={{
						fontFamily: 'JustSans, sans-serif',
						fontSize: '16px',
						marginBottom: '5px',
						color: '#fffbe6'
					}}>Working Hours:</p>
					<p style={{
						fontFamily: 'JustSans, sans-serif',
						fontSize: '20px',
						color: '#f4e2b4',
						margin: '0'
					}}>
						Every day: 6:30 AM - 11:30 PM
					</p>
				</div>
				
				<div style={{
					marginBottom: '20px'
				}}>
					<p style={{
						fontFamily: 'JustSans, sans-serif',
						fontSize: '16px',
						marginBottom: '5px',
						color: '#fffbe6'
					}}>WhatsApp & Call:</p>
					<a href="tel:+971588031791" style={{
						fontFamily: 'JustSans, sans-serif',
						fontSize: '20px',
						color: '#f4e2b4',
						textDecoration: 'none',
						transition: 'color 0.3s ease'
					}}>
						+971588244120‬

					</a>
				</div>
				
				<div style={{
					marginBottom: '20px'
				}}>
					<p style={{
						fontFamily: 'JustSans, sans-serif',
						fontSize: '16px',
						marginBottom: '5px',
						color: '#fffbe6'
					}}>Visit Us:</p>
					<p style={{
						fontFamily: 'JustSans, sans-serif',
						fontSize: '18px',
						color: '#f4e2b4',
						lineHeight: '1.4',
						margin: '0',
						maxWidth: '400px'
					}}>
						Building No. 1, Khalifa Bin Zayed City
						<br />
						Al Daith Street, Ras Al Khaimah,
						UAE
					</p>
				</div>
				
				<div>
					<a href="mailto:cassiasocial1@gmail.com" style={{
						color: '#f4e2b4',
						fontSize: '24px',
						textDecoration: 'none',
						transition: 'color 0.3s ease'
					}} aria-label="Email">
						<i className="icon-message"></i>
					</a>
				</div>
			</div>

			<div style={{
				marginTop: '30px'
			}}>
				<p style={{
					fontFamily: 'JustSans, sans-serif',
					fontSize: '16px',
					marginBottom: '15px',
					color: '#fffbe6'
				}}>Follow Us:</p>
				<ul style={{
					display: 'flex',
					gap: '20px',
					listStyle: 'none',
					padding: 0,
					margin: 0
				}}>
					<li>
						<a href="https://www.instagram.com/cassiasocial1/?utm_source=ig_web_button_share_sheet" target="_blank" style={{
							color: '#f4e2b4',
							fontSize: '24px',
							transition: 'color 0.3s ease'
						}}>
							<i className="icon-instagram"></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default FooterContent;
