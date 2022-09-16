import styled from "styled-components";

const Arcticle = styled.span.attrs((props) => ({
  children: `Артикул: ${props.children}`
}))`
  color: ${(props) => props.theme.textColorMuted};
`;

export default Arcticle;
