import { FC } from 'react';
import { styled } from '@mui/material';
import { CustomContainer, Title } from './CustomElements';
import Slider from './Slider';
import { motion } from 'framer-motion';
import { textAnimation } from '../assets/animation';

const SliderUI = styled('div')(({}) => ({
	width: '100%',
}));

const MainWrapper = styled('div')(({}) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: '16px',
	position: 'relative',
}));

const BackgroundBlock = styled('div')(({}) => ({
	display: 'block',
	position: 'absolute',
	zIndex: '-10',
	maxWidth: '588.737px',
	maxHeight: '569.293px',
	width: '100%',
	height: '100%',
	left: '38px',
	top: '-177px',
	filter: 'blur(417px)',
}));

const BackgroundFigure = styled('div')({
	display: 'block',
	position: 'absolute',
	backgroundColor: '#CE1AFE',
	width: '588.737px',
	height: '569.293px',
});

const MTitle = motion(Title);

export const sliderAnimation = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: { delay: 0.4, duration: 0.5 },
	},
};

const Testimonials: FC = () => {
	return (
		<SliderUI id="testimonials">
			<CustomContainer>
				<MainWrapper>
					<MTitle
						variants={textAnimation}
						custom={1}
						initial="hidden"
						whileInView="visible"
						viewport={{ amount: 0.2, once: true }}
					>
						What clients say about us
					</MTitle>
					<motion.div
						variants={sliderAnimation}
						initial="hidden"
						whileInView="visible"
						viewport={{ amount: 0.2, once: true }}
					>
						<Slider />
					</motion.div>
					<BackgroundBlock>
						<BackgroundFigure />
					</BackgroundBlock>
				</MainWrapper>
			</CustomContainer>
		</SliderUI>
	);
};

export default Testimonials;
