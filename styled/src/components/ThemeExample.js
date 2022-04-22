import Card from './components/Card';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './global-styles';

import { useState } from 'react';

const BaseTheme = {
  color: '#222',
  background: '#fff',
};

const DarkTheme = {
  color: '#fff',
  background: '#222',
};

const Container = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
`;

function App() {
  const [baseTheme, setTheme] = useState(true);
  const themeToggleHandler = () => {
    setTheme(!baseTheme);
  };
  return (
    <ThemeProvider theme={baseTheme ? BaseTheme : DarkTheme}>
      <GlobalStyles />
      <Container>
        <h1>Hello World</h1>
        <button onClick={themeToggleHandler} className='btn'>
          Toggle me
        </button>
      </Container>
      {/* <Card /> */}
    </ThemeProvider>
  );
}

export default App;
