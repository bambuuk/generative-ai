import { FC } from 'react';
import { IconButton, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { CustomContainer } from './CustomElements';
import { TransparentToFullBtn } from './CustomElements';
import Logo from './Logo';
import { scrollToSection } from '../utils/scrollToSection';

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

const LinkUI = styled('button')(({ theme }) => ({
  outline: 'none',
  background: 'transparent',
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

const TransparentButton = styled(TransparentToFullBtn)(({ theme }) => ({
  [theme.breakpoints.down(1024)]: {
    display: 'none'
  }
}));

const Header: FC = () => {

  return (
    <HeaderUI id="header">
      <CustomContainer>
        <HeaderWrapper>
          <Logo />
          <CustomIconButton
            size="medium"
            edge="start"
            aria-label="menu"
          >
            <MenuIcon style={{ fontSize: '40px' }} />
          </CustomIconButton>
          <Navigation>
            <LinkUI onClick={() => scrollToSection('home')}>Home</LinkUI>
            <LinkUI onClick={() => scrollToSection('features')}>Features</LinkUI>
            <LinkUI onClick={() => scrollToSection('solution')}>Solution</LinkUI>
            <LinkUI onClick={() => scrollToSection('price')}>Price</LinkUI>
            <LinkUI onClick={() => scrollToSection('testimonials')}>Testimonials</LinkUI>
            <LinkUI onClick={() => scrollToSection('contacts')}>Contacts</LinkUI>
          </Navigation>
          <TransparentButton>Log In</TransparentButton>
        </HeaderWrapper>
      </CustomContainer>
    </HeaderUI>
  )
}

export default Header
