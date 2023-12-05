import { FC, useEffect } from 'react';
import { styled, Box, Backdrop, Fade, Modal } from '@mui/material';
import { CloseIcon } from './ImgComponents';
import { FullToTransparentBtn, ValidationErrorMessage } from './CustomElements';
import { useGetValidationInfo } from '../hooks/useGetValidationInfo';
import { initialContactUsValue } from '../constants';

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
  marginTop: '15px',
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
  marginTop: '50px',
  maxWidth: 'none',
  [theme.breakpoints.down(1550)]: {
    marginTop: '30px',
    fontSize: '18px',
    padding: '15px 30px',
  },
}));

const CustomTextarea = styled('textarea')(({ theme }) => ({
  marginTop: '45px',
  width: '100%',
  height: '146px',
  padding: '8px 20px',
  borderRadius: '20px',
  border: '1px solid #333',
  outline: 'none',
  backgroundColor: 'transparent',
  resize: 'none',

  color: '#E2E2E2',
  fontFamily: 'Work Sans',
  fontSize: '20px',
  fontWeight: '500',
  lineHeight: '25px',
  transition: 'all 0.3s ease-in-out',

  [theme.breakpoints.down(1550)]: {
    fontSize: '18px',
    lineHeight: '24px',
    padding: '15px 20px',
  },

  // '&:-webkit-autofill, &:-webkit-autofill:focus': {
  //   transition: 'all 600000s 0.3s, color 600000s 0.3s',
  // },

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

interface IContactUsModalWindowProps {
  isModalOpen: boolean;
  closeModal: () => void;
  openSnackbar: (type: string) => void;
}

const ContactUsModalWindow: FC<IContactUsModalWindowProps> = ({
  isModalOpen,
  closeModal,
  openSnackbar
}) => {

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
    isSubmitting,
    setValues,
    setErrors,
    setTouched,
  } = useGetValidationInfo({
    openSnackbar,
    closeModal,
  });

  useEffect(() => {
    setValues(initialContactUsValue);
    setErrors({});
    setTouched({});
  }, [isModalOpen]);


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

              <Title>Get Started</Title>

              <Subtitle>
                Enter your information below to sending message for us
              </Subtitle>

              <Form onSubmit={handleSubmit} autoComplete="off">
                {/* <input style={{ display: "none" }} />
                <input type="email" style={{ display: "none" }} /> */}
                <Box>
                  <CustomInput
                    type='text'
                    placeholder='Name'
                    autoComplete="off"
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    sx={{
                      border: (errors.name && touched.name) ?
                        '1px solid #EB5757' : '1px solid #333',
                    }}
                  />
                  {errors.name && touched.name ? (
                    <ValidationErrorMessage>{errors.name}</ValidationErrorMessage>
                  ) : null}
                </Box>
                <Box>
                  <CustomInput
                    type='email'
                    placeholder='Email'
                    autoComplete="off"
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    sx={{
                      marginTop: '45px',
                      border: (errors.email && touched.email) ?
                        '1px solid #EB5757' : '1px solid #333',
                    }}
                  />
                  {errors.email && touched.email ? (
                    <ValidationErrorMessage>{errors.email}</ValidationErrorMessage>
                  ) : null}
                </Box>
                <Box>
                  <CustomTextarea
                    autoComplete="false"
                    placeholder='Message'
                    value={values.message}
                    name='message'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    sx={{
                      border: (errors.message && touched.message) ?
                        '1px solid #EB5757' : '1px solid #333',
                    }}
                  />
                  {errors.message && touched.message ? (
                    <ValidationErrorMessage>{errors.message}</ValidationErrorMessage>
                  ) : null}
                </Box>
                <FillButton type="submit" disabled={isSubmitting}>Send</FillButton>
              </Form>
            </ContentWrapper>
          </MainWrapper>
        </Fade>
      </Modal>
    </div>
  );
}

export default ContactUsModalWindow;
