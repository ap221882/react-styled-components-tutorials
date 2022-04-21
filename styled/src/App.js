import styled from 'styled-components';
import BasicTitle from './components/BasicTitle';
import { DefaultButton, HipsterButton } from './components/Buttons';
import { Button } from '@mui/material';

//tagged template literal
// const BasicTitle = styled.h1`
//   text-align: center;
//   text-transform: capitalize;
// `;

const StyledBtn = styled(Button)`
  text-transform: capitalize;
`;

function App() {
  return (
    <div>
      <div style={{ padding: '2rem' }}>
        {/* <h1 className='title'>styled components</h1> */}
        <BasicTitle special>styled components</BasicTitle>
        <BasicTitle>styled components</BasicTitle>
        <DefaultButton>click me</DefaultButton>
        <HipsterButton>click me</HipsterButton>
        <div style={{ padding: '2rem' }}>
          <h2>extend material-ui button</h2>
          <Button variant='contained'>Hello Woraaald</Button>;
          <StyledBtn variant='contained'>Hello World</StyledBtn>;
        </div>
      </div>
    </div>
  );
}

export default App;
