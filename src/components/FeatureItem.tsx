import { FC, forwardRef } from 'react';
import { styled } from '@mui/material';
import { motion } from 'framer-motion';

const FeatureCard = styled('div')(({ theme }) => ({
  padding: '40px 24px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '40px',
  borderRadius: '20px',
  border: '1px solid #333',
  background:
    'linear-gradient(214deg, rgba(72, 43, 141, 0.20) 5.44%, rgba(24, 12, 51, 0.04) 94.54%)',
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

const featureAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 1.5, duration: 0.9 },
  }
};

const MFeatureCard = motion(FeatureCard);

interface IFeatureItemProps {
  img: () => JSX.Element;
  title: string;
  text: string;
}

const FeatureItem: FC<IFeatureItemProps> = forwardRef<HTMLDivElement, IFeatureItemProps>(({ img, title, text }, ref) => {
  return (
    <MFeatureCard
      ref={ref}
      variants={featureAnimation}
      initial="hidden"
      animate="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <ImageWrapper>{img()}</ImageWrapper>
      <CardDescription>
        <CardTitle>{title}</CardTitle>
        <CardDescrText>{text}</CardDescrText>
      </CardDescription>
    </MFeatureCard>
  );
});

export default motion(FeatureItem);
