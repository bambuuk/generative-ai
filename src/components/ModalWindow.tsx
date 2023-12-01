import { FC } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { styled, IconButton } from '@mui/material';
import { CloseIcon } from './ImgComponents';
import { FullToTransparentBtn } from './CustomElements';
import google from '../assets/icons/google-icon.svg';
import facebook from '../assets/icons/facebook-icon.svg';

const style = {
  maxWidth: '598px',
  width: '100%',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: '94px 86px 67px 86px',
  borderRadius: '50px',
  background: '#13171D',
};

const Title = styled('h3')(({ }) => ({
  color: '#E2E2E2',
  textAlign: 'center',
  fontFamily: 'Work Sans',
  fontSize: '32px',
  fontWeight: '600',
  lineHeight: '48px',
}));

const Subtitle = styled('div')(({ }) => ({
  marginTop: '32px',
  color: '#E2E2E2',
  textAlign: 'center',
  fontFamily: 'Work Sans',
  fontSize: '20px',
  fontWeight: '400',
}));

const CloseIconButton = styled('button')(({ }) => ({
  position: 'absolute',
  top: '36px',
  right: '36px',
  backgroundColor: 'transparent',
}));

const Form = styled('form')(({ }) => ({
  marginTop: '47px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const CustomInput = styled('input')(({ }) => ({
  width: '100%',
  padding: '8px 20px',
  borderRadius: '20px',
  border: '1px solid #333',
  backgroundColor: 'transparent',

  color: '#E2E2E2',
  fontFamily: 'Work Sans',
  fontSize: '20px',
  fontWeight: '500',
  lineHeight: '48px',
}));

const FillButton = styled(FullToTransparentBtn)(({ theme }) => ({
  marginTop: '45px',
  maxWidth: 'none',
  [theme.breakpoints.down('sm')]: {
    padding: '15px 30px',
  }
}));

const CustomDivider = styled('div')(({ }) => ({
  position: 'relative',
  marginTop: '47px',
  color: '#E2E2E2',
  textAlign: 'center',
  fontFamily: 'Work Sans',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '28px',
  '&:before': {
    content: '""',
    maxWidth: '140px',
    width: '100%',
    height: '1px',
    background: '#333',
    display: 'block',
    position: 'absolute',
    top: '50%',
    left: '0'
  },
  '&:after': {
    content: '""',
    maxWidth: '140px',
    width: '100%',
    height: '1px',
    background: '#333',
    display: 'block',
    position: 'absolute',
    top: '50%',
    right: '0'
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

const Registration = styled('div')(({ }) => ({
  color: '#E2E2E2',
  fontFamily: 'Work Sans',
  fontSize: '20px',
  fontWeight: '500',
  lineHeight: '28px',
}));

interface IModalWindowProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const ModalWindow: FC<IModalWindowProps> = ({ isModalOpen, closeModal }) => {
  return (
    <div>
      <Modal
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
          <Box sx={style}>
            <CloseIconButton>
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
              Don't have an account? Create an account
            </Registration>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalWindow;