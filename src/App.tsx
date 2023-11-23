import Header from "./components/Header";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </>
  )
}

export default App
