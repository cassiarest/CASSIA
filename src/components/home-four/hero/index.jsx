// import HeroBg from "../../../assets/images/v4/hero-bg.png";
import HeroBg from "../../../assets/images/v4/hero.png";
import HeroContent from "./HeroContent";

function Hero() {
	return (
		<div  style={{ 
			backgroundImage: `url(${HeroBg})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			position: 'relative',
			overflow: 'hidden',
			height: '100vh',
			width: '100%',
			margin: '0',
			padding: '0'
		}}>
			<div style={{ 
				position: 'relative', 
				zIndex: 2,
				height: '100vh',
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '0 20px'
			}}>
				<HeroContent />
			</div>
		</div>
	);
}

export default Hero;
