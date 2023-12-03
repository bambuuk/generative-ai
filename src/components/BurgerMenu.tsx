import { FC } from 'react';
import { styled, List, ListItem, ListItemText, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { scrollToSection } from '../utils/scrollToSection';
import { TransparentToFullBtn } from './CustomElements';
import useModalControl from '../hooks/useModalControl';
import ModalWindow from './ModalWindow';

const Wrapper = styled('div')({
  position: 'fixed',
  width: '100%',
  minHeight: '100vh',
  backgroundColor: 'rgba(206, 206, 206, 0.60)',
  top: 0,
  left: 0,
  zIndex: 1000,
});

const Sidebar = styled('div')({
  width: '250px',
  height: '100%',
  backgroundColor: '#13171D',
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '20px',
  transition: 'transform 0.3s',
  zIndex: 1100,
  transform: 'translateX(-250px)',
  overflow: 'hidden'
});

const SidebarLink = styled(ListItem)({
  color: '#fff',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

const TransparentButton = styled(TransparentToFullBtn)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down(1550)]: {
    fontSize: '18px',
    padding: '15px 30px',
  },
}));

interface BurgerMenuProps {
  isBurgerMenuOpen: boolean;
  closeBurgerMenu: () => void;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ isBurgerMenuOpen, closeBurgerMenu }) => {
  const { isModalOpen, openModal, closeModal, modalType, changeModalType } = useModalControl();
  return (
    <Box>
      <Sidebar sx={{ transform: isBurgerMenuOpen ? 'translateX(0)' : 'translateX(-250px)' }}>
        <CloseIcon
          sx={{ color: '#fff', position: 'absolute', left: '210px' }}
          onClick={closeBurgerMenu}
        />
        <List sx={{ flex: 1 }}>
          <SidebarLink onClick={() => {
            closeBurgerMenu();
            scrollToSection('home');
          }}>
            <ListItemText>Home</ListItemText>
          </SidebarLink>
          <SidebarLink onClick={() => {
            closeBurgerMenu();
            scrollToSection('features')
          }}>
            <ListItemText>Features</ListItemText>
          </SidebarLink>
          <SidebarLink onClick={() => {
            closeBurgerMenu();
            scrollToSection('solution')
          }}
          >
            <ListItemText>Solution</ListItemText>
          </SidebarLink>
          <SidebarLink onClick={() => {
            closeBurgerMenu();
            scrollToSection('price')
          }}
          >
            <ListItemText>Price</ListItemText>
          </SidebarLink>
          <SidebarLink onClick={() => {
            closeBurgerMenu();
            scrollToSection('testimonials')
          }}
          >
            <ListItemText>Testimonials</ListItemText>
          </SidebarLink>
          <SidebarLink onClick={() => {
            closeBurgerMenu();
            scrollToSection('contacts');
          }}
          >
            <ListItemText>Contacts</ListItemText>
          </SidebarLink>
        </List>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          width: '100%'
        }}>
          <TransparentButton
            onClick={() => {
              closeBurgerMenu();
              openModal('logIn')
            }}
          >
            Log In
          </TransparentButton>
          <TransparentButton
            onClick={() => {
              closeBurgerMenu();
              openModal('signUp')
            }}
          >
            Sign Up
          </TransparentButton>
        </Box>
      </Sidebar>
      <Wrapper sx={{ transform: isBurgerMenuOpen ? 'translateX(0)' : 'translateX(-100%)' }} onClick={closeBurgerMenu} />
      <ModalWindow
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        modalType={modalType}
        changeModalType={changeModalType}
      />
    </Box>
  );
};

export default BurgerMenu;