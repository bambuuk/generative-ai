import { FC } from 'react';
import { CustomContainer } from './CustomElements';
import { styled } from '@mui/material';
import { FullToTransparentBtn } from './CustomElements';
import picture from '../assets/pictures/hero-picture.svg';

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
});

const Picture = styled('img')(({ }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'contain'
}));

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
            <Picture src={picture} alt="Picture" />
          </ImageBlock>
        </HeroWrapper>
      </CustomContainer>
    </HeroUI>
  )
}

export default Hero;
