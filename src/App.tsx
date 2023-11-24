import Header from "./components/Header";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./theme";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <Hero />
        </main>
      </ThemeProvider>
    </>
  )
}

export default App
