import { FC } from 'react';
import { styled, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { nanoid } from 'nanoid';
import ReviewCard from './ReviewCard';
import { reviewersList } from '../constants';
import { LeftArrow, RightArrow } from './ImgComponents';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SliderWrapper = styled('div')(({ theme }) => ({
	margin: '0 auto',
	maxWidth: '1130px',
	width: '100%',
	position: 'relative',
	[theme.breakpoints.down('lg')]: {
		maxWidth: '753.3px',
		width: '100%',
	},
	[theme.breakpoints.down(800)]: {
		maxWidth: '360px',
		width: '100%',
	},
	'.swiper-slide': {
		margin: '98px 0 60px 0',
		minHeight: '492px',
		position: 'relative',
	},
	'.swiper-pagination-bullets': {
		display: 'flex',
		justifyContent: 'center',
		gap: '12px',
	},
	'.swiper-pagination-bullet': {
		width: '0.625rem',
		height: '0.625rem',
		backgroundColor: '#D9D9D9',
		opacity: 1,
	},
	'.swiper-pagination-bullet-active': {
		backgroundColor: '#333333',
	},
	'.prevBtn, .nextBtn': {
		WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
		zIndex: 99,
		position: 'absolute',
		top: 0,
		display: 'flex',
		width: '70px',
		height: '70px',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '6px',
		background:
			'linear-gradient(214deg, rgba(72, 43, 141, 0.20) 5.44%, rgba(24, 12, 51, 0.04) 94.54%)',
		transition: '500ms',
		'&::before': {
			WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
			opacity: 0,
			content: '""',
			position: 'absolute',
			left: '0',
			right: '0',
			top: '0',
			bottom: '0',
			borderRadius: '6px',
			background: 'linear-gradient(100deg, #391F6F 15.2%, #CE1AFE 104.12%)',
			zIndex: '-1',
			transition: '500ms',
		},
		'&:hover::before': {
			'@media (hover: hover) and (pointer: fine)': {
				opacity: '1',
			},
		},
		'&:hover': {
			'@media (hover: hover) and (pointer: fine)': {
				backgroundColor: 'transparent',
			},
		},
	},
	'.nextBtn': {
		right: 0,
	},
	'.prevBtn': {
		right: '85px',
	},
	'.swiper-button-disabled': {
		'.rightArrow path, .leftArrow path': {
			stroke: '#333333',
		},
	},
}));

const Slider: FC = () => {
	const theme = useTheme();
	const isLessLargeScreen = useMediaQuery(theme.breakpoints.down('lg'));
	const isLessMediumScreen = useMediaQuery(theme.breakpoints.down(800));
	const viewSlides = isLessMediumScreen ? 1 : isLessLargeScreen ? 2 : 3;
	return (
		<SliderWrapper>
			<Swiper
				navigation={{
					prevEl: '.prevBtn',
					nextEl: '.nextBtn',
				}}
				slidesPerView={viewSlides}
				spaceBetween={20}
				slidesPerGroup={1}
				modules={[Navigation, Pagination]}
				pagination={{
					clickable: true,
				}}
				grabCursor
				speed={300}
				style={{ width: '100%', height: '100%' }}
			>
				{reviewersList.map((item) => {
					return (
						<SwiperSlide key={nanoid()}>
							<ReviewCard reviewerInfo={item} />
						</SwiperSlide>
					);
				})}

				<button className="prevBtn">
					<LeftArrow />
				</button>
				<button className="nextBtn">
					<RightArrow />
				</button>
			</Swiper>
		</SliderWrapper>
	);
};

export default Slider;
