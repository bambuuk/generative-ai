import { FC } from 'react';
import { styled } from '@mui/material';
import { CustomContainer } from './CustomElements';

const HowItWorksUI = styled('section')({
  width: '100%',
});

const HowItWorks: FC = () => {
  return (
    <HowItWorksUI>
      <CustomContainer>
        s
      </CustomContainer>
    </HowItWorksUI>
  )
}

export default HowItWorks;

