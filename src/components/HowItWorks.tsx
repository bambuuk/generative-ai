import { FC } from 'react';
import { styled } from '@mui/material';
import { nanoid } from 'nanoid';
import { CustomContainer, Title, Overview } from './CustomElements';
import { descriptionList } from '../constants';

const HowItWorksUI = styled('section')({
	width: '100%',
});

const MainWrapper = styled('div')(({}) => ({
	display: 'flex',
	flexDirection: 'column',
}));

const DescriptionList = styled('div')(({}) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: '40px',
	marginTop: '73px',
}));

const DescriptionItem = styled('div')(({}) => ({
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

const HowItWorks: FC = () => {
	return (
		<HowItWorksUI>
			<CustomContainer>
				<MainWrapper>
					<Title>How it works?</Title>
					<Overview>
						Understanding the inner workings of our AI service is key to realizing its potential.
						Here's a step-by-step guide to demystify the magic behind our cutting-edge technology
					</Overview>
					<DescriptionList>
						{descriptionList.map(({ title, number, text }) => {
							return (
								<DescriptionItem key={nanoid()}>
									<DescriptionTitle>
										<PinkDescrTitle>{number} /&nbsp;</PinkDescrTitle>
										{title}
									</DescriptionTitle>
									<DescriptionText>{text}</DescriptionText>
								</DescriptionItem>
							);
						})}
					</DescriptionList>
				</MainWrapper>
			</CustomContainer>
		</HowItWorksUI>
	);
};

export default HowItWorks;
