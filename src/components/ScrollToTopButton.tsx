import { FC, useEffect, useState } from 'react'
import { Fab, styled } from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { scrollToTop } from '../utils/scrollToSection';
import { fadeIn, fadeOut } from '../assets/keyframes/keyframes';

const CustomButton = styled(Fab)(({ }) => ({
  position: 'fixed',
  bottom: '30px',
  right: '30px',
  background: '#13171d',
  border: '1px solid #CE1AFE',
  transition: 'all 0.4s',
  '&:hover': {
    "@media (hover: hover)": {
      background: '#971bc8',
      border: '1px solid #CE1AFE',
    },
    "@media (hover: none)": {
      background: '#13171d',
      border: '1px solid #CE1AFE',
    },
  },
  '&.fadeIn': {
    animation: `${fadeIn} 0.3s ease-in both`,
  },
  '&.fadeOut': {
    animation: `${fadeOut} 0.3s ease-out both`,
  },
}));

const ScrollToTopButton: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationType, setAnimationType] = useState('');

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const triggerHeight = 0.7 * viewportHeight;

    if (scrollY > triggerHeight && !isVisible) {
      setAnimationType('fadeIn');
      setIsVisible(true);
    } else if (scrollY <= triggerHeight && isVisible) {
      setAnimationType('fadeOut');
      setTimeout(() => {
        setIsVisible(false);
      }, 300)
    }
  };

  const moveToTop = () => {
    scrollToTop();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <CustomButton
      className={animationType}
      onClick={moveToTop}
      sx={{
        display: isVisible ? 'flex' : 'none',
        animation: `${animationType}`
      }}>
      <ExpandLessIcon sx={{ color: 'white' }} />
    </CustomButton>
  )
}

export default ScrollToTopButton
