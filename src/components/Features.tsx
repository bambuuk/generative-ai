import { FC } from 'react';
import { styled } from '@mui/material';
import { nanoid } from 'nanoid';
import { motion } from 'framer-motion';
import { CustomContainer, Title, Overview } from './CustomElements';
import { featuresList } from '../constants';
import FeatureItem from './FeatureItem';
import star from '../assets/backgroundFigures/star.png';
import { textAnimation } from '../assets/animation';

const FeaturesUI = styled('section')({
	width: '100%',
});

const FeaturesWrapper = styled('div')(({}) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
}));

const CustomTitle = styled(Title)(({ theme }) => ({
	display: 'flex',
	[theme.breakpoints.down('md')]: {
		fontSize: '32px',
		lineHeight: '40px',
	},
	[theme.breakpoints.down('sm')]: {
		justifyContent: 'center',
		flexWrap: 'wrap',
		fontSize: '26px',
		lineHeight: '35px',
	},
}));

const GradientTitle = styled('div')(({ theme }) => ({
	background: 'linear-gradient(100deg, #391F6F 15.2%, #CE1AFE 104.12%)',
	backgroundClip: 'text',
	WebkitBackgroundClip: 'text',
	WebkitTextFillColor: 'transparent',
	color: '#E2E2E2',
	fontFamily: 'Anton',
	fontSize: '48px',
	fontWeight: '400',
	lineHeight: '60px',
	[theme.breakpoints.down('md')]: {
		fontSize: '32px',
		lineHeight: '40px',
	},
	[theme.breakpoints.down('sm')]: {
		fontSize: '26px',
		lineHeight: '35px',
	},
}));

const FeaturesCardList = styled('div')(({ theme }) => ({
	position: 'relative',
	marginTop: '88px',
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 400px)',
	gridTemplateRows: 'repeat(2, 1fr)',
	gridAutoRows: '1fr',
	gap: '20px',
	[theme.breakpoints.down(1300)]: {
		gridTemplateColumns: 'repeat(2, 400px)',
	},
	[theme.breakpoints.down('md')]: {
		gridTemplateColumns: 'minmax(200px, 400px)',
	},
}));

const GradientsBlock = styled('div')(({ theme }) => ({
	position: 'absolute',
	zIndex: '-10',
	top: '380px',
	left: '100px',
	maxWidth: '992.516px',
	maxHeight: '968px',
	width: '100%',
	height: '100%',
	transform: 'rotate(-55.229deg)',
	filter: 'blur(327px)',
	[theme.breakpoints.down(1300)]: {
		maxWidth: '893px',
		maxHeight: '872px',
	},
	[theme.breakpoints.down('lg')]: {
		maxWidth: '659px',
		maxHeight: '631px',
	},
	[theme.breakpoints.down('md')]: {
		maxWidth: '359px',
		maxHeight: '331px',
	},
}));

const SecondGradientsBlock = styled('div')(({ theme }) => ({
	display: 'none',
	position: 'static',
	zIndex: '-10',
	top: '1780px',
	left: '100px',
	maxWidth: '992.516px',
	maxHeight: '968px',
	width: '100%',
	height: '100%',
	transform: 'rotate(-55.229deg)',
	filter: 'blur(327px)',
	[theme.breakpoints.down('md')]: {
		display: 'block',
		position: 'absolute',
		maxWidth: '359px',
		maxHeight: '331px',
	},
}));

const Vector = styled('div')({
	display: 'block',
	position: 'absolute',
	width: '100%',
	height: '100%',
});

const FirstVector = styled(Vector)({
	maxWidth: '515.075px',
	maxHeight: '585.58px',
	backgroundColor: '#3D32F9',
	top: 0,
	right: '110px',
});

const SecondVector = styled(Vector)({
	maxWidth: '560.633px',
	maxHeight: '533.336px',
	backgroundColor: '#391F6F',
	bottom: 0,
	right: 0,
});

const ThirdVector = styled(Vector)({
	maxWidth: '552.022px',
	maxHeight: '589.882px',
	backgroundColor: '#CE1AFE',
	bottom: 0,
	left: 0,
});

const StarImg = styled('img')(({ theme }) => ({
	position: 'absolute',
	right: '-50px',
	top: '50%',
	transform: 'translateY(-50%) rotate(7.108deg)',
	zIndex: '-1',
	width: '121.909px',
	height: '121.909px',
	[theme.breakpoints.down(1400)]: {
		right: '-25px',
	},
	[theme.breakpoints.down('lg')]: {
		right: '-50px',
	},
}));

const MCustomTitle = motion(CustomTitle);
const MOverview = motion(Overview);

const Features: FC = () => {
	return (
		<FeaturesUI id="features">
			<CustomContainer sx={{ position: 'relative' }}>
				<FeaturesWrapper>
					<MCustomTitle
						variants={textAnimation}
						custom={1}
						initial="hidden"
						whileInView="visible"
						viewport={{ amount: 0.2, once: true }}
					>
						How&nbsp;<GradientTitle>AI GENIUS</GradientTitle>&nbsp;improve your business?
					</MCustomTitle>
					<MOverview
						variants={textAnimation}
						custom={2}
						initial="hidden"
						whileInView="visible"
						viewport={{ amount: 0.2, once: true }}
					>
						Discover how we simplify the process of creating your own AI-as-a-service platform with
						its advanced, user friendly features
					</MOverview>
					<FeaturesCardList>
						<StarImg src={star} />
						{featuresList.map(({ img, title, text }) => {
							return <FeatureItem key={nanoid()} img={img} title={title} text={text} />;
						})}
					</FeaturesCardList>
				</FeaturesWrapper>

				<GradientsBlock>
					<FirstVector />
					<SecondVector />
					<ThirdVector />
				</GradientsBlock>
				<SecondGradientsBlock>
					<FirstVector />
					<SecondVector />
					<ThirdVector />
				</SecondGradientsBlock>
			</CustomContainer>
		</FeaturesUI>
	);
};

export default Features;
