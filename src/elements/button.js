import styled from "styled-components";

const Button = styled.button`
  display: block;
  padding: 0;
  border: none;
  cursor: pointer;
  box-shadow: none;
  background: none;
  outline: none;

  &:hover,
  &:active {
    background: none;
    box-shadow: none;
  }
`;

export default Button;
