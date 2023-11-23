import { FC } from 'react';
import { styled } from '@mui/material';
import { CustomContainer } from './CustomElements';
import logo from '../assets/logo.svg';

const HeaderUI = styled('header')(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.otherColor?.darkGray,
}));

const HeaderWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '16px 0',
});

const LogoBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '149px',
});

const LogoTitle = styled('div')({
  color: '#A992DB',
  textAlign: 'center',
  fontFamily: 'Work Sans',
  fontSize: '24px',
  fontWeight: '700',
  lineHeight: '28px',
});

const Navigation = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  gap: '48px',
});

const LinkUI = styled('a')({
  color: '#FFF',
  textAlign: 'center',
  fontFamily: 'Work Sans',
  fontSize: '20px',
  fontWeight: '400',
  lineHeight: '24px',
});

const LoginBtn = styled('button')({
  width: '196px',
  padding: '20px 44px',
  borderRadius: '20px',
  background: `linear-gradient(100deg, #391F6F 15.2%, #CE1AFE 104.12%)`,
  position: 'relative',
  zIndex: 1,

  '&::before': {
    content: '""',
    position: 'absolute',
    left: '1px',
    right: '1px',
    top: '1px',
    bottom: '1px',
    borderRadius: '19px',
    backgroundColor: '#13171D',
    zIndex: '-1',
    transition: '500ms',
  },
  '&::after': {
    content: 'attr(data-call)',
    color: '#E2E2E2',
    fontFamily: 'Work Sans',
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '24px',
    WebkitBackgroundClip: 'text',
    transition: '500ms'
  },
  '&:hover::before': {
    backgroundColor: 'transparent',
  }
});

const Header: FC = () => {
  return (
    <HeaderUI>
      <CustomContainer>
        <HeaderWrapper>
          <LogoBox>
            <img src={logo} alt="Logo" />
            <LogoTitle>AI Genius</LogoTitle>
          </LogoBox>
          <Navigation>
            <LinkUI>Home</LinkUI>
            <LinkUI>Features</LinkUI>
            <LinkUI>Solution</LinkUI>
            <LinkUI>Price</LinkUI>
            <LinkUI>Testimonials</LinkUI>
            <LinkUI>Contacts</LinkUI>
          </Navigation>
          <LoginBtn data-call="Log In"></LoginBtn>
        </HeaderWrapper>
      </CustomContainer>
    </HeaderUI>
  )
}

export default Header
