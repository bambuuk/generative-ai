import { FC } from 'react';
import { styled } from '@mui/material';
import { CustomContainer } from './CustomElements';

const HeaderUI = styled('header')({});

const Header: FC = () => {
  return (
    <HeaderUI sx={{ fontFamily: 'Anton' }}>
      <CustomContainer>
        Header
      </CustomContainer>
    </HeaderUI>
  )
}

export default Header
