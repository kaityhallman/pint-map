/* eslint-disable no-unused-expressions */
import styled, { injectGlobal } from 'styled-components';
import { slideUp } from './utilities/animations';

injectGlobal`
  html,
  body {
    height: 100%;
  }

  #app {
    height: 100%;
    overflow: hidden;
  }
`;

export const SignInFormWrapper = styled.article`
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
`;

export const SignInFormContent = styled.section`
  display: flex;
  flex-direction: row;
`;

// @TODO move these into component files once I build those out.
export const Paragraph = styled.p`
  font-weight: 300;
  margin-bottom: 1em;
`;

export const Input = styled.input`
  appearance: none;
  border: 1px solid gainsboro;
  border-radius: 5px;
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  font-size: 1.25em;
  display: block;
  margin-bottom: 1em;
  margin-top: 0.5em;
  padding: 4px;

  &:placeholder {
    color: gainsboro;
    font-weight: 300;
  }
`;

export const Label = styled.label`
  color: #d0e1e0;
  font-size: 0.75em;
  font-weight: bold;
  letter-spacing: 0.4px;
  text-transform: uppercase;
`;

export const Button = styled.button`
  appearance: none;
  background-color: #d0e1e0;
  border: none;
  cursor: pointer;
  font-size: 1em;
  padding: 8px 16px;
  transition: background-color 250ms ease-in;

  &:hover {
    background-color: #a3bbb9;
  }
`;
/* eslint-enable no-unused-expressions */
