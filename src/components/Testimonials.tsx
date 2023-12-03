import { FC } from 'react';
import { styled } from '@mui/material';
import { CustomContainer, Title } from './CustomElements';
import backgroundGradient from '../assets/backgroundFigures/features/3-vector.svg';
import Slider from './Slider';

const SliderUI = styled('div')(({ }) => ({
  width: '100%'
}));

const MainWrapper = styled('div')(({ }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  position: 'relative',
}));

const BackgroundBlock = styled('div')(({ }) => ({
  display: 'block',
  position: 'absolute',
  zIndex: '-10',
  maxWidth: '588.737px',
  maxHeight: '569.293px',
  width: '100%',
  height: '100%',
  left: '38px',
  top: '-177px',
}));

const RepeatedBlurBlock = styled('div')(({ }) => ({
  width: '100%',
  height: '100%',
  filter: 'blur(105px)'
}));

const Testimonials: FC = () => {
  return (
    <SliderUI id="testimonials">
      <CustomContainer>
        <MainWrapper>
          <Title>What clients say about us</Title>
          <Slider />
          <BackgroundBlock>
            <RepeatedBlurBlock>
              <RepeatedBlurBlock>
                <RepeatedBlurBlock>
                  <RepeatedBlurBlock>
                    <img src={backgroundGradient} />
                  </RepeatedBlurBlock>
                </RepeatedBlurBlock>
              </RepeatedBlurBlock>
            </RepeatedBlurBlock>
          </BackgroundBlock>
        </MainWrapper>
      </CustomContainer>
    </SliderUI>
  )
}

export default Testimonials
