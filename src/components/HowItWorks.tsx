import { FC } from 'react';
import { styled } from '@mui/material';
import { nanoid } from 'nanoid';
import { CustomContainer, Title, Overview } from './CustomElements';
import { descriptionList } from '../constants';
import { textAnimation } from '../assets/animation';
import { motion } from 'framer-motion';

const HowItWorksUI = styled('section')({
	width: '100%',
});

const MainWrapper = styled('div')(({ }) => ({
	display: 'flex',
	flexDirection: 'column',
}));

const DescriptionList = styled('div')(({ }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: '40px',
	marginTop: '73px',
}));

const DescriptionItem = styled('div')(({ }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: '12px',
}));

const DescriptionTitle = styled('h3')(({ theme }) => ({
	display: 'flex',
	color: '#E2E2E2',
	fontFamily: 'Anton',
	fontSize: '36px',
	fontWeight: '400',
	lineHeight: '40px',
	[theme.breakpoints.down('sm')]: {
		fontSize: '20px',
		lineHeight: '26px',
	},
}));

const PinkDescrTitle = styled('span')(({ theme }) => ({
	color: '#CE1AFE',
	fontFamily: 'Anton',
	fontSize: '36px',
	fontWeight: '400',
	lineHeight: '40px',
	[theme.breakpoints.down('sm')]: {
		fontSize: '20px',
		lineHeight: '26px',
	},
}));

const DescriptionText = styled('p')(({ theme }) => ({
	color: '#E2E2E2',
	fontFamily: 'Work Sans',
	fontSize: '20px',
	fontWeight: '400',
	lineHeight: '28px',
	[theme.breakpoints.down('sm')]: {
		fontSize: '18px',
		lineHeight: '24px',
	},
}));

const MTitle = motion(Title);
const MOverview = motion(Overview);
const MDescriptionList = motion(DescriptionList);
const MDescriptionItem = motion(DescriptionItem);

const descriptionItemAnimation = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: (custom: number = 0) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.7, duration: 1.5 },
	}),
}

const HowItWorks: FC = () => {
	return (
		<HowItWorksUI>
			<CustomContainer>
				<MainWrapper>
					<MTitle
						variants={textAnimation}
						custom={1}
						initial="hidden"
						whileInView="visible"
						viewport={{ amount: 0.2, once: true, }}
					>
						How it works?
					</MTitle>
					<MOverview
						variants={textAnimation}
						custom={2}
						initial="hidden"
						whileInView="visible"
						viewport={{ amount: 0.2, once: true }}
					>
						Understanding the inner workings of our AI service is key to realizing its potential.
						Here's a step-by-step guide to demystify the magic behind our cutting-edge technology
					</MOverview>
					<MDescriptionList
						initial="hidden"
						animate="visible"
						viewport={{ amount: 0.9, }}
					>
						{descriptionList.map(({ title, number, text }, i) => {
							return (
								<MDescriptionItem
									key={nanoid()}
									variants={descriptionItemAnimation}
									initial="hidden"
									animate="visible"
									custom={+i + 3}
									viewport={{ amount: 0.9, }}
								>
									<DescriptionTitle>
										<PinkDescrTitle>{number} /&nbsp;</PinkDescrTitle>
										{title}
									</DescriptionTitle>
									<DescriptionText>{text}</DescriptionText>
								</MDescriptionItem>
							);
						})}
					</MDescriptionList>
				</MainWrapper>
			</CustomContainer>
		</HowItWorksUI>
	);
};

export default HowItWorks;
