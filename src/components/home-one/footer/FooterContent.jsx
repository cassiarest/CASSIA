import Shape1Img from "../../../assets/images/v1/shape1.png";
import Star2Img from "../../../assets/images/v1/star2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
function FooterContent() {
	return (
		<div style={{
			position: 'relative',
			color: '#f4e2b4',
			padding: '20px 0'
		}}>
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
						Al Daith Street, Ras Al Khaimah,
						UAE
					</p>
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
				}}>Contact Us:</p>
				<ul style={{
					display: 'flex',
					gap: '20px',
					listStyle: 'none',
					padding: 0,
					margin: 0,
					alignItems: 'center'
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
					<li>
						<a href="mailto:cassiasocial1@gmail.com" style={{
							color: '#f4e2b4',
							fontSize: '24px',
							textDecoration: 'none',
							transition: 'color 0.3s ease'
						}} aria-label="Email">
							<i className="icon-message"></i>
						</a>
					</li>
					<li>
						<a href="https://wa.me/971588244120" target="_blank" rel="noopener noreferrer" style={{
							display: 'inline-block',
							transition: 'transform 0.3s ease, color 0.3s ease',
							textDecoration: 'none'
						}} onMouseEnter={(e) => {
							e.target.style.transform = 'scale(1.1)';
							e.target.style.color = '#25D366';
						}} onMouseLeave={(e) => {
							e.target.style.transform = 'scale(1)';
							e.target.style.color = '#f4e2b4';
						}}>
							<FontAwesomeIcon 
								icon={faWhatsapp} 
								style={{
									fontSize: '24px',
									color: '#f4e2b4',
									transition: 'color 0.3s ease'
								}}
							/>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default FooterContent;
