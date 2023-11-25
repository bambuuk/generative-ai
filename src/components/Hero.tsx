import { FC } from 'react';
import { CustomContainer } from './CustomElements';
import { styled } from '@mui/material';
import { FullToTransparentBtn } from './CustomElements';
import picture from '../assets/pictures/hero-picture.svg';
import wave from '../assets/pictures/wave-pattern.svg';
import firstVector from '../assets/backgroundFigures/hero/1-vector.svg';
import secondVector from '../assets/backgroundFigures/hero/2-vector.svg';
import thirdVector from '../assets/backgroundFigures/hero/3-vector.svg';

const HeroUI = styled('section')({
  width: '100%',
  minHeight: 'calc(100vh - 100px)',
  height: '100%',
});

const HeroWrapper = styled('div')(() => ({
  display: 'flex',
  gap: '20px',
  paddingTop: '140px',

}));

const OverviewBlock = styled('div')({
  maxWidth: '610px',
  width: '100%',
  display: 'block',
  flexDirection: 'column',
});

const ImageBlock = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '5px',
  flex: '1',
  position: 'relative',
});

const Picture = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});

const WaveImg = styled(Picture)({
  width: '450px',
  height: '522px',
  right: '0',
  position: 'absolute',
  zIndex: '-1',
})

const Title = styled('h1')(() => ({
  color: '#E2E2E2',
  fontFamily: 'Anton',
  fontSize: '88px',
  fontWeight: '400',
  lineHeight: '96px',
}));

const GradientTitle = styled('span')({
  background: 'linear-gradient(100deg, #391F6F 15.2%, #CE1AFE 104.12%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontFamily: 'Anton',
  fontSize: '88px',
  fontWeight: '400',
  lineHeight: '96px',
});

const Description = styled('p')({
  marginTop: '24px',
  color: '#E2E2E2',
  fontFamily: 'Work Sans',
  fontSize: '24px',
  fontWeight: '400',
  lineHeight: '32px',
});

const GradientsBlock = styled('div')({
  width: '657px',
  height: '640px',
  filter: 'blur(207px)',
  position: 'absolute',
  zIndex: '-10',
  right: 0,
  top: '163px'
});

const Vector = styled('img')({
  display: 'block',
  position: 'absolute',
});

const FirstVector = styled(Vector)({
  fill: '#3D32F9',
  top: '0',
  right: '81.98px'
});

const SecondVector = styled(Vector)({
  fill: '#391F6F',
  bottom: 0,
  right: 0,
});

const ThirdVector = styled(Vector)({
  fill: '#CE1AFE',
  bottom: 0,
  left: 0,
});

const Hero: FC = () => {
  return (
    <HeroUI>
      <CustomContainer>
        <HeroWrapper>
          <OverviewBlock>
            <Title>
              Start your
              <br />
              <GradientTitle>Generative AI</GradientTitle>
              <br />
              Business in Minutes
            </Title>
            <Description>
              Create AI-driven content generation tools that assist content creators is generating articles,
              product descriptions, or marketing copy.
              <br />
              This can be offered as a SaaS solution where users pay for the number of words or content
              pieces generated.
            </Description>
            <FullToTransparentBtn
              sx={{
                marginTop: '36px',
              }}
            >
              Get started
            </FullToTransparentBtn>
          </OverviewBlock>
          <ImageBlock>
            <Picture src={picture} alt="Abstract" />
            <WaveImg src={wave} alt="Wave" />
          </ImageBlock>
        </HeroWrapper>
      </CustomContainer>
      <GradientsBlock>
        <FirstVector src={firstVector} />
        <SecondVector src={secondVector} />
        <ThirdVector src={thirdVector} />
      </GradientsBlock>
    </HeroUI>
  )
}

export default Hero;
