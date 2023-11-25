import Header from "./components/Header";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./theme";
import Hero from "./components/Hero";
import Features from "./components/Features";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <Hero />
          <Features />
        </main>
      </ThemeProvider>
    </>
  )
}

export default App
