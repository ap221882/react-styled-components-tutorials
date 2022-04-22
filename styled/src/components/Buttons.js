import styled from 'styled-components';

export const DefaultButton = styled.button`
  background-color: rgb(46, 174, 116);
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  /* text-transform: capitalize; */
  padding: 0.25rem;
  display: block;
  width: 200px;
  margin: 1rem auto;
`;

export const HipsterButton = styled(DefaultButton)`
  width: 150px;
  background: transparent;
  color: #645cff;
  border: 1px solid #645cff;
  padding: 1rem;
  display: inline-block;
  margin-right: 1rem;

  text-decoration: none;
  text-align: center;
  font-size: 1rem;
`;
