import { FC } from 'react';
import { styled } from '@mui/material';
import { CustomContainer, FullToTransparentBtn } from './CustomElements';
import cube from '../assets/pictures/cube.svg';

const CTA_UI = styled('section')({
  width: '100%',
});

const MainWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '92px',
  padding: '0 20px',
  minHeight: '476px',
  borderRadius: '50px',
  border: '1px solid #333',
  background: 'linear-gradient(214deg, rgba(72, 43, 141, 0.20) 5.44%, rgba(24, 12, 51, 0.04) 94.54%)',
  [theme.breakpoints.down(1024)]: {
    gap: '50px'
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    padding: '30px 20px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '30px 10px',
  },
}));

const CubeImage = styled('img')(({ }) => ({
  display: 'block',
  width: '100%',
  height: '100%',
  maxWidth: '330px',
  maxHeight: '330px',
  objectFit: 'contain'
}));

const DescriptionWrapper = styled('div')(({ }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '630px',
  width: '100%',
}));

const Title = styled('div')(({ theme }) => ({
  color: '#E2E2E2',
  fontFamily: 'Anton',
  fontSize: '36px',
  fontWeight: '400',
  lineHeight: '40px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '22px',
    lineHeight: '32px',
  }
}));

const DescriptionText = styled('p')(({ theme }) => ({
  marginTop: '28px',
  color: '#E2E2E2',
  fontFamily: 'Work Sans',
  fontSize: '24px',
  fontWeight: '400',
  lineHeight: '32px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
    lineHeight: '24px',
  }
}));

const FillButton = styled(FullToTransparentBtn)(({ theme }) => ({
  marginTop: '52px',
  padding: '20px 40px',
  maxWidth: '286px',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    padding: '15px 30px',
  }
}));

const FirstCTA: FC = () => {
  return (
    <CTA_UI>
      <CustomContainer>
        <MainWrapper>
          <CubeImage src={cube} alt='Cube' />
          <DescriptionWrapper>
            <Title>Ready to Unlock the Power of AI for Your Business ?</Title>
            <DescriptionText>
              Understanding the inner workings of our AI service is key to realizing its potential.
              Here's a step-by-step guide to demystify the magic behind our cutting-edge technology
            </DescriptionText>
            <FillButton>Sign Up</FillButton>
          </DescriptionWrapper>
        </MainWrapper>
      </CustomContainer>
    </CTA_UI>
  )
}

export default FirstCTA