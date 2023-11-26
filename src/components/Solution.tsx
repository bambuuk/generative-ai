import { FC } from 'react';
import { styled } from '@mui/material';
import { CustomContainer } from './CustomElements';

const SolutionUI = styled('section')({
  width: '100%',
});

const MainWrapper = styled('div')(({ }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
}));

const Solution: FC = () => {
  return (
    <SolutionUI>
      <CustomContainer>
        <MainWrapper>
          s
        </MainWrapper>
      </CustomContainer>
    </SolutionUI>
  )
}

export default Solution;
