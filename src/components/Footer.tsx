import { FC } from 'react';
import { styled, Link } from '@mui/material';
import { CustomContainer } from './CustomElements';

const FooterUI = styled('footer')(({ }) => ({
  width: '100%',
  background: '#151C27',
}));

const MainWrapper = styled('div')(({ }) => ({
  padding: '50px 0',
  display: 'flex',
  flexDirection: 'column',
}));

const MainFooterPart = styled('nav')(({ }) => ({
  display: 'flex',
  gap: '72px',
}));

const BrandName = styled('div')(({ }) => ({
  color: '#E2E2E2',
  textAlign: 'center',
  fontFamily: 'Work Sans',
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '28px',
}));

const AuthorsList = styled('div')(({ }) => ({
  marginTop: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#E2E2E2',
  textAlign: 'center',
  fontFamily: 'Work Sans',
  fontSize: '20px',
  fontWeight: '400',
  lineHeight: '28px',
}));

const Author = styled(Link)(({ }) => ({
  color: '#E2E2E2',
  textAlign: 'center',
  fontSize: '18px',
  lineHeight: '24px',
  transition: 'all 0.3s',
  textDecoration: 'none',
  '&:hover': {
    color: '#CE1AFE'
  }
}));

const Footer: FC = () => {
  return (
    <FooterUI>
      <CustomContainer>
        <MainWrapper>
          <MainFooterPart></MainFooterPart>
          <BrandName>Copyright © 2023 AI Genius</BrandName>
          <AuthorsList>
            Made by
            <Author href='https://www.linkedin.com/in/ivan-korobka-328b77208/' target='_blank'>Ivan Korobka (Front-end developer)</Author>
            <Author href='https://www.linkedin.com/in/liliia-pipiia/' target='_blank'>Liliia Pipiia (UX/UI Designer)</Author>
          </AuthorsList>
        </MainWrapper>
      </CustomContainer>
    </FooterUI>
  )
}

export default Footer
