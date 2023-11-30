import Header from "./components/Header";
import { ThemeProvider, styled } from '@mui/material/styles';
import { theme } from "./theme";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Solution from "./components/Solution";
import PriceCardList from "./components/PriceCardList";
import FirstCTA from "./components/FirstCTA";
import Testimonials from "./components/Testimonials";
import SecondCTA from "./components/SecondCTA";
import Contacts from "./components/Contacts";

const MainContent = styled('main')({
  display: 'flex',
  flexDirection: 'column',
  gap: '120px',
  overflow: 'hidden',
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <MainContent>
          <Hero />
          <Features />
          <HowItWorks />
          <Solution />
          <PriceCardList />
          <FirstCTA />
          <Testimonials />
          <SecondCTA />
          <Contacts />
        </MainContent>
      </ThemeProvider>
    </>
  )
}

export default App
