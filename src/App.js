import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './components/styled/Global';
import { ContainerStyled } from './components/styled/Container.styled';
import Navbar from './components/compo/Navbar';
import Hero from './components/compo/Hero';

function App() {
  const theme = {
    color: {
      darkGreen: '#00735e', 
      lightGreen: '#88f28c', 
      black: '#1C2833'
    },
    screen: {
      phone: '880'
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <ContainerStyled>
          <Navbar />
          <Hero />
        </ContainerStyled>
      </>
    </ThemeProvider>
  );
}

export default App;