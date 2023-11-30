import Header from "./components/Header";
import { ThemeProvider, styled } from '@mui/material/styles';
import { theme } from "./theme";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Solution from "./components/Solution";
import PriceCardList from "./components/PriceCardList";
import FirstCTA from "./components/FirstCTA";
import Slider from "./components/Slider";
import SecondCTA from "./components/SecondCTA";

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
          <Slider />
          <SecondCTA />
        </MainContent>
      </ThemeProvider>
    </>
  )
}

export default App
