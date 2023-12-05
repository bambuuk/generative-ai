import { FC } from 'react';
import { styled } from '@mui/material';
import { CustomContainer, FullToTransparentBtn } from './CustomElements';
import heart from '../assets/pictures/cta/heart.svg';
import abstractImg from '../assets/pictures/cta/abstract-img.png';
import useModalControl from '../hooks/useModalControl';
import AuthModalWindow from './AuthModalWindow';
import { beat } from '../assets/keyframes/keyframes';
import CustomSnackbar from './CustomSnackbar';
import useSnackbarControl from '../hooks/useSnackbarControl';

const SecondCTA_UI = styled('section')(({}) => ({
	width: '100%',
}));

const MainWrapper = styled('div')(({ theme }) => ({
	position: 'relative',
	display: 'flex',
	gap: '130px',
	padding: '72px 100px',
	justifyContent: 'center',
	alignItems: 'center',
	borderRadius: '50px',
	border: '1px solid #333',
	background:
		'linear-gradient(214deg, rgba(72, 43, 141, 0.20) 5.44%, rgba(24, 12, 51, 0.04) 94.54%)',
	[theme.breakpoints.down('lg')]: {
		padding: '72px 0 72px 50px',
	},
	[theme.breakpoints.down(1024)]: {
		gap: '0',
	},
	[theme.breakpoints.down('md')]: {
		flexWrap: 'wrap',
		padding: '72px 30px 0 30px',
	},
	[theme.breakpoints.down('sm')]: {
		flexWrap: 'wrap',
		padding: '72px 20px 0 20px',
	},
}));

const SubscriptionWrapper = styled('div')(({}) => ({
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
}));

const Subtitle = styled('h3')(({ theme }) => ({
	color: '#E2E2E2',
	fontFamily: 'Anton',
	fontSize: '36px',
	fontWeight: '400',
	lineHeight: '40px',
	[theme.breakpoints.down('sm')]: {
		fontSize: '25px',
		lineHeight: '35px',
	},
}));

const Overview = styled('p')(({ theme }) => ({
	marginTop: '23px',
	color: '#E2E2E2',
	fontFamily: 'Work Sans',
	fontSize: '24px',
	fontWeight: '400',
	lineHeight: '32px',
	[theme.breakpoints.down('sm')]: {
		fontSize: '20px',
		lineHeight: '26px',
	},
}));

const SubscriptionButton = styled(FullToTransparentBtn)(({ theme }) => ({
	marginTop: '44px',
	padding: '20px 40px',
	width: '100%',
	maxWidth: '267px',
	[theme.breakpoints.down('sm')]: {
		padding: '15px 30px',
	},
}));

const HeartImg = styled('img')(({ theme }) => ({
	animation: `2s ease 0s infinite ${beat}`,
	maxWidth: '368px',
	width: '100%',
	height: '100%',
	objectFit: 'contain',
	[theme.breakpoints.down('md')]: {
		maxWidth: '450px',
	},
	[theme.breakpoints.down('sm')]: {
		marginLeft: '30px',
	},
}));

const AbstractImage = styled('img')(({ theme }) => ({
	position: 'absolute',
	top: '-120px',
	right: '381px',
	[theme.breakpoints.down('lg')]: {
		right: '20%',
	},
	[theme.breakpoints.down('md')]: {
		marginLeft: '30px',
	},
}));

const SecondCTA: FC = () => {
	const { openModal, isModalOpen, closeModal, modalType, changeModalType } = useModalControl();
	const { isOpenSnackbar, openSnackbar, closeSnackbar, actionType } = useSnackbarControl();

	return (
		<SecondCTA_UI>
			<CustomContainer>
				<MainWrapper>
					<SubscriptionWrapper>
						<Subtitle>Be a part of the AI Genius community</Subtitle>
						<Overview>
							Subscription will give you the opportunity to receive all the latest and most relevant
							news, as well as special offers and unique prices
						</Overview>
						<SubscriptionButton onClick={() => openModal('signUp')}>Sign Up</SubscriptionButton>
					</SubscriptionWrapper>
					<HeartImg src={heart} />
					<AbstractImage src={abstractImg} />

					<AuthModalWindow
						isModalOpen={isModalOpen}
						closeModal={closeModal}
						modalType={modalType}
						changeModalType={changeModalType}
						openSnackbar={openSnackbar}
					/>
					<CustomSnackbar
						isOpenSnackbar={isOpenSnackbar}
						closeSnackbar={closeSnackbar}
						message={actionType === 'signUp' ? 'Sign Up is successful' : 'Log In is successful'}
					/>
				</MainWrapper>
			</CustomContainer>
		</SecondCTA_UI>
	);
};

export default SecondCTA;
