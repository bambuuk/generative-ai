import { FC } from 'react';
import { styled } from '@mui/material';
import { nanoid } from 'nanoid';
import { TransparentToFullBtn, FullToTransparentBtn } from './CustomElements';
import checkBox from '../assets/icons/check-box.svg';
import { ITariffPlane } from '../types/ITariffPlane';

const PriceCardUI = styled('div')(({ }) => ({
  overflow: 'hidden',
  display: 'flex',
  width: '100%',
  maxWidth: '398px',
  maxHeight: '847px',
  height: 'auto',
  padding: '0px 20px',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '40px',
  borderRadius: '50px',
  border: '1px solid #391F6F',
  background: 'linear-gradient(214deg, rgba(72, 43, 141, 0.20) 5.44%, rgba(24, 12, 51, 0.04) 94.54%)',
}));

const PremiumPriceCardUI = styled(PriceCardUI)(({ }) => ({
  gap: '60px',
  maxWidth: '440px',
  maxHeight: '951px',
  border: '1px solid #CE1AFE',
  background: 'linear-gradient(214deg, rgba(72, 43, 141, 0.20) 5.44%, rgba(24, 12, 51, 0.04) 94.54%)',
}));

const TariffPlaneBlock = styled('div')(({ }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '40px 40px 0 40px',
}));

const TariffPlaneTitle = styled('div')(({ }) => ({
  padding: '20px 32px',
  color: '#E2E2E2',
  textAlign: 'center',
  fontFamily: 'Work Sans',
  fontSize: '24px',
  fontWeight: '400',
  lineHeight: '32px',
}));

const PremiumTariffPlaneTitle = styled(TariffPlaneTitle)(({ }) => ({
  color: '#CE1AFE',
  fontSize: '32px',
  fontWeight: '600',
  lineHeight: '48px',
}));

const TariffPlanePriceBlock = styled('div')(({ }) => ({
  display: 'flex',
  marginTop: '28px',
  alignItems: 'center'
}));

const TariffPlanePrice = styled('div')(({ }) => ({
  color: '#E2E2E2',
  fontFamily: 'Anton',
  fontSize: '64px',
  fontWeight: '400',
  lineHeight: '72px',
}));

const TariffPlanePricePeriod = styled('div')(({ }) => ({
  color: '#E2E2E2',
  fontFamily: 'Work Sans',
  fontSize: '24px',
  fontWeight: '400',
  lineHeight: '32px',
}));

const TariffPlaneStart = styled('div')(({ }) => ({
  marginTop: '16px',
  color: '#E2E2E2',
  textAlign: 'center',
  fontFamily: 'Work Sans',
  fontSize: '20px',
  fontWeight: '400',
  lineHeight: '28px',
}));

const TariffFeaturesList = styled('ul')(({ }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

const TariffFeature = styled('li')(({ }) => ({
  padding: '20px 40px',
  display: 'grid',
  gridTemplateColumns: '31px 1fr',
  alignItems: 'center',
  gap: '20px',
  borderBottom: '1px solid #333',
  color: '#E2E2E2',
  fontFamily: 'Work Sans',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '24px',
}));

const CheckImgWrapper = styled('div')(({ }) => ({
  width: '31px',
  height: '31px',
  padding: '9px 5px 7px 5px',
  borderRadius: '5px',
  background: 'linear-gradient(100deg, #391F6F 15.2%, #CE1AFE 104.12%)',
  position: "relative",
  zIndex: 1,
  "&::before": {
    content: '""',
    position: "absolute",
    left: "1px",
    right: "1px",
    top: "1px",
    bottom: "1px",
    borderRadius: "5px",
    backgroundColor: "rgba(36, 36, 36)",
    zIndex: -1,
  },
}));

const CheckBoxImg = styled('img')(({ }) => ({
  position: 'relative',
  zIndex: 2
}));

const TransparentButton = styled(TransparentToFullBtn)(({ }) => ({
  padding: '20px 40px',
  maxWidth: '286px',
  width: '100%',
  marginBottom: '50px',
}));

const FillButton = styled(FullToTransparentBtn)(({ }) => ({
  padding: '20px 40px',
  maxWidth: '286px',
  width: '100%',
  marginBottom: '50px',
}));

interface PriceCardProps extends ITariffPlane { };

const PriceCard: FC<PriceCardProps> = ({ tariffPlaneTitle, tariffPlanePrice, tariffFeatures, cardType }) => {
  return (
    <>
      {
        cardType === 'simple' ? (
          <PriceCardUI>
            <TariffPlaneBlock>
              <TariffPlaneTitle>{tariffPlaneTitle}</TariffPlaneTitle>
              <TariffPlanePriceBlock>
                <TariffPlanePrice>${tariffPlanePrice}</TariffPlanePrice>
                <TariffPlanePricePeriod>/ year</TariffPlanePricePeriod>
              </TariffPlanePriceBlock>
              <TariffPlaneStart>Start with a Free Experience</TariffPlaneStart>
            </TariffPlaneBlock>

            <TariffFeaturesList>
              {tariffFeatures.map((item) => (
                <TariffFeature key={nanoid()}>
                  <CheckImgWrapper>
                    <CheckBoxImg src={checkBox} alt="" />
                  </CheckImgWrapper>
                  {item}
                </TariffFeature>
              ))}
            </TariffFeaturesList>

            <TransparentButton>Start now</TransparentButton>
          </PriceCardUI>
        ) : (
          <PremiumPriceCardUI>
            <TariffPlaneBlock>
              <PremiumTariffPlaneTitle>{tariffPlaneTitle}</PremiumTariffPlaneTitle>
              <TariffPlanePriceBlock>
                <TariffPlanePrice>${tariffPlanePrice}</TariffPlanePrice>
                <TariffPlanePricePeriod>/ year</TariffPlanePricePeriod>
              </TariffPlanePriceBlock>
              <TariffPlaneStart>Start with a Free Experience</TariffPlaneStart>
            </TariffPlaneBlock>

            <TariffFeaturesList>
              {tariffFeatures.map((item) => (
                <TariffFeature key={nanoid()}>
                  <CheckImgWrapper>
                    <CheckBoxImg src={checkBox} alt="" />
                  </CheckImgWrapper>
                  {item}
                </TariffFeature>
              ))}
            </TariffFeaturesList>

            <FillButton>Start now</FillButton>
          </PremiumPriceCardUI>
        )
      }
    </>
  )
}

export default PriceCard;
