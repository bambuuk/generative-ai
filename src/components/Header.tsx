import { FC } from 'react';
import { IconButton, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { CustomContainer } from './CustomElements';
import { TransparentToFullBtn } from './CustomElements';
import logo from '../assets/logo.svg';

const HeaderUI = styled('header')(({ theme }) => ({
  width: '100%',
  height: '100px',
  overflow: 'hidden',
  backgroundColor: theme.palette.otherColor?.darkGray,
  [theme.breakpoints.down(1024)]: {
    height: '85px',
  },
}));

const HeaderWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '16px 0',
  [theme.breakpoints.down('lg')]: {
    padding: '15px 0',
    height: '100%'
  },
}));

const LogoBox = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '149px',
  [theme.breakpoints.down(1024)]: {
    justifyContent: 'center',
    width: 'auto',
  },
}));

const LogoTitle = styled('div')(({ theme }) => ({
  color: '#A992DB',
  textAlign: 'center',
  fontFamily: 'Work Sans',
  fontSize: '24px',
  fontWeight: '700',
  lineHeight: '28px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '20px',
    lineHeight: '24px',
  },
  [theme.breakpoints.down(1024)]: {
    fontSize: '16px',
    lineHeight: '18px',
  },
}));

const Navigation = styled('nav')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '48px',
  [theme.breakpoints.down('lg')]: {
    gap: '24px',
  },
  [theme.breakpoints.down(1024)]: {
    display: 'none',
  },
}));

const LinkUI = styled('a')(({ theme }) => ({
  position: 'relative',
  color: '#FFF',
  textAlign: 'center',
  fontFamily: 'Work Sans',
  fontSize: '20px',
  fontWeight: '400',
  lineHeight: '24px',
  transition: 'color 0.3s',
  '&:hover': {
    color: '#CE1AFE',
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 0,
    color: 'transparent',
    background: '#CE1AFE',
    height: '1px',
    transition: 'all 0.7s',
  },
  // '&:active:after': {
  //   width: '100%',
  //   left: 0,
  // }
  [theme.breakpoints.down('lg')]: {
    fontSize: '18px',
    lineHeight: '20px',
  },
}));

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  color: "#A992DB",
  [theme.breakpoints.down(1024)]: {
    display: 'block',
  },
}));

const LogoImage = styled('img')(({ theme }) => ({
  width: 'auto',
  height: 'auto',
  objectFit: 'fill',
  [theme.breakpoints.down(1024)]: {
    width: '90px',
  },
}));

const Header: FC = () => {

  return (
    <HeaderUI>
      <CustomContainer>
        <HeaderWrapper>
          <LogoBox>
            <LogoImage src={logo} alt="Logo" />
            <LogoTitle>AI Genius</LogoTitle>
          </LogoBox>
          <CustomIconButton
            size="medium"
            edge="start"
            aria-label="menu"
          >
            <MenuIcon style={{ fontSize: '40px' }} />
          </CustomIconButton>
          <Navigation>
            <LinkUI href="#">Home</LinkUI>
            <LinkUI href="#">Features</LinkUI>
            <LinkUI href="#">Solution</LinkUI>
            <LinkUI href="#">Price</LinkUI>
            <LinkUI href="#">Testimonials</LinkUI>
            <LinkUI href="#">Contacts</LinkUI>
          </Navigation>
          <TransparentToFullBtn>Log In</TransparentToFullBtn>
        </HeaderWrapper>
      </CustomContainer>
    </HeaderUI>
  )
}

export default Header
