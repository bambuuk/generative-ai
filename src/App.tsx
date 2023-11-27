import Header from "./components/Header";
import { ThemeProvider, styled } from '@mui/material/styles';
import { theme } from "./theme";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Solution from "./components/Solution";

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
        </MainContent>
      </ThemeProvider>
    </>
  )
}

export default App
