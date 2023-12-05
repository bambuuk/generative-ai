import { FC } from 'react';
import { styled } from '@mui/material';
import { nanoid } from 'nanoid';
import { TransparentToFullBtn, FullToTransparentBtn } from './CustomElements';
import checkBox from '../assets/icons/check-box.svg';
import { ITariffPlane } from '../types/ITariffPlane';

const PriceCardUI = styled('div')(({ theme }) => ({
	overflow: 'hidden',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	width: '100%',
	maxWidth: '398px',
	maxHeight: '847px',
	height: 'auto',
	padding: '0px 20px',
	gap: '40px',
	borderRadius: '50px',
	border: '1px solid #391F6F',
	background:
		'linear-gradient(214deg, rgba(72, 43, 141, 0.20) 5.44%, rgba(24, 12, 51, 0.04) 94.54%)',
	[theme.breakpoints.down(1024)]: {
		margin: '0 auto',
	},
}));

const PremiumPriceCardUI = styled(PriceCardUI)(({}) => ({
	gap: '60px',
	maxWidth: '440px',
	maxHeight: '951px',
	border: '1px solid #CE1AFE',
	background:
		'linear-gradient(214deg, rgba(72, 43, 141, 0.20) 5.44%, rgba(24, 12, 51, 0.04) 94.54%)',
}));

const TariffPlaneBlock = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	padding: '40px 40px 0 40px',
	[theme.breakpoints.down('lg')]: {
		padding: '30px 30px 0 30px',
	},
	[theme.breakpoints.down('lg')]: {
		padding: '30px 10px 0 10px',
	},
}));

const TariffPlaneTitle = styled('div')(({ theme }) => ({
	padding: '20px 32px',
	color: '#E2E2E2',
	textAlign: 'center',
	fontFamily: 'Work Sans',
	fontSize: '24px',
	fontWeight: '400',
	lineHeight: '32px',
	[theme.breakpoints.down('lg')]: {
		padding: '20px',
	},
	[theme.breakpoints.down('sm')]: {
		fontSize: '22px',
		lineHeight: '28px',
		padding: '20px 0',
	},
}));

const PremiumTariffPlaneTitle = styled(TariffPlaneTitle)(({ theme }) => ({
	color: '#CE1AFE',
	fontSize: '32px',
	fontWeight: '600',
	lineHeight: '48px',
	[theme.breakpoints.down('lg')]: {
		fontSize: '26px',
		lineHeight: '34px',
		padding: '20px',
	},
	[theme.breakpoints.down('lg')]: {
		fontSize: '24px',
		lineHeight: '30px',
		padding: '20px 0',
	},
}));

const TariffPlanePriceBlock = styled('div')(({}) => ({
	display: 'flex',
	marginTop: '28px',
	alignItems: 'center',
}));

const TariffPlanePrice = styled('div')(({ theme }) => ({
	color: '#E2E2E2',
	fontFamily: 'Anton',
	fontSize: '64px',
	fontWeight: '400',
	lineHeight: '72px',
	[theme.breakpoints.down('lg')]: {
		fontSize: '54px',
		lineHeight: '70px',
	},
	[theme.breakpoints.down('sm')]: {
		fontSize: '40px',
		lineHeight: '50px',
	},
}));

const TariffPlanePricePeriod = styled('div')(({}) => ({
	color: '#E2E2E2',
	fontFamily: 'Work Sans',
	fontSize: '24px',
	fontWeight: '400',
	lineHeight: '32px',
}));

const TariffPlaneStart = styled('div')(({ theme }) => ({
	marginTop: '16px',
	color: '#E2E2E2',
	textAlign: 'center',
	fontFamily: 'Work Sans',
	fontSize: '20px',
	fontWeight: '400',
	lineHeight: '28px',
	[theme.breakpoints.down('lg')]: {
		fontSize: '18px',
		lineHeight: '24px',
	},
}));

const TariffFeaturesList = styled('ul')(({}) => ({
	display: 'flex',
	flexDirection: 'column',
}));

const TariffFeature = styled('li')(({ theme }) => ({
	padding: '20px 40px',
	display: 'grid',
	gridTemplateColumns: '31px 1fr',
	alignItems: 'center',
	gap: '20px',
	borderBottom: '1px solid #333',
	color: '#E2E2E2',
	fontFamily: 'Work Sans',
	fontSize: '16px',
	fontWeight: '400',
	lineHeight: '24px',
	[theme.breakpoints.down('lg')]: {
		padding: '20px',
		lineHeight: '22px',
	},
	[theme.breakpoints.down('lg')]: {
		padding: '20px 0',
	},
}));

const CheckImgWrapper = styled('div')(({}) => ({
	width: '31px',
	height: '31px',
	padding: '9px 5px 7px 5px',
	borderRadius: '5px',
	background: 'linear-gradient(100deg, #391F6F 15.2%, #CE1AFE 104.12%)',
	position: 'relative',
	zIndex: 1,
	'&::before': {
		content: '""',
		position: 'absolute',
		left: '1px',
		right: '1px',
		top: '1px',
		bottom: '1px',
		borderRadius: '5px',
		backgroundColor: 'rgba(36, 36, 36)',
		zIndex: -1,
	},
}));

const CheckBoxImg = styled('img')(({}) => ({
	position: 'relative',
	zIndex: 2,
}));

const TransparentButton = styled(TransparentToFullBtn)(({ theme }) => ({
	padding: '20px 40px',
	maxWidth: '286px',
	width: '100%',
	marginBottom: '50px',
	[theme.breakpoints.down('sm')]: {
		padding: '15px 30px',
	},
}));

const FillButton = styled(FullToTransparentBtn)(({ theme }) => ({
	padding: '20px 40px',
	maxWidth: '286px',
	width: '100%',
	marginBottom: '50px',
	[theme.breakpoints.down('sm')]: {
		padding: '15px 30px',
	},
}));

interface PriceCardProps extends ITariffPlane {
	openModal: (value: string) => void;
}

const PriceCard: FC<PriceCardProps> = ({
	tariffPlaneTitle,
	tariffPlanePrice,
	tariffFeatures,
	cardType,
	openModal,
}) => {
	return (
		<>
			{cardType === 'simple' ? (
				<PriceCardUI>
					<TariffPlaneBlock>
						<TariffPlaneTitle>{tariffPlaneTitle}</TariffPlaneTitle>
						<TariffPlanePriceBlock>
							<TariffPlanePrice>${tariffPlanePrice}</TariffPlanePrice>
							<TariffPlanePricePeriod>/ year</TariffPlanePricePeriod>
						</TariffPlanePriceBlock>
						<TariffPlaneStart>Start with a Free Experience</TariffPlaneStart>
					</TariffPlaneBlock>

					<TariffFeaturesList>
						{tariffFeatures.map((item) => (
							<TariffFeature key={nanoid()}>
								<CheckImgWrapper>
									<CheckBoxImg src={checkBox} alt="" />
								</CheckImgWrapper>
								{item}
							</TariffFeature>
						))}
					</TariffFeaturesList>

					<TransparentButton onClick={() => openModal('')}>Start now</TransparentButton>
				</PriceCardUI>
			) : (
				<PremiumPriceCardUI>
					<TariffPlaneBlock>
						<PremiumTariffPlaneTitle>{tariffPlaneTitle}</PremiumTariffPlaneTitle>
						<TariffPlanePriceBlock>
							<TariffPlanePrice>${tariffPlanePrice}</TariffPlanePrice>
							<TariffPlanePricePeriod>/ year</TariffPlanePricePeriod>
						</TariffPlanePriceBlock>
						<TariffPlaneStart>Start with a Free Experience</TariffPlaneStart>
					</TariffPlaneBlock>

					<TariffFeaturesList>
						{tariffFeatures.map((item) => (
							<TariffFeature key={nanoid()}>
								<CheckImgWrapper>
									<CheckBoxImg src={checkBox} alt="" />
								</CheckImgWrapper>
								{item}
							</TariffFeature>
						))}
					</TariffFeaturesList>

					<FillButton onClick={() => openModal('')}>Start now</FillButton>
				</PremiumPriceCardUI>
			)}
		</>
	);
};

export default PriceCard;
