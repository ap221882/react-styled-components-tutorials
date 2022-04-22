import React from 'react';
import styled from 'styled-components/macro';
import { HipsterButton } from './components/Buttons';

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <HipsterButton>Click me</HipsterButton>
      <HipsterButton
        css={`
          color: red;
        `}
        as='a'
        href='https://www.github.com/ap221882/'
      >
        Click me
      </HipsterButton>
      <HipsterButton>Click me</HipsterButton>
      <div
        css={`
          color: green;
        `}
      >
        <h2>hello world i use css prop</h2>
      </div>
    </div>
  );
};

export default App;
