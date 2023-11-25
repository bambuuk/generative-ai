import { FC } from 'react';
import { styled } from '@mui/material';
import { CustomContainer } from './CustomElements';
import { CPUImage, CardImage, ChatImage, PlantImage, ScopImage, TeamImage } from './FeatureImgComponents';
import firstVector from '../assets/backgroundFigures/features/1-vector.svg';
import secondVector from '../assets/backgroundFigures/features/2-vector.svg';
import thirdVector from '../assets/backgroundFigures/features/3-vector.svg';

const FeaturesUI = styled('section')({
  width: '100%',
});

const FeaturesWrapper = styled('div')(({ }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const Title = styled('h2')(({ theme }) => ({
  display: 'flex',
  color: '#E2E2E2',
  fontFamily: 'Anton',
  fontSize: '32px',
  fontWeight: '400',
  lineHeight: '40px',
  [theme.breakpoints.down('sm')]: {}
}));

const GradientTitle = styled('div')(({ }) => ({
  background: 'linear-gradient(100deg, #391F6F 15.2%, #CE1AFE 104.12%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: '#E2E2E2',
  fontFamily: 'Anton',
  fontSize: '32px',
  fontWeight: '400',
  lineHeight: '40px',
}));

const Subtitle = styled('p')(({ }) => ({
  display: 'block',
  maxWidth: '1040px',
  width: '100%',
  marginTop: '16px',
  color: '#E2E2E2',
  textAlign: 'center',
  fontFamily: 'Work Sans',
  fontSize: '24px',
  fontWeight: '400',
  lineHeight: '32px',
}));

const FeaturesCardList = styled('div')(({ }) => ({
  marginTop: '88px',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 400px)',
  gridTemplateRows: 'repeat(2, 375px)',
  gap: '20px',
}));

const FeatureCard = styled('div')(({ }) => ({
  padding: '40px 24px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '20px',
  border: '1px solid #333',
  background: 'linear-gradient(214deg, rgba(72, 43, 141, 0.20) 5.44%, rgba(24, 12, 51, 0.04) 94.54%)',
}));

const ImageWrapper = styled('div')(({ }) => ({
  display: 'flex',
  height: '100px',
  width: '100%',
  justifyContent: 'center',
  position: 'relative',
}));

const CardDescription = styled('div')({
  marginTop: '140px',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
});

const CardTitle = styled('h3')(({ }) => ({
  color: '#E2E2E2',
  textAlign: 'center',
  fontFamily: 'Anton',
  fontSize: '36px',
  fontWeight: '400',
  lineHeight: '40px',
}));

const CardDescrText = styled('p')(({ }) => ({
  color: '#E2E2E2',
  textAlign: 'center',
  fontFamily: 'Work Sans',
  fontSize: '20px',
  fontWeight: '400',
  lineHeight: '28px',
}));

const GradientsBlock = styled('div')({
  position: 'absolute',
  zIndex: '-10',
  top: '380px',
  left: '100px',
  maxWidth: '992.516px',
  maxHeight: '968px',
  width: '100%',
  height: '100%',
  transform: 'rotate(-55.229deg)',
  filter: 'blur(327px)',
});

const Vector = styled('img')({
  display: 'block',
  position: 'absolute',
  width: '100%',
  height: '100%',
});

const FirstVector = styled(Vector)({
  maxWidth: '515.075px',
  maxHeight: '585.58px',
  fill: "#3D32F9",
  top: 0,
  right: '110px'
});

const SecondVector = styled(Vector)({
  maxWidth: '560.633px',
  maxHeight: '533.336px',
  fill: '#391F6F',
  bottom: 0,
  right: 0,
});

const ThirdVector = styled(Vector)({
  maxWidth: '552.022px',
  maxHeight: '589.882px',
  fill: '#CE1AFE',
  bottom: 0,
  left: 0,
});

const Features: FC = () => {
  return (
    <FeaturesUI>
      <CustomContainer sx={{ position: 'relative' }}>
        <FeaturesWrapper>
          <Title>How&nbsp;<GradientTitle>AI GENIUS</GradientTitle>&nbsp;improve your business?</Title>
          <Subtitle>
            Discover how we simplify the process of creating your own AI-as-a-service platform with its advanced,
            user friendly features
          </Subtitle>
          <FeaturesCardList>
            <FeatureCard>
              <ImageWrapper>
                <ChatImage />
                <CardDescription>
                  <CardTitle>
                    Chat playground
                  </CardTitle>
                  <CardDescrText>
                    Have full engaging conversation with AI, without topic restrictions, in our chat playground
                  </CardDescrText>
                </CardDescription>
              </ImageWrapper>
            </FeatureCard>

            <FeatureCard>
              <ImageWrapper>
                <CPUImage />
                <CardDescription>
                  <CardTitle>
                    Dynamic tools
                  </CardTitle>
                  <CardDescrText>
                    Build and configure your own prompts and tools dynamically for a personalized AI experience
                  </CardDescrText>
                </CardDescription>
              </ImageWrapper>
            </FeatureCard>

            <FeatureCard>
              <ImageWrapper>
                <TeamImage />
                <CardDescription>
                  <CardTitle>
                    Support
                  </CardTitle>
                  <CardDescrText>
                    Go global and connect with users worldwide with our multilingual support
                  </CardDescrText>
                </CardDescription>
              </ImageWrapper>
            </FeatureCard>

            <FeatureCard>
              <ImageWrapper>
                <PlantImage />
                <CardDescription>
                  <CardTitle>
                    Workspace
                  </CardTitle>
                  <CardDescrText>
                    Your customers can form teams and shared workspace to colaborate seamlessly
                  </CardDescrText>
                </CardDescription>
              </ImageWrapper>
            </FeatureCard>

            <FeatureCard>
              <ImageWrapper>
                <CardImage />
                <CardDescription>
                  <CardTitle>
                    Easy payment
                  </CardTitle>
                  <CardDescrText>
                    Production ready and hassle-free payments with using powerfool tools
                  </CardDescrText>
                </CardDescription>
              </ImageWrapper>
            </FeatureCard>

            <FeatureCard>
              <ImageWrapper>
                <ScopImage />
                <CardDescription>
                  <CardTitle>
                    Easy Scalability
                  </CardTitle>
                  <CardDescrText>
                    We constantly upgrade our platform for the latest AI tools and features
                  </CardDescrText>
                </CardDescription>
              </ImageWrapper>
            </FeatureCard>

          </FeaturesCardList>
        </FeaturesWrapper>
        <GradientsBlock>
          <FirstVector src={firstVector} />
          <SecondVector src={secondVector} />
          <ThirdVector src={thirdVector} />
        </GradientsBlock>
      </CustomContainer>
    </FeaturesUI>
  )
}

export default Features;
