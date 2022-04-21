import styled from 'styled-components';
import BasicTitle from './components/BasicTitle';
import { DefaultButton, HipsterButton } from './components/Buttons';
import ComplexTitle from './components/ComplexTitle';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <ComplexTitle title='more complex title' />
    </div>
  );
}

export default App;
