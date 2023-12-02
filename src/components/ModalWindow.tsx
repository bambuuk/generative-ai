import { FC } from 'react';
import { styled, IconButton, Divider, Box, Backdrop, Fade, Modal } from '@mui/material';
import { CloseIcon } from './ImgComponents';
import { FullToTransparentBtn } from './CustomElements';
import google from '../assets/icons/google-icon.svg';
import facebook from '../assets/icons/facebook-icon.svg';
import backgroundGradient from '../assets/backgroundFigures/solution/3-vector.svg';

const MainWrapper = styled(Box)(({ theme }) => ({
  '&::-webkit-scrollbar': {
    display: 'none',  /* Safari and Chrome */
  },
  MsOverflowStyle: 'none',
  scrollbarWidth: 'none',
  overflowY: 'auto',
  display: 'flex',
  alignItems: 'center',
  maxWidth: '598px',
  width: '100%',
  height: '100%',
  position: 'absolute' as 'absolute',
  left: '50%',
  top: 0,
  transform: 'translateX(-50%)',
  borderRadius: '50px',
  [theme.breakpoints.down('sm')]: {
    borderRadius: '0',
    top: '0',
    transform: 'translateX(-50%)',
  },
}));

const ContentWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  overflow: 'hidden',
  padding: '60px 86px 60px 86px',
  borderRadius: '50px',
  background: '#13171D',
  [theme.breakpoints.down('sm')]: {
    top: 0,
    transform: 'none',
    minHeight: '100vh',
    borderRadius: '0',
    padding: '50px 15px 50px 15px',
  },
}));

const Title = styled('h3')(({ }) => ({
  color: '#E2E2E2',
  textAlign: 'center',
  fontFamily: 'Work Sans',
  fontSize: '32px',
  fontWeight: '600',
}));

const Subtitle = styled('div')(({ }) => ({
  marginTop: '32px',
  color: '#E2E2E2',
  textAlign: 'center',
  fontFamily: 'Work Sans',
  fontSize: '20px',
  fontWeight: '400',
}));

const CloseIconButton = styled('button')(({ theme }) => ({
  position: 'absolute',
  top: '36px',
  right: '36px',
  backgroundColor: 'transparent',
  [theme.breakpoints.down('sm')]: {
    top: '15px',
    right: '15px',
  }
}));

const Form = styled('form')(({ }) => ({
  marginTop: '27px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const CustomInput = styled('input')(({ theme }) => ({
  width: '100%',
  padding: '8px 20px',
  borderRadius: '20px',
  border: '1px solid #333',
  backgroundColor: 'transparent',
  transition: 'all 0.3s ease-in-out',

  color: '#E2E2E2',
  fontFamily: 'Work Sans',
  fontSize: '20px',
  fontWeight: '500',
  lineHeight: '48px',
  [theme.breakpoints.down('sm')]: {
    lineHeight: '38px'
  },

  '&:hover': {
    border: '1px solid #CE1AFE',
  },
  '&:focus': {
    border: '1px solid #E2E2E2',
  },
  '&:disabled': {
    background: '#4F4F4F',
    color: '#333333',
  },
}));

const FillButton = styled(FullToTransparentBtn)(({ theme }) => ({
  marginTop: '45px',
  maxWidth: 'none',
  [theme.breakpoints.down('sm')]: {
    padding: '15px 30px',
  }
}));

const CustomDivider = styled(Divider)(({ }) => ({
  display: 'flex',
  marginTop: '37px',
  color: '#E2E2E2',
  textAlign: 'center',
  fontFamily: 'Work Sans',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '28px',
  '&:before, &:after': {
    borderTop: 'thin solid #333'
  }
}));

const OtherAuthVariants = styled('div')(({ }) => ({
  padding: '36px',
  display: 'flex',
  justifyContent: 'center',
  gap: '44px',
}));

const AuthButton = styled(IconButton)(({ }) => ({
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  border: '1px solid transparent',
  transition: 'all 0.3s',
  '&:hover': {
    border: '1px solid #CE1AFE',
  }
}));

const AuthImg = styled('img')(({ }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'contain'
}));

const Registration = styled('div')(({ theme }) => ({
  display: 'flex',
  color: '#E2E2E2',
  fontFamily: 'Work Sans',
  fontSize: '20px',
  fontWeight: '500',
  lineHeight: '28px',
  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
    flexDirection: 'column',
  }
}));

const BackgroundGradient = styled('img')(({ }) => ({
  display: 'block',
  position: 'absolute',
  zIndex: '-10',
  bottom: '-411px',
  right: '-170px',
  width: '588.737px',
  height: '569.293px',
  filter: 'blur(512px)',
}));

interface IModalWindowProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const ModalWindow: FC<IModalWindowProps> = ({ isModalOpen, closeModal }) => {
  return (
    <div>
      <Modal
        sx={{ overflow: 'auto' }}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isModalOpen}
        onClose={closeModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isModalOpen}>
          <MainWrapper>
            <ContentWrapper>
              <CloseIconButton onClick={closeModal}>
                <CloseIcon />
              </CloseIconButton>

              <Title>Log in</Title>

              <Subtitle>Enter your information below to log in</Subtitle>

              <Form>
                <CustomInput type='email' placeholder='Email' />
                <CustomInput type='password' placeholder='Password' sx={{ marginTop: '24px' }} />
                <FillButton>Log In</FillButton>
              </Form>

              <CustomDivider>or continue with</CustomDivider>

              <OtherAuthVariants>
                <AuthButton size='medium'>
                  <AuthImg src={google} alt="Google" />
                </AuthButton>
                <AuthButton size='medium'>
                  <AuthImg src={facebook} alt="Facebook" />
                </AuthButton>
              </OtherAuthVariants>

              <Registration>
                Don't have an account?&nbsp;<Box sx={{ color: '#3D32F9', textDecoration: 'underline', cursor: 'pointer' }}>Create an account</Box>
              </Registration>

              <BackgroundGradient src={backgroundGradient} />
            </ContentWrapper>
          </MainWrapper>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalWindow;