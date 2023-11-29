import { FC } from 'react';
import { styled } from '@mui/material';
import { CustomContainer, Title, Overview } from './CustomElements';
import { CPUImage, CardImage, ChatImage, PlantImage, ScopImage, TeamImage } from './ImgComponents';
import firstVector from '../assets/backgroundFigures/features/1-vector.svg';
import secondVector from '../assets/backgroundFigures/features/2-vector.svg';
import thirdVector from '../assets/backgroundFigures/features/3-vector.svg';
import star from '../assets/backgroundFigures/star.svg';

const FeaturesUI = styled('section')({
  width: '100%',
});

const FeaturesWrapper = styled('div')(({ }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const CustomTitle = styled(Title)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    fontSize: '32px',
    lineHeight: '40px',
  },
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    fontSize: '26px',
    lineHeight: '35px',
  },
}));

const GradientTitle = styled('div')(({ theme }) => ({
  background: 'linear-gradient(100deg, #391F6F 15.2%, #CE1AFE 104.12%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: '#E2E2E2',
  fontFamily: 'Anton',
  fontSize: '48px',
  fontWeight: '400',
  lineHeight: '60px',
  [theme.breakpoints.down('md')]: {
    fontSize: '32px',
    lineHeight: '40px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '26px',
    lineHeight: '35px',
  }
}));

const FeaturesCardList = styled('div')(({ theme }) => ({
  position: 'relative',
  marginTop: '88px',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 400px)',
  gridTemplateRows: 'repeat(2, 1fr)',
  gridAutoRows: '1fr',
  gap: '20px',
  [theme.breakpoints.down(1300)]: {
    gridTemplateColumns: 'repeat(2, 400px)',
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'minmax(200px, 400px)',
  },
}));

const FeatureCard = styled('div')(({ theme }) => ({
  padding: '40px 24px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '40px',
  borderRadius: '20px',
  border: '1px solid #333',
  background: 'linear-gradient(214deg, rgba(72, 43, 141, 0.20) 5.44%, rgba(24, 12, 51, 0.04) 94.54%)',
  [theme.breakpoints.down('sm')]: {
    gap: '20px',
  },
}));

const ImageWrapper = styled('div')(({ }) => ({
  display: 'flex',
  height: '100px',
  width: '100%',
  justifyContent: 'center',
  position: 'relative',
}));

const CardDescription = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  [theme.breakpoints.down('sm')]: {
    gap: '15px',
  },
}));

const CardTitle = styled('h3')(({ theme }) => ({
  color: '#E2E2E2',
  textAlign: 'center',
  fontFamily: 'Anton',
  fontSize: '36px',
  fontWeight: '400',
  lineHeight: '40px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '25px',
    lineHeight: '28px',
  },
}));

const CardDescrText = styled('p')(({ }) => ({
  color: '#E2E2E2',
  textAlign: 'center',
  fontFamily: 'Work Sans',
  fontSize: '18px',
  fontWeight: '400',
  lineHeight: '24px',
}));

const GradientsBlock = styled('div')(({ theme }) => ({
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
  [theme.breakpoints.down(1300)]: {
    maxWidth: '893px',
    maxHeight: '872px',
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '659px',
    maxHeight: '631px',
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '359px',
    maxHeight: '331px',
  },
}));

const SecondGradientsBlock = styled('div')(({ theme }) => ({
  display: 'none',
  position: 'static',
  zIndex: '-10',
  top: '1780px',
  left: '100px',
  maxWidth: '992.516px',
  maxHeight: '968px',
  width: '100%',
  height: '100%',
  transform: 'rotate(-55.229deg)',
  filter: 'blur(327px)',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    position: 'absolute',
    maxWidth: '359px',
    maxHeight: '331px',
  },
}));

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

const StarImg = styled('img')(({ theme }) => ({
  position: 'absolute',
  right: '-50px',
  top: '50%',
  transform: 'translateY(-50%) rotate(7.108deg)',
  zIndex: '-1',
  width: '121.909px',
  height: '121.909px',
  [theme.breakpoints.down(1400)]: {
    right: '-25px'
  },
  [theme.breakpoints.down('lg')]: {
    right: '-50px',
  }
}));

const Features: FC = () => {
  return (
    <FeaturesUI>
      <CustomContainer sx={{ position: 'relative', overflow: { xs: 'hidden', sm: 'visible' }, }}>
        <FeaturesWrapper>
          <CustomTitle>How&nbsp;<GradientTitle>AI GENIUS</GradientTitle>&nbsp;improve your business?</CustomTitle>
          <Overview>
            Discover how we simplify the process of creating your own AI-as-a-service platform with its advanced,
            user friendly features
          </Overview>
          <FeaturesCardList>
            <StarImg src={star} alt="star" />
            <FeatureCard>
              <ImageWrapper>
                <ChatImage />
              </ImageWrapper>
              <CardDescription>
                <CardTitle>
                  Chat playground
                </CardTitle>
                <CardDescrText>
                  Have full engaging conversation with AI, without topic restrictions, in our chat playground
                </CardDescrText>
              </CardDescription>
            </FeatureCard>

            <FeatureCard>
              <ImageWrapper>
                <CPUImage />
              </ImageWrapper>
              <CardDescription>
                <CardTitle>
                  Dynamic tools
                </CardTitle>
                <CardDescrText>
                  Build and configure your own prompts and tools dynamically for a personalized AI experience
                </CardDescrText>
              </CardDescription>
            </FeatureCard>

            <FeatureCard>
              <ImageWrapper>
                <TeamImage />
              </ImageWrapper>
              <CardDescription>
                <CardTitle>
                  Support
                </CardTitle>
                <CardDescrText>
                  Go global and connect with users worldwide with our multilingual support
                </CardDescrText>
              </CardDescription>
            </FeatureCard>

            <FeatureCard>
              <ImageWrapper>
                <PlantImage />
              </ImageWrapper>
              <CardDescription>
                <CardTitle>
                  Workspace
                </CardTitle>
                <CardDescrText>
                  Your customers can form teams and shared workspace to collaborate seamlessly
                </CardDescrText>
              </CardDescription>
            </FeatureCard>

            <FeatureCard>
              <ImageWrapper>
                <CardImage />
              </ImageWrapper>
              <CardDescription>
                <CardTitle>
                  Easy payment
                </CardTitle>
                <CardDescrText>
                  Production ready and hassle-free payments with using powerful tools
                </CardDescrText>
              </CardDescription>
            </FeatureCard>

            <FeatureCard>
              <ImageWrapper>
                <ScopImage />
              </ImageWrapper>
              <CardDescription>
                <CardTitle>
                  Easy Scalability
                </CardTitle>
                <CardDescrText>
                  We constantly upgrade our platform for the latest AI tools and features
                </CardDescrText>
              </CardDescription>
            </FeatureCard>

          </FeaturesCardList>
        </FeaturesWrapper>
        <GradientsBlock>
          <FirstVector src={firstVector} />
          <SecondVector src={secondVector} />
          <ThirdVector src={thirdVector} />
        </GradientsBlock>
        <SecondGradientsBlock>
          <FirstVector src={firstVector} />
          <SecondVector src={secondVector} />
          <ThirdVector src={thirdVector} />
        </SecondGradientsBlock>
      </CustomContainer>
    </FeaturesUI>
  )
}

export default Features;
