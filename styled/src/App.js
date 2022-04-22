import React from 'react';

import { HipsterButton } from './components/Buttons';

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <HipsterButton>Click me</HipsterButton>
      <HipsterButton as='a' href='https://www.github.com/ap221882/'>
        Click me
      </HipsterButton>
      <HipsterButton>Click me</HipsterButton>
    </div>
  );
};

export default App;
