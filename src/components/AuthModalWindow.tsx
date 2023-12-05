import { FC, useEffect } from 'react';
import { styled, IconButton, Divider, Box, Backdrop, Fade, Modal } from '@mui/material';
import { CloseIcon } from './ImgComponents';
import { FullToTransparentBtn, ValidationErrorMessage } from './CustomElements';
import { useGetValidationLogin, useGetValidationSignUp } from '../hooks/useGetValidationInfo';
import { initialLogInValue, initialSignUpValue } from '../constants';
import { IModalType } from "../types/IModalType";

import google from '../assets/icons/google-icon.svg';
import facebook from '../assets/icons/facebook-icon.svg';

const MainWrapper = styled(Box)(({ theme }) => ({
  '&::-webkit-scrollbar': {
    display: 'none',  /* Safari and Chrome */
  },
  MsOverflowStyle: 'none',
  scrollbarWidth: 'none',
  overflowY: 'auto',
  display: 'flex',
  alignItems: 'center',
  maxWidth: '600px',
  width: '100%',
  height: '100%',
  position: 'absolute' as 'absolute',
  left: '50%',
  top: 0,
  transform: 'translateX(-50%)',
  borderRadius: '50px',
  [theme.breakpoints.down(1550)]: {
    maxWidth: '550px',
  },
  [theme.breakpoints.down('sm')]: {
    borderRadius: '0',
    top: '0',
    transform: 'translateX(-50%)',
    maxWidth: 'none',
  },
}));

const ContentWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  overflow: 'hidden',
  padding: '94px 86px 64px 86px',
  borderRadius: '50px',
  background: 'linear-gradient(130deg, rgba(23,23,23,1) 0%, rgba(55,23,72,1) 100%)',
  [theme.breakpoints.down(1550)]: {
    padding: '60px 56px 60px 56px',
  },
  [theme.breakpoints.down('sm')]: {
    top: 0,
    transform: 'none',
    minHeight: '100vh',
    borderRadius: '0',
    padding: '50px 15px 50px 15px',
  },
}));

const Title = styled('h3')(({ theme }) => ({
  color: '#E2E2E2',
  textAlign: 'center',
  fontFamily: 'Work Sans',
  fontSize: '32px',
  fontWeight: '600',
  lineHeight: '48px',
  [theme.breakpoints.down(1550)]: {
    lineHeight: '1',
  },
}));

const Subtitle = styled('div')(({ theme }) => ({
  color: '#E2E2E2',
  textAlign: 'center',
  fontFamily: 'Work Sans',
  fontSize: '20px',
  fontWeight: '400',
  [theme.breakpoints.down(1550)]: {
    marginTop: '18px',
    fontSize: '18px',
  },
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
  padding: '15px 20px',
  borderRadius: '20px',
  border: '1px solid #333',
  backgroundColor: 'transparent',
  transition: 'all 0.3s ease-in-out',

  color: '#E2E2E2',
  fontFamily: 'Work Sans',
  fontSize: '20px',
  fontWeight: '500',
  lineHeight: '15px',
  [theme.breakpoints.down(1550)]: {
    fontSize: '16px',
  },

  '&:hover': {
    "@media (hover: hover) and (pointer: fine)": {
      border: '1px solid #CE1AFE',
    },
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
  [theme.breakpoints.down(1550)]: {
    marginTop: '30px',
    fontSize: '18px',
    padding: '15px 30px',
  },
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
  padding: '20px 36px',
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
    "@media (hover: hover) and (pointer: fine)": {
      border: '1px solid #CE1AFE',
    },
  }
}));

const AuthImg = styled('img')(({ }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'contain'
}));

const AlternativeAction = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  color: '#E2E2E2',
  fontFamily: 'Work Sans',
  fontSize: '20px',
  fontWeight: '500',
  lineHeight: '28px',
  [theme.breakpoints.down(1550)]: {
    fontSize: '18px',
    lineHeight: '24px',
  },
  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
    flexDirection: 'column',
  }
}));

interface IModalWindowProps {
  isModalOpen: boolean;
  closeModal: () => void;
  modalType: string;
  changeModalType: (type: IModalType) => void;
  openSnackbar: (type: string) => void;
}

const AuthModalWindow: FC<IModalWindowProps> = ({
  isModalOpen,
  closeModal,
  modalType,
  changeModalType,
  openSnackbar
}) => {
  const {
    handleSubmit: logInHandleSubmit,
    handleBlur: logInHandleBlur,
    handleChange: logInHandleChange,
    values: logInValues,
    errors: logInErrors,
    touched: logInTouched,
    isSubmitting: logInIsSubmitting,
    setValues: logInSetValues,
    setErrors: logInSetErrors,
    setTouched: logInSetTouched,
  } = useGetValidationLogin({
    openSnackbar,
    closeModal,
  });

  const {
    handleSubmit: signUpHandleSubmit,
    handleBlur: signUpHandleBlur,
    handleChange: signUpHandleChange,
    values: signUpValues,
    errors: signUpErrors,
    touched: signUpTouched,
    isSubmitting: signUpIsSubmitting,
    setValues: signUpSetValues,
    setErrors: signUpSetErrors,
    setTouched: signUpSetTouched,
  } = useGetValidationSignUp({
    openSnackbar,
    closeModal,
  });

  useEffect(() => {
    logInSetValues(initialLogInValue);
    logInSetErrors({});
    logInSetTouched({});
    signUpSetValues(initialSignUpValue);
    signUpSetErrors({});
    signUpSetTouched({});
  }, [isModalOpen, modalType])


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

              <Title>{modalType === 'logIn' ? 'Log in' : 'Sign Up'}</Title>

              <Subtitle>
                {`Enter your information below to ${modalType === 'logIn' ? 'log in' : 'sign up'}`}
              </Subtitle>

              {modalType === 'logIn' ? (
                <Form onSubmit={logInHandleSubmit} autoComplete="off">
                  <Box>
                    <CustomInput
                      type='email'
                      placeholder='Email'
                      autoComplete="off"
                      role="presentation"
                      name='loginEmail'
                      value={logInValues.loginEmail}
                      onChange={logInHandleChange}
                      onBlur={logInHandleBlur}
                      sx={{
                        border: (logInErrors.loginEmail && logInTouched.loginEmail) ?
                          '1px solid #EB5757' : '1px solid #333',
                      }}
                    />
                    {logInErrors.loginEmail && logInTouched.loginEmail ? (
                      <ValidationErrorMessage>{logInErrors.loginEmail}</ValidationErrorMessage>
                    ) : null}
                  </Box>
                  <Box>
                    <CustomInput
                      type='password'
                      placeholder='Password'
                      autoComplete="off"
                      role="presentation"
                      name='loginPassword'
                      value={logInValues.loginPassword}
                      onChange={logInHandleChange}
                      onBlur={logInHandleBlur}
                      sx={{
                        marginTop: '34px',
                        border: (logInErrors.loginPassword && logInTouched.loginPassword) ?
                          '1px solid #EB5757' : '1px solid #333',
                      }}
                    />
                    {logInErrors.loginPassword && logInTouched.loginPassword ? (
                      <ValidationErrorMessage>{logInErrors.loginPassword}</ValidationErrorMessage>
                    ) : null}
                  </Box>
                  <FillButton type="submit" disabled={logInIsSubmitting}>
                    {modalType === 'logIn' ? "Log In" : 'Sign Up'}
                  </FillButton>
                </Form>
              ) : (
                <Form onSubmit={signUpHandleSubmit} autoComplete="off">
                  <Box>
                    <CustomInput
                      type='email'
                      placeholder='Email'
                      autoComplete="off"
                      role="presentation"
                      name='signUpEmail'
                      value={signUpValues.signUpEmail}
                      onChange={signUpHandleChange}
                      onBlur={signUpHandleBlur}
                      sx={{
                        border: (signUpErrors.signUpEmail && signUpTouched.signUpEmail) ?
                          '1px solid #EB5757' : '1px solid #333',
                      }}
                    />
                    {signUpErrors.signUpEmail && signUpTouched.signUpEmail ? (
                      <ValidationErrorMessage>{signUpErrors.signUpEmail}</ValidationErrorMessage>
                    ) : null}
                  </Box>
                  <Box>
                    <CustomInput
                      type='password'
                      placeholder='Password'
                      autoComplete="off"
                      role="presentation"
                      name='signUpPassword'
                      value={signUpValues.signUpPassword}
                      onChange={signUpHandleChange}
                      onBlur={signUpHandleBlur}
                      sx={{
                        marginTop: '34px',
                        border: (signUpErrors.signUpPassword && signUpTouched.signUpPassword) ?
                          '1px solid #EB5757' : '1px solid #333',
                      }}
                    />
                    {signUpErrors.signUpPassword && signUpTouched.signUpPassword ? (
                      <ValidationErrorMessage>{signUpErrors.signUpPassword}</ValidationErrorMessage>
                    ) : null}
                  </Box>
                  <FillButton type="submit" disabled={signUpIsSubmitting}>
                    {modalType === 'logIn' ? "Log In" : 'Sign Up'}
                  </FillButton>
                </Form>
              )}

              <CustomDivider>or continue with</CustomDivider>

              <OtherAuthVariants>
                <AuthButton size='medium'>
                  <AuthImg src={google} alt="Google" />
                </AuthButton>
                <AuthButton size='medium'>
                  <AuthImg src={facebook} alt="Facebook" />
                </AuthButton>
              </OtherAuthVariants>

              <AlternativeAction>
                {
                  modalType === 'logIn' ? (
                    <>
                      Don't have an account?&nbsp;
                      <Box
                        sx={{ color: '#3D32F9', cursor: 'pointer' }}
                        onClick={() => changeModalType('signUp')}
                      >
                        Create an account
                      </Box>
                    </>
                  ) : (
                    <>
                      Do you have an account?&nbsp;
                      <Box
                        sx={{ color: '#3D32F9', cursor: 'pointer' }}
                        onClick={() => changeModalType('logIn')}
                      >
                        Log In
                      </Box>
                    </>
                  )
                }
              </AlternativeAction>
            </ContentWrapper>
          </MainWrapper>
        </Fade>
      </Modal>
    </div>
  );
}

export default AuthModalWindow;