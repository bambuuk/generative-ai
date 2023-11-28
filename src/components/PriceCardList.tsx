import { FC } from 'react';
import { styled } from '@mui/material';
import { nanoid } from 'nanoid';
import { CustomContainer, Title } from './CustomElements';
import PriceCard from './PriceCard';
import { ITariffPlane } from '../types/ITariffPlane';
import firstVector from '../assets/backgroundFigures/solution/1-vector.svg';
import secondVector from '../assets/backgroundFigures/solution/2-vector.svg';

const PriceUI = styled('section')({
  width: '100%',
  position: 'relative',
});

const MainWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '88px',
  position: 'relative',
  [theme.breakpoints.down('lg')]: {
    gap: '60px',
  },
}));

const PriceCardListUI = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, auto)',
  alignItems: 'center',
  [theme.breakpoints.down(1024)]: {
    gridTemplateColumns: 'auto',
    justifyContent: 'center',
    gap: '40px'
  }
}));

const FirstBackgroundBlock = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: '-10',
  top: '-147px',
  right: '-141px',
  maxWidth: '588px',
  maxHeight: '569px',
  width: '100%',
  height: '100%',
  filter: 'blur(377px)',
  [theme.breakpoints.down('md')]: {
    maxWidth: '359px',
    maxHeight: '331px',
  },
  [theme.breakpoints.down('md')]: {
    right: '0',
  },
}));

const SecondBackgroundBlock = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: '-10',
  top: '181px',
  right: '-416px',
  maxWidth: '588px',
  maxHeight: '569px',
  width: '100%',
  height: '100%',
  filter: 'blur(262px)',
  [theme.breakpoints.down('md')]: {
    maxWidth: '359px',
    maxHeight: '331px',
  },
  [theme.breakpoints.down('sm')]: {
    right: '0',
  },
}));

const Vector = styled('img')({
  display: 'block',
  position: 'absolute',
});

const FirstVector = styled(Vector)({
  fill: "#3D32F9",
  width: '588.737px',
  height: '569.293px',
});

const SecondVector = styled(Vector)({
  fill: '#391F6F',
  width: '588.737px',
  height: '569.293px',
});

const PriceCardList: FC = () => {
  const priceList: ITariffPlane[] = [
    {
      tariffPlaneTitle: 'Free plan',
      tariffPlanePrice: '00',
      tariffFeatures: [
        'Access to unlimited dynamic custom prompts ',
        'Open chat with AI',
        'Access to latest technology GPT4',
        'Custom domain',
      ],
      cardType: 'simple',
    },
    {
      tariffPlaneTitle: 'Premium plan',
      tariffPlanePrice: '290',
      tariffFeatures: [
        'Access to unlimited dynamic custom prompts',
        'Open chat with AI',
        'Access to latest technology GPT4',
        'Custom domain',
        'Priority email support'
      ],
      cardType: 'premium',
    },
    {
      tariffPlaneTitle: 'Starter plan',
      tariffPlanePrice: '190',
      tariffFeatures: [
        'Custom domain',
        'Multilingual support',
        'Choose between different themes',
        'Custom chat bots',
      ],
      cardType: 'simple',
    },
  ];
  return (
    <PriceUI>
      <CustomContainer>
        <MainWrapper>
          <Title>Customized prices for you</Title>
          <PriceCardListUI>
            {priceList.map(({ tariffPlaneTitle, tariffPlanePrice, tariffFeatures, cardType }) => {
              return (
                <PriceCard
                  key={nanoid()}
                  tariffPlaneTitle={tariffPlaneTitle}
                  tariffPlanePrice={tariffPlanePrice}
                  tariffFeatures={tariffFeatures}
                  cardType={cardType}
                />
              );
            })}
          </PriceCardListUI>
          <FirstBackgroundBlock>
            <FirstVector src={firstVector} />
          </FirstBackgroundBlock>
          <SecondBackgroundBlock>
            <SecondVector src={secondVector} />
          </SecondBackgroundBlock>
        </MainWrapper>
      </CustomContainer>
    </PriceUI>
  )
}

export default PriceCardList;
