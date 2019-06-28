import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Background from './blocks/Background';
import MainContent from './blocks/MainContent';


function App() {
  return (
    <MainLayout>
      <GlobalStyle />
      <Background />
      <MainContent />
    </MainLayout>
  );
}

export default App;

const MainLayout = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  body {
    font-family: 'Helvetica', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
