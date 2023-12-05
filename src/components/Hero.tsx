import { FC } from 'react';
import { styled } from '@mui/material';
import { CustomContainer } from './CustomElements';
import { FullToTransparentBtn } from './CustomElements';
import picture from '../assets/pictures/hero/hero-picture.png';
import wave from '../assets/pictures/hero/wave-pattern.png';
import { rotate, zeroRotate } from '../assets/keyframes/keyframes';
import useModalControl from '../hooks/useModalControl';
import useSnackbarControl from '../hooks/useSnackbarControl';
import ContactUsModalWindow from './ContactModalWindow';
import CustomSnackbar from './CustomSnackbar';

const HeroUI = styled('section')({
  width: '100%',
  minHeight: 'calc(100vh - 100px)',
  height: '100%',
});

const HeroWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  paddingTop: '140px',
  [theme.breakpoints.down(1024)]: {
    flexDirection: 'column',
    paddingTop: '100px',
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: '50px',
  },
}));

const OverviewBlock = styled('div')(({ theme }) => ({
  maxWidth: '610px',
  width: '100%',
  display: 'block',
  flexDirection: 'column',
  [theme.breakpoints.down('lg')]: {
    maxWidth: '500px',
  },
  [theme.breakpoints.down(1024)]: {
    maxWidth: '900px',
  },
}));

const ImageBlock = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '5px',
  flex: '1',
  position: 'relative',
});

const Picture = styled('img')(({ theme }) => ({
  animation: `${rotate} 10s linear infinite`,
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  [theme.breakpoints.down(1024)]: {
    width: '100%',
    maxWidth: '500px',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '80%',
  },
}));

const WaveImg = styled(Picture)(({ theme }) => ({
  animation: `${zeroRotate} 10s linear infinite`,
  maxWidth: '80%',
  maxHeight: '522px',
  width: '100%',
  height: '100%',
  right: '0',
  position: 'absolute',
  zIndex: '-1',
  [theme.breakpoints.down('lg')]: {
    maxHeight: '470px',
    right: '0'
  },
  [theme.breakpoints.down('lg')]: {
    maxHeight: '470px',
    right: '15%'
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '60%',
    maxHeight: '440px',
  },
  [theme.breakpoints.down('sm')]: {
    right: '10%'
  },
}));

const Title = styled('h1')(({ theme }) => ({
  color: '#E2E2E2',
  fontFamily: 'Anton',
  fontSize: '88px',
  fontWeight: '400',
  lineHeight: '96px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '30px',
    lineHeight: '35px',
  },
}));

const GradientTitle = styled('div')(({ theme }) => ({
  background: 'linear-gradient(100deg, #391F6F 15.2%, #CE1AFE 104.12%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontFamily: 'Anton',
  fontSize: '88px',
  fontWeight: '400',
  lineHeight: '96px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '30px',
    lineHeight: '35px',
  },
}));

const Description = styled('p')(({ theme }) => ({
  marginTop: '24px',
  color: '#E2E2E2',
  fontFamily: 'Work Sans',
  fontSize: '24px',
  fontWeight: '400',
  lineHeight: '32px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
    lineHeight: '22px',
  },
}));

const GradientsBlock = styled('div')({
  width: '100%',
  height: '100%',
  maxWidth: '657px',
  maxHeight: '640px',
  filter: 'blur(207px)',
  position: 'absolute',
  zIndex: '-10',
  right: 0,
  top: '63px'
});

const Vector = styled('div')({
  display: 'block',
  position: 'absolute',
  width: '100%',
  height: '100%',
});

const FirstVector = styled(Vector)({
  maxWidth: '340.545px',
  maxHeight: '387.16px',
  backgroundColor: '#3D32F9',
  top: '0',
  right: '81.98px'
});

const SecondVector = styled(Vector)({
  maxWidth: '370.666px',
  maxHeight: '352.619px',
  backgroundColor: '#391F6F',
  bottom: 0,
  right: 0,
});

const ThirdVector = styled(Vector)({
  maxWidth: '364.973px',
  maxHeight: '390.004px',
  backgroundColor: '#CE1AFE',
  bottom: 0,
  left: 0,
});

const Hero: FC = () => {
  const { isModalOpen, openModal, closeModal } = useModalControl();
  const { isOpenSnackbar, openSnackbar, closeSnackbar } = useSnackbarControl();

  return (
    <HeroUI id="home">
      <CustomContainer sx={{ position: "relative" }}>
        <HeroWrapper>
          <OverviewBlock>
            <Title>
              Start your
              <br />
              <GradientTitle>Generative AI</GradientTitle>
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
              onClick={() => openModal('')}
            >
              Get started
            </FullToTransparentBtn>
          </OverviewBlock>
          <ImageBlock>
            <Picture src={picture} />
            <WaveImg src={wave} />
          </ImageBlock>
        </HeroWrapper>
        <GradientsBlock>
          <FirstVector />
          <SecondVector />
          <ThirdVector />
        </GradientsBlock>
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
    </HeroUI>
  )
}

export default Hero;
