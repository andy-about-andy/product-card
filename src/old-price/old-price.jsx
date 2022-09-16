import styled from "styled-components";

const OldPrice = styled.del.attrs((props) => ({
  children: `${props.value} ₽`
}))`
  font-size: 18px;
  color: ${(props) => props.theme.textColotMuted};
  line-height: 1;
`;

export default OldPrice;
