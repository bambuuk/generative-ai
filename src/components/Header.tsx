import { FC } from 'react';
import { styled } from '@mui/material';

const HeaderUI = styled('header')({});

const Header: FC = () => {
  return (
    <HeaderUI sx={{ fontFamily: 'Anton' }}>
      Header
    </HeaderUI>
  )
}

export default Header
