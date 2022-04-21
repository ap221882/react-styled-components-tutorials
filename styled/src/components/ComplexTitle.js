import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils';

const ComplexTitle = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className='underline'></div>
      <div className='box'></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  .underline {
    width: 80vw;
    height: 5px;
    margin: 0 auto;
    background-color: ${colors.primary};
  }
  .box {
    border: var(--mainBorder);
    height: 10px;
  }
`;

export default ComplexTitle;
