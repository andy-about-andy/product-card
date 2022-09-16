import styled from "styled-components";

const Button = styled.button`
  display: block;
  padding: 0;
  cursor: pointer;
  border: none;
  box-shadow: none;
  background-color: ${(props) => props.theme.buttonColor};
  transition: background-color 0.3s, box-shadow 03s;
  ${(props) => {
    const theme = props.theme.button[props.size || "medium"];
    return `
        height: ${theme.height};
        padding-left: ${theme.padding};
        padding-right: ${theme.padding};
        font-size: ${theme.fontSize};
        border-radius: ${theme.radius};
      `;
  }}

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.buttonHover};
  }

  &:active {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0);
  }
`;

export default Button;
