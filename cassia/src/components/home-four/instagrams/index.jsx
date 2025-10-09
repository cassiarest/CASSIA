import InstaThumb1Img from "../../../assets/images/v4/Image-01.png";
import InstaThumb2Img from "../../../assets/images/v4/Image-02.png";
import InstaThumb3Img from "../../../assets/images/v4/Image-03.png";
import InstaThumb4Img from "../../../assets/images/v4/Image-04.png";
import InstaThumb5Img from "../../../assets/images/v4/Image-05.png";
import InstaThumb6Img from "../../../assets/images/v4/Image-06.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { useState, useEffect } from 'react';

const instagramsData = [
	{
		id: crypto.randomUUID(),
		handle: "@cassiafdc",
		img: InstaThumb1Img,
		caption: "Corporate Event Catering"
	},
	{
		id: crypto.randomUUID(),
		handle: "@cassiafdc",
		img: InstaThumb2Img,
		caption: "Fine Dining Experience"
	},
	{
		id: crypto.randomUUID(),
		handle: "@mthemeus",
		img: InstaThumb3Img,
		caption: "Outdoor Catering"
	},
	{
		id: crypto.randomUUID(),
		handle: "@mthemeus",
		img: InstaThumb4Img,
		caption: "Wedding Catering"
	},
	{
		id: crypto.randomUUID(),
		handle: "@mthemeus",
		img: InstaThumb5Img,
		caption: "Private Events"
	},
	{
		id: crypto.randomUUID(),
		handle: "@mthemeus",
		img: InstaThumb6Img,
		caption: "Corporate Lunches"
	},
	{
		id: crypto.randomUUID(),
		handle: "@mthemeus",
		img: InstaThumb1Img,
		caption: "Special Occasions"
	},
	{
		id: crypto.randomUUID(),
		handle: "@mthemeus",
		img: InstaThumb2Img,
		caption: "Business Meetings"
	},
	{
		id: crypto.randomUUID(),
		handle: "@mthemeus",
		img: InstaThumb3Img,
		caption: "Social Gatherings"
	},
	{
		id: crypto.randomUUID(),
		handle: "@mthemeus",
		img: InstaThumb4Img,
		caption: "Festive Events"
	},
	{
		id: crypto.randomUUID(),
		handle: "@mthemeus",
		img: InstaThumb5Img,
		caption: "Luxury Dining"
	},
];

function Instagrams() {
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const [styles, setStyles] = useState({
		padding: "80px 0",
		titleSize: "48px",
		subtitleSize: "20px",
		cardRadius: "20px",
		cardPadding: "25px",
		captionSize: "18px",
		handleSize: "16px"
	});

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 480) {
				setStyles({
					padding: "40px 0",
					titleSize: "32px",
					subtitleSize: "16px",
					cardRadius: "15px",
					cardPadding: "15px",
					captionSize: "16px",
					handleSize: "14px"
				});
			} else if (window.innerWidth <= 768) {
				setStyles({
					padding: "60px 0",
					titleSize: "36px",
					subtitleSize: "18px",
					cardRadius: "18px",
					cardPadding: "20px",
					captionSize: "17px",
					handleSize: "15px"
				});
			} else {
				setStyles({
					padding: "80px 0",
					titleSize: "48px",
					subtitleSize: "20px",
					cardRadius: "20px",
					cardPadding: "25px",
					captionSize: "18px",
					handleSize: "16px"
				});
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const swiperSettings = {
		modules: [Autoplay, EffectFade],
		loop: true,
		speed: 1000,
		spaceBetween: window.innerWidth <= 480 ? 10 : 20,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		breakpoints: {
			320: { slidesPerView: 1.2, centeredSlides: true },
			480: { slidesPerView: 1.5, centeredSlides: true },
			640: { slidesPerView: 2 },
			900: { slidesPerView: 3 },
			1200: { slidesPerView: 4 },
			1400: { slidesPerView: 5 }
		}
	};

	return (
		<div style={{
			padding: styles.padding,
			background: "#fffbe6",
			position: "relative",
			overflow: "hidden"
		}}>
			<div className="container" style={{ marginBottom: "40px" }}>
				<h2 style={{
					fontFamily: "Mondia, serif",
					fontSize: styles.titleSize,
					color: "#67162e",
					textAlign: "center",
					marginBottom: "20px"
				}}>
					Take a look through...
				</h2>
				<p style={{
					fontFamily: "JustSans, sans-serif",
					fontSize: styles.subtitleSize,
					color: "#67162e",
					textAlign: "center",
					maxWidth: "600px",
					margin: "0 auto"
				}}>
					Discover our recent events
				</p>
			</div>

			<Swiper {...swiperSettings}>
				{instagramsData.map((item, index) => (
					<SwiperSlide key={item.id}>
						<div 
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
							style={{
								position: "relative",
								borderRadius: styles.cardRadius,
								overflow: "hidden",
								aspectRatio: "1",
								cursor: "pointer",
								transform: hoveredIndex === index ? "scale(1.02)" : "scale(1)",
								transition: "all 0.3s ease",
								boxShadow: hoveredIndex === index ? 
									"0 20px 40px rgba(103, 22, 46, 0.15)" : 
									"0 10px 20px rgba(103, 22, 46, 0.1)"
							}}
						>
							<img 
								src={item.img} 
								alt={item.caption}
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
									transition: "transform 0.3s ease",
									transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)"
								}}
							/>
							
							{/* Bottom Shadow Overlay */}
							<div
								style={{
									position: "absolute",
									bottom: 0,
									left: 0,
									right: 0,
									height: "50%",
									background: `linear-gradient(to top, 
										rgba(0, 0, 0, ${hoveredIndex === index ? 0.7 : 0.5}) 0%, 
										rgba(0, 0, 0, 0) 100%)`,
									mixBlendMode: "multiply",
									transition: "all 0.3s ease"
								}}
							/>

							{/* Content Overlay */}
							<div
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
									display: "flex",
									flexDirection: "column",
									justifyContent: "flex-end",
									padding: styles.cardPadding,
									zIndex: 1,
									mixBlendMode: "normal"
								}}
							>
								<div style={{
									transform: hoveredIndex === index ? "translateY(0)" : "translateY(20px)",
									opacity: hoveredIndex === index ? 1 : 0.9,
									transition: "all 0.3s ease"
								}}>
									<h3 style={{
										color: "#f4e2b4",
										fontSize: styles.captionSize,
										fontFamily: "JustSans, sans-serif",
										marginBottom: "8px",
										textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
									}}>
										{item.caption}
									</h3>
									{/* <a 
										href="https://www.instagram.com/cassiafdc" 
										target="_blank"
										rel="noopener noreferrer"
										style={{
											color: "#fffbe6",
											fontSize: styles.handleSize,
											fontFamily: "JustSans, sans-serif",
											display: "flex",
											alignItems: "center",
											gap: "8px",
											textDecoration: "none",
											textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)"
										}}
									>
										@cassiafdc
									</a> */}
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default Instagrams;
