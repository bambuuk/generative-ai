import { FC } from 'react';
import { styled } from '@mui/material';
import { nanoid } from 'nanoid';
import { CustomContainer, Title } from './CustomElements';
import PriceCard from './PriceCard';
import ContactUsModalWindow from './ContactModalWindow';
import CustomSnackbar from './CustomSnackbar';
import { priceList } from '../constants';
import useSnackbarControl from '../hooks/useSnackbarControl';
import useModalControl from '../hooks/useModalControl';
import { motion } from 'framer-motion';
import { textAnimation } from '../assets/animation';

const PriceUI = styled('section')({
	width: '100%',
	position: 'relative',
});

const MainWrapper = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '88px',
	position: 'relative',
	[theme.breakpoints.down('lg')]: {
		gap: '60px',
	},
}));

const PriceCardListUI = styled('div')(({ theme }) => ({
	display: 'grid',
	gridTemplateColumns: 'repeat(3, auto)',
	alignItems: 'center',
	[theme.breakpoints.down(1024)]: {
		gridTemplateColumns: 'auto',
		justifyContent: 'center',
		gap: '40px',
	},
}));

const FirstBackgroundBlock = styled('div')(({ theme }) => ({
	position: 'absolute',
	zIndex: '-10',
	top: '-147px',
	left: '-141px',
	maxWidth: '588px',
	maxHeight: '569px',
	width: '100%',
	height: '100%',
	filter: 'blur(377px)',
	[theme.breakpoints.down('md')]: {
		maxWidth: '359px',
		maxHeight: '331px',
	},
	[theme.breakpoints.down('md')]: {
		right: '0',
	},
}));

const SecondBackgroundBlock = styled('div')(({ theme }) => ({
	position: 'absolute',
	zIndex: '-10',
	top: '181px',
	left: '-416px',
	maxWidth: '588px',
	maxHeight: '569px',
	width: '100%',
	height: '100%',
	filter: 'blur(262px)',
	[theme.breakpoints.down('md')]: {
		maxWidth: '359px',
		maxHeight: '331px',
	},
	[theme.breakpoints.down('sm')]: {
		right: '0',
	},
}));

const Vector = styled('div')({
	display: 'block',
	position: 'absolute',
	width: '588.737px',
	height: '569.293px',
});

const FirstVector = styled(Vector)({
	backgroundColor: '#3D32F9',
});

const SecondVector = styled(Vector)({
	backgroundColor: '#391F6F',
});

const MTitle = motion(Title);
const MPriceCardListUI = motion(PriceCardListUI);

const item = {
	hidden: {
		opacity: 0,
		y: 100
	},
	visible: (custom: number = 0) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.4, duration: 0.9 },
	}),
}

const PriceCardList: FC = () => {
	const { isModalOpen, openModal, closeModal } = useModalControl();
	const { isOpenSnackbar, openSnackbar, closeSnackbar } = useSnackbarControl();

	return (
		<PriceUI id="price">
			<CustomContainer>
				<MainWrapper>
					<MTitle
						variants={textAnimation}
						custom={1}
						initial="hidden"
						whileInView="visible"
						viewport={{ amount: 0.2, once: true }}
					>
						Customized prices for you
					</MTitle>
					<MPriceCardListUI
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						{priceList.map(({ tariffPlaneTitle, tariffPlanePrice, tariffFeatures, cardType }, i) => {
							return (
								<PriceCard
									initial="hidden"
									whileInView="visible"
									variants={item}
									custom={+i + 1}
									viewport={{ once: true }}
									key={nanoid()}
									tariffPlaneTitle={tariffPlaneTitle}
									tariffPlanePrice={tariffPlanePrice}
									tariffFeatures={tariffFeatures}
									cardType={cardType}
									openModal={openModal}
								/>
							);
						})}
					</MPriceCardListUI>
					<FirstBackgroundBlock>
						<FirstVector />
					</FirstBackgroundBlock>
					<SecondBackgroundBlock>
						<SecondVector />
					</SecondBackgroundBlock>
				</MainWrapper>
			</CustomContainer>
			<ContactUsModalWindow
				isModalOpen={isModalOpen}
				closeModal={closeModal}
				openSnackbar={openSnackbar}
			/>
			<CustomSnackbar
				isOpenSnackbar={isOpenSnackbar}
				closeSnackbar={closeSnackbar}
				message={'Sent Successfully'}
			/>
		</PriceUI>
	);
};

export default PriceCardList;
