import { FC } from 'react';
import { styled, Link } from '@mui/material';
import { CustomContainer, Title, Overview } from './CustomElements';
import abstractImg from '../assets/pictures/contacts/abstract-img.png';

const ContactsUI = styled('section')(({ }) => ({
  width: '100%',
}));

const MainWrapper = styled('div')(({ }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
}));

const DepartmentsContactsList = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  marginTop: '64px',
  gap: '100px',
  [theme.breakpoints.down('lg')]: {
    justifyContent: 'center'
  },
  [theme.breakpoints.down('md')]: {
    gap: '70px',
  },
  [theme.breakpoints.down('sm')]: {
    gap: '50px',
  },
}));

const ContactItem = styled('div')(({ theme }) => ({
  maxWidth: '327px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  [theme.breakpoints.down('md')]: {
    gap: '10px',
  },
}));

const ContactSubtitle = styled('h5')(({ theme }) => ({
  color: '#CE1AFE',
  fontFamily: 'Work Sans',
  fontSize: '32px',
  fontWeight: '600',
  lineHeight: '48px',
  [theme.breakpoints.down('md')]: {
    fontSize: '25px',
    lineHeight: '30px',
  },
}));

const ContactInfo = styled('li')(({ theme }) => ({
  marginLeft: '25px',
  listStyle: 'inherit',
  color: '#E2E2E2',
  fontFamily: 'Work Sans',
  fontSize: '20px',
  fontWeight: '400',
  lineHeight: '28px',
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    lineHeight: '20px',
  },
}));

const AddressInfo = styled(ContactInfo)(({ }) => ({
  listStyle: 'none',
  marginLeft: 0,
}));

const CustomLink = styled(Link)(({ }) => ({
  color: '#E2E2E2',
}));

const GradientsBlock = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: '-10',
  top: '-239px',
  right: '-178px',
  width: '692.442px',
  height: '675.338px',
  transform: 'rotate(-55.229deg)',
  filter: 'blur(347px)',
  [theme.breakpoints.down('lg')]: {
    width: '659px',
    height: '631px',
  },
  [theme.breakpoints.down('md')]: {
    width: '359px',
    height: '331px',
  },
}));

const Vector = styled('div')({
  display: 'block',
  position: 'absolute',
});
const FirstVector = styled(Vector)({
  top: '0',
  right: '-182px',
  width: '515.075px',
  height: '585.58px',
  backgroundColor: '#3D32F9',
});

const SecondVector = styled(Vector)({
  bottom: '-411px',
  right: '-411px',
  width: '560.633px',
  height: '533.336px',
  backgroundColor: '#391F6F',
});

const ThirdVector = styled(Vector)({
  bottom: '-45%',
  left: 0,
  width: '552.022px',
  height: '589.882px',
  backgroundColor: '#CE1AFE',
});

const AbstractImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  zIndex: -10,
  display: 'block',
  width: '140.515px',
  height: '120.052px',
  top: '-51px',
  right: '-31px',
  [theme.breakpoints.down('sm')]: {
    gap: '10px',
    top: '-121px',
    width: '120.515px',
    height: '100.052px',
  },
}));

const Contacts: FC = () => {
  return (
    <ContactsUI id="contacts">
      <CustomContainer>
        <MainWrapper>
          <Title>Our contacts</Title>
          <Overview>
            Connect with us via email or phone. We're available to assist you with any questions,
            provide personalized consultations, and help you get the most out of our AI service.
            Join us on the journey toward data-driven success!
          </Overview>
          <DepartmentsContactsList>
            <ContactItem>
              <ContactSubtitle>Customer Support:</ContactSubtitle>
              <ul>
                <ContactInfo>
                  Email:
                  <CustomLink href="mailto:support@aigenius.com" underline="none">
                    &nbsp;support@aigenius.com
                  </CustomLink></ContactInfo>
                <ContactInfo>
                  Phone:&nbsp;
                  <CustomLink href="tel:+15551234567" underline="none">
                    +1-555-123-4567
                  </CustomLink>
                </ContactInfo>
              </ul>
            </ContactItem>

            <ContactItem>
              <ContactSubtitle>Sales and Inquiries:</ContactSubtitle>
              <ul>
                <ContactInfo>
                  Email:
                  <CustomLink href="mailto:support@aigenius.com" underline="none">
                    &nbsp;support@aigenius.com
                  </CustomLink>
                </ContactInfo>
                <ContactInfo>
                  Phone:&nbsp;
                  <CustomLink href="tel:+15557890123" underline="none">
                    +1-555-789-0123
                  </CustomLink>
                </ContactInfo>
              </ul>
            </ContactItem>

            <ContactItem>
              <ContactSubtitle>Office Address:</ContactSubtitle>
              <ul>
                <AddressInfo>123 AI Avenue</AddressInfo>
                <AddressInfo>TechCity, AI 56789</AddressInfo>
                <AddressInfo>United States</AddressInfo>
              </ul>
            </ContactItem>
          </DepartmentsContactsList>

          <GradientsBlock>
            <FirstVector />
            <SecondVector />
            <ThirdVector />
          </GradientsBlock>

          <AbstractImage src={abstractImg} />
        </MainWrapper>
      </CustomContainer>
    </ContactsUI>
  )
}

export default Contacts;
