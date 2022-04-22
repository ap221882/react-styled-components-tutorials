import React from 'react';
import styled from 'styled-components/macro';
import { DefaultButton } from './components/Buttons';

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <DefaultButton>click me</DefaultButton>
      <DefaultButton large>click me</DefaultButton>
    </div>
  );
};

export default App;
