import { FC } from 'react';
import { styled } from '@mui/material';
import { nanoid } from 'nanoid';
import { CustomContainer, Title } from './CustomElements';
import PriceCard from './PriceCard';
import { ITariffPlane } from '../types/ITariffPlane';

const PriceUI = styled('section')({
  width: '100%'
});

const MainWrapper = styled('div')(({ }) => ({
  marginTop: '120px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '88px',
}));

const PriceCardListUI = styled('div')(({ }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, auto)',
  alignItems: 'center',
}));

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
        </MainWrapper>
      </CustomContainer>
    </PriceUI>
  )
}

export default PriceCardList;
