import { FC } from 'react';
import { styled } from '@mui/material';
import Rating from '@mui/material/Rating';
import { IReviewerInfo } from '../types/IReviewerInfo';
import fillStar from '../assets/icons/fill-review-star.svg';
import transparentStar from '../assets/icons/transparent-review-star.svg';

const ReviewCardUI = styled('div')(({ theme }) => ({
  display: 'flex',
  maxWidth: '360px',
  minWidth: '356px',
  width: '100%',
  padding: '40px 30px',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '25px',
  borderRadius: '20px',
  border: '1px solid #333',
  background: 'linear-gradient(214deg, rgba(72, 43, 141, 0.20) 5.44%, rgba(24, 12, 51, 0.04) 94.54%)',
  [theme.breakpoints.down('sm')]: {
    minWidth: '0',
    maxWidth: '100%',
  }
}));

const ReviewText = styled('p')(({ theme }) => ({
  minHeight: '243px',
  maxHeight: '243px',
  color: '#E2E2E2',
  textAlign: 'center',
  fontFamily: 'Work Sans',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '24px',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    maxHeight: '0',
  }
}));

const CustomRating = styled(Rating)(({ }) => ({
  display: 'flex',
  gap: '5px'
}));

const ReviewerWrapper = styled('div')(({ }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '5px',
  width: '100%',
}));

const ReviewerAvatar = styled('img')(({ }) => ({
  display: 'block',
  width: '50px',
  height: '50px',
  borderRadius: '50px',
  objectFit: 'cover',
}));

const ReviewerName = styled('h6')(({ }) => ({
  color: '#E2E2E2',
  fontFamily: 'Source Sans Pro',
  fontSize: '18px',
  fontWeight: '600',
  lineHeight: 'normal',
}));

const ReviewerProfession = styled('span')(({ }) => ({
  color: '#E2E2E2',
  fontFamily: 'Source Sans Pro',
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: 'normal',
}));

interface IReviewCardProps {
  reviewerInfo: IReviewerInfo;
}

const ReviewCard: FC<IReviewCardProps> = ({ reviewerInfo }) => {
  const { name, profession, comment, rating, img } = reviewerInfo;
  return (
    <ReviewCardUI>
      <ReviewText>
        {comment}
      </ReviewText>
      <CustomRating
        name="disabled"
        value={rating}
        readOnly
        icon={<img src={fillStar} />}
        emptyIcon={<img src={transparentStar} />}
      />
      <ReviewerWrapper>
        <ReviewerAvatar src={img} />
        <ReviewerName>{name}</ReviewerName>
        <ReviewerProfession>{profession}</ReviewerProfession>
      </ReviewerWrapper>
    </ReviewCardUI>
  )
}

export default ReviewCard
