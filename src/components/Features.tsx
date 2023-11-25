import { FC } from 'react';
import { styled } from '@mui/material';
import { CustomContainer } from './CustomElements';
import { CPUImage, CardImage, ChatImage, PlantImage, ScopImage, TeamImage } from './FeatureImgComponents';

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

const Vector = styled('svg')({
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
          <FirstVector xmlns="http://www.w3.org/2000/svg" width="581" height="605" viewBox="0 0 581 605" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M108.629 172.861C133.361 131.062 106.435 67.4353 140.155 32.4817C171.744 -0.263265 226.915 -3.58521 271.828 3.69014C315.341 10.7386 344.182 51.3576 383.207 71.853C418.118 90.1882 458.303 95.44 490.33 118.445C526.195 144.207 575.389 169.531 580.288 213.416C585.478 259.898 520.875 289.038 514.549 335.378C508.008 383.299 569.826 434.273 544.515 475.487C519.917 515.54 450.045 484.482 408.958 507.311C368.333 529.882 358.201 606.444 311.756 604.809C262.753 603.085 252.549 526.109 210.834 500.338C178.226 480.194 132.805 494.574 100.341 474.199C65.2338 452.167 36.499 419.144 20.5205 380.899C4.02968 341.429 -8.03453 294.125 8.6478 254.735C25.6599 214.566 86.4146 210.404 108.629 172.861Z" fill="#3D32F9" />
          </FirstVector>
          <SecondVector xmlns="http://www.w3.org/2000/svg" width="604" height="538" viewBox="0 0 604 538" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M72.096 98.3199C92.779 62.2663 148.837 70.2095 189.181 60.2076C221.439 52.2103 254.381 53.7877 286.479 45.1705C326.815 34.3416 363.378 -11.0697 402.746 2.87243C441.428 16.5714 432.874 81.0356 463.826 107.977C500.409 139.819 569.367 127.292 593.813 169.18C616.42 207.916 592.837 259.165 576.417 300.902C561.428 339 527.411 364.595 503.779 398.027C480.349 431.174 469.428 473.579 437.052 498.062C403.578 523.375 361.115 539.474 319.188 537.617C277.999 535.793 246.809 500.731 207.626 487.901C165.346 474.056 115.829 484.005 79.0437 458.982C40.7696 432.946 -2.97164 392.974 0.189279 346.792C3.76359 294.571 80.5636 274.46 95.1147 224.179C107.121 182.691 50.6041 135.784 72.096 98.3199Z" fill="#391F6F" />
          </SecondVector>
          <ThirdVector xmlns="http://www.w3.org/2000/svg" width="553" height="625" viewBox="0 0 553 625" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M57.412 153.458C82.9762 120.799 135.362 126.427 169.157 102.384C207.75 74.9262 222.674 15.3001 268.489 3.28528C312.842 -8.34623 360.957 16.0644 398.629 42.2058C434.146 66.8521 452.678 108.155 473.894 145.822C491.936 177.853 506.02 211.185 514.019 247.067C521.671 281.391 515.719 316.146 519.654 351.091C524.942 398.057 574.857 456.126 541.309 489.416C503.926 526.511 431.223 458.411 385.379 484.331C339.573 510.23 358.229 600.668 309.485 620.488C267.8 637.438 224.936 590.867 188.576 564.356C156.676 541.097 141.129 502.529 111.664 476.253C78.3637 446.557 19.7326 441.411 3.92194 399.688C-11.5842 358.769 25.6665 316.589 34.9557 273.828C43.7303 233.436 31.9344 186.006 57.412 153.458Z" fill="#CE1AFE" />
          </ThirdVector>
        </GradientsBlock>
      </CustomContainer>
    </FeaturesUI>
  )
}

export default Features;
