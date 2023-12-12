import { FC } from 'react';
import { styled } from '@mui/material';
import { CustomContainer, Title, Overview } from './CustomElements';
import circleImg from '../assets/pictures/solution/main-picture.png';
import lightningImg from '../assets/pictures/solution/lightning.png';
import diamondImg from '../assets/pictures/solution/diamond.png';
import { rotate, reverseRotate } from '../assets/keyframes/keyframes';
import { motion } from 'framer-motion';
import { textAnimation } from '../assets/animation';

const SolutionUI = styled('section')({
	width: '100%',
	position: 'relative',
});

const MainWrapper = styled('div')(({}) => ({
	display: 'flex',
	flexDirection: 'column',
	alignContent: 'center',
	position: 'relative',
}));

const CirclesWrapper = styled('div')(({ theme }) => ({
	animation: `${rotate} 10s linear infinite`,
	margin: '0 auto',
	marginTop: '100px',
	padding: '0 42px 0 42px',
	position: 'relative',
	[theme.breakpoints.down('sm')]: {
		marginTop: '60px',
		padding: '0',
	},
}));

const FirstCircle = styled('div')(({ theme }) => ({
	width: '625px',
	height: '625px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	borderRadius: '50%',
	border: '42px solid #391F6F',
	[theme.breakpoints.down('md')]: {
		width: '437px',
		height: '447px',
	},
	[theme.breakpoints.down('sm')]: {
		width: '218px',
		height: '223px',
		border: '12px solid #391F6F',
	},
}));

const SecondCircle = styled('div')(({ theme }) => ({
	width: '424px',
	height: '424px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	borderRadius: '50%',
	border: '42px solid #391F6F',
	[theme.breakpoints.down('md')]: {
		width: '296px',
		height: '303px',
	},
	[theme.breakpoints.down('sm')]: {
		width: '148px',
		height: '151px',
		border: '12px solid #391F6F',
	},
}));

const CircleImg = styled('img')(({ theme }) => ({
	animation: `${reverseRotate} 10s linear infinite`,
	display: 'block',
	width: '303px',
	height: '259px',
	objectFit: 'contain',
	[theme.breakpoints.down('md')]: {
		width: '212px',
		height: '312px',
	},
	[theme.breakpoints.down('sm')]: {
		width: '106px',
		height: '156px',
	},
}));

const LightningImage = styled('img')(({ theme }) => ({
	position: 'absolute',
	left: '270px',
	top: '-120.553px',
	[theme.breakpoints.down('sm')]: {
		width: '30%',
		top: '-120.553px',
		left: '20px',
	},
}));

const DiamondImage = styled('img')(({ theme }) => ({
	position: 'absolute',
	left: '173px',
	bottom: '90px',
	[theme.breakpoints.down('lg')]: {
		left: '0',
		bottom: '0',
	},
	[theme.breakpoints.down('md')]: {
		width: '121px',
		height: '111px',
		bottom: '-80px',
	},
	[theme.breakpoints.down('sm')]: {
		display: 'none',
	},
}));

const SolutionFeature = styled('div')(({ theme }) => ({
	animation: `${reverseRotate} 10s linear infinite`,
	position: 'absolute',
	color: '#E2E2E2',
	textAlign: 'center',
	fontFamily: 'Work Sans',
	fontSize: '25px',
	fontWeight: '600',
	lineHeight: '30px',
	[theme.breakpoints.down('md')]: {
		fontSize: '20px',
	},
	[theme.breakpoints.down('sm')]: {
		fontSize: '12px',
	},
}));

const Agriculture = styled(SolutionFeature)(({ theme }) => ({
	top: '10px',
	left: '50%',
	transform: 'translateX(-50%)',
	[theme.breakpoints.down('md')]: {
		top: '7px',
	},
	[theme.breakpoints.down('sm')]: {
		top: '3.5px',
	},
}));

const Manufacturing = styled(SolutionFeature)(({ theme }) => ({
	top: '103px',
	right: '77px',
	[theme.breakpoints.down('md')]: {
		top: '72px',
		right: '54px',
	},
	[theme.breakpoints.down('sm')]: {
		top: '35.5px',
		right: '27px',
	},
}));

const Education = styled(SolutionFeature)(({ theme }) => ({
	top: '277px',
	right: '125px',
	[theme.breakpoints.down('md')]: {
		top: '193px',
		right: '87px',
	},
	[theme.breakpoints.down('sm')]: {
		top: '94px',
		right: '5px',
	},
}));

const Finance = styled(SolutionFeature)(({ theme }) => ({
	bottom: '9px',
	right: '245px',
	[theme.breakpoints.down('md')]: {
		right: '171px',
	},
	[theme.breakpoints.down('sm')]: {
		bottom: '0',
		right: '85px',
	},
}));

const ECommerce = styled(SolutionFeature)(({ theme }) => ({
	bottom: '163px',
	left: '132px',
	[theme.breakpoints.down('md')]: {
		bottom: '114px',
		left: '51px',
	},
	[theme.breakpoints.down('md')]: {
		bottom: '56px',
		left: '25px',
	},
}));

const Healthcare = styled(SolutionFeature)(({ theme }) => ({
	top: '199px',
	left: '0',
	[theme.breakpoints.down('md')]: {
		top: '139px',
	},
	[theme.breakpoints.down('sm')]: {
		top: '70px',
	},
}));

const GradientsBlock = styled('div')(({ theme }) => ({
	position: 'absolute',
	zIndex: '-10',
	top: '-100px',
	left: '55%',
	maxWidth: '692.442px',
	maxHeight: '675.338px',
	width: '100%',
	height: '100%',
	transform: 'rotate(-55.229deg)',
	filter: 'blur(207px)',
	[theme.breakpoints.down('lg')]: {
		maxWidth: '659px',
		maxHeight: '631px',
	},
	[theme.breakpoints.down('md')]: {
		maxWidth: '359px',
		maxHeight: '331px',
	},
}));

const Vector = styled('div')({
	display: 'block',
	position: 'absolute',
});

const FirstVector = styled(Vector)({
	backgroundColor: '#3D32F9',
	width: '515.075px',
	height: '585.58px',
	bottom: '15%',
	right: '10%',
});

const SecondVector = styled(Vector)({
	backgroundColor: '#391F6F',
	width: '560.633px',
	height: '533.336px',
	bottom: 0,
	right: 0,
});

const ThirdVector = styled(Vector)({
	backgroundColor: '#CE1AFE',
	width: '552.022px',
	height: '589.882px',
	bottom: '-10%',
	left: 0,
});

const MTitle = motion(Title);
const MOverview = motion(Overview);
const MFirstCircle = motion(FirstCircle);
const MAgriculture = motion(Agriculture);
const MManufacturing = motion(Manufacturing);
const MEducation = motion(Education);
const MFinance = motion(Finance);
const MECommerce = motion(ECommerce);
const MHealthcare = motion(Healthcare);
const MCirclesWrapper = motion(CirclesWrapper);

const solutionsAnimation = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: { delay: 0.5, duration: 1 },
	},
};

const Solution: FC = () => {
	return (
		<SolutionUI id="solution">
			<LightningImage src={lightningImg} />
			<CustomContainer>
				<MainWrapper>
					<MTitle
						variants={textAnimation}
						custom={1}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						Solution
					</MTitle>
					<MOverview
						variants={textAnimation}
						custom={2}
						initial="hidden"
						whileInView="visible"
						viewport={{ amount: 0.2, once: true }}
					>
						Our AI Service is designed to revolutionize a variety of industries and solve critical
						challenges. Whether you're in healthcare, e-commerce, finance, or any other sector, our
						technology offers tailored solutions to meet your unique needs
					</MOverview>
					<MCirclesWrapper
						variants={solutionsAnimation}
						custom={1}
						initial="hidden"
						whileInView="visible"
						viewport={{ amount: 0.2, once: true }}
					>
						<MFirstCircle>
							<SecondCircle>
								<CircleImg src={circleImg} />
							</SecondCircle>
						</MFirstCircle>
						<MAgriculture>Agriculture</MAgriculture>
						<MManufacturing>Manufacturing</MManufacturing>
						<MEducation>Education</MEducation>
						<MFinance>Finance</MFinance>
						<MECommerce>E-commerce</MECommerce>
						<MHealthcare>Healthcare</MHealthcare>
					</MCirclesWrapper>
					<GradientsBlock>
						<FirstVector />
						<SecondVector />
						<ThirdVector />
					</GradientsBlock>
				</MainWrapper>
			</CustomContainer>
			<DiamondImage src={diamondImg} />
		</SolutionUI>
	);
};

export default Solution;
