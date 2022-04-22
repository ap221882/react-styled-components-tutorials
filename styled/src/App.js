import React from 'react';

import styled, { css } from 'styled-components';

import Form from './components/Form';

const Button = styled.button.attrs((props) => {
  return { type: props.type || 'button' };
})`
  background-color: cyan;
  border: none;
  color: white;
  padding: 0.25rem;
  cursor: pointer;
  ${({ type }) => {
    return (
      type === 'submit' &&
      css`
        display: block;
        width: 100%;
        margin-top: 1rem;
        color: black;
        border-radius: 0.25rem;
      `
    );
  }}
`;

const BasicInput = styled.input.attrs((props) => {
  return {
    type: props.type || 'text',
    placeholder: props.placeholder || 'please enter value',
  };
})`
  box-sizing: border-box;
  padding: 0.5rem;
  border: 2px solid #f2f4f8;
  border-radius: 0.25rem;
  width: 100%;
  margin-top: 1rem;
`;

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Form in react-styled components</h2>
      <Button type='button'>click me</Button>
      <form
        css={`
          width: 300px;
          background: #fff;
          padding: 2rem;
          margin-top: 1rem;
        `}
      >
        <h2>Form</h2>
        <input type='text' />
        <BasicInput />
        <BasicInput type='email' placeholder='enter email' />
        <BasicInput />
        <BasicInput />
        <Button type='submit'>Submit</Button>
      </form>
      <Form />
    </div>
  );
};

export default App;
