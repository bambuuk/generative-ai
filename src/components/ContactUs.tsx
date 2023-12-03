import { FC } from 'react';
import { styled, Box } from '@mui/material';
import { CustomContainer, FullToTransparentBtn, Title, Overview } from './CustomElements';
import useGetValidationInfo from '../hooks/useGetValidationInfo';
import useSnackbarControl from '../hooks/useSnackbarControl';
import CustomSnackbar from './CustomSnackbar';
import abstractImg from '../assets/pictures/contactUs/abstract-img.png';

const ContactUsUI = styled('section')(({ }) => ({
  width: '100%',
}));

const MainWrapper = styled('div')(({ }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
}));

const CustomForm = styled('form')(({ theme }) => ({
  margin: '0 auto',
  marginTop: '64px',
  maxWidth: '683px',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  columnGap: '19px',
  [theme.breakpoints.down(768)]: {
    gridTemplateColumns: '1fr',
    gap: '50px',
  },
}));

const CustomInput = styled('input')(({ theme }) => ({
  width: '100%',
  padding: '8px 20px',
  borderRadius: '20px',
  border: '1px solid #333',
  outline: 'none',
  backgroundColor: 'transparent',

  color: '#E2E2E2',
  fontFamily: 'Work Sans',
  fontSize: '20px',
  fontWeight: '500',
  lineHeight: '48px',
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

const CustomTextarea = styled('textarea')(({ theme }) => ({
  marginTop: '48px',
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
    border: '1px solid #CE1AFE',
  },
  '&:focus': {
    border: '1px solid #E2E2E2',
  },
  '&:disabled': {
    background: '#4F4F4F',
    color: '#333333',
  },
  [theme.breakpoints.down(768)]: {
    marginTop: 0,
  },
}));

const TextareaWrapper = styled(Box)(({ theme }) => ({
  gridColumn: '1 / 3',
  [theme.breakpoints.down(768)]: {
    gridColumn: '1 / 2',
  },
}));

const SubmitButton = styled(FullToTransparentBtn)(({ theme }) => ({
  margin: '0 auto',
  gridColumn: '1 / 3',
  marginTop: '67px',
  padding: '20px 40px',
  maxWidth: '300px',
  width: '100%',
  [theme.breakpoints.down(1550)]: {
    fontSize: '18px',
    padding: '15px 30px',
  },
  [theme.breakpoints.down(768)]: {
    marginTop: '10px',
    gridColumn: '1 / 2',
  },
}));

const Image = styled('img')(({ theme }) => ({
  position: 'absolute',
  zIndex: '-10',
  bottom: '32px',
  left: 0,
  width: '170px',
  height: '145px',
  objectFit: 'contain',
  [theme.breakpoints.down('lg')]: {
    display: 'none'
  },
}));

const ValidationErrorMessage = styled('div')(({ theme }) => ({
  position: 'absolute',
  maxWidth: '300px',
  width: '100%',
  margin: '5px 20px 0 20px',
  color: '#EB5757',
  fontFamily: 'Work Sans',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '16px',
  [theme.breakpoints.down(768)]: {
    maxWidth: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    width: 'calc(100% - 20px)',
  },
}));

const ContactUs: FC = () => {
  const { isOpenSnackbar, openSnackbar, closeSnackbar } = useSnackbarControl();

  const { handleSubmit, handleBlur, handleChange, values, errors, touched, isSubmitting } = useGetValidationInfo({
    openSnackbar,
  });

  return (
    <ContactUsUI>
      <CustomContainer>
        <MainWrapper>
          <Title>Contact us</Title>
          <Overview>
            Not quite ready? Have questions or need more information?
            Our team is here to assist you. Contact us for a personalized consultation:
          </Overview>
          <CustomForm onSubmit={handleSubmit} autoComplete="off">
            <Box>
              <CustomInput
                autoComplete="off"
                role="presentation"
                name='name'
                placeholder='Name'
                type='text'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <ValidationErrorMessage>{errors.name}</ValidationErrorMessage>
              ) : null}
            </Box>
            <Box>
              <CustomInput
                autoComplete="off"
                role="presentation"
                name='loginEmail'
                placeholder='Email'
                type='email'
                value={values.loginEmail}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.loginEmail && touched.loginEmail ? (
                <ValidationErrorMessage>{errors.loginEmail}</ValidationErrorMessage>
              ) : null}
            </Box>
            <TextareaWrapper>
              <CustomTextarea
                autoComplete="false"
                placeholder='Message'
                value={values.message}
                name='message'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.message && touched.message ? (
                <ValidationErrorMessage>{errors.message}</ValidationErrorMessage>
              ) : null}
            </TextareaWrapper>
            <SubmitButton type="submit" disabled={isSubmitting}>Send</SubmitButton>
          </CustomForm>
          <Image src={abstractImg} alt="Abstract image" />
          <CustomSnackbar isOpenSnackbar={isOpenSnackbar} closeSnackbar={closeSnackbar} message={'Sent Successfully'} />
        </MainWrapper>
      </CustomContainer>
    </ContactUsUI>
  )
}

export default ContactUs
