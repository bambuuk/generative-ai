import { FC } from 'react';
import { styled } from '@mui/material';
import logo from '../assets/logo.svg';


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

const LogoImage = styled('img')(({ theme }) => ({
  width: 'auto',
  height: 'auto',
  objectFit: 'fill',
  [theme.breakpoints.down(1024)]: {
    width: '90px',
  },
}));

const Logo: FC = () => {
  return (
    <LogoBox>
      <LogoImage src={logo} alt="Logo" />
      <LogoTitle>AI Genius</LogoTitle>
    </LogoBox>
  )
}

export default Logo
