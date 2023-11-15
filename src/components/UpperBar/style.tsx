import styled from 'styled-components';

const StyledBar = styled.div`
  background-color: black;
  color: #e6e8e6;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default function UpperBar() {
  return <StyledBar>FREE SHIPPING!!! BYTE JÁ ENCHER O CARRINHO!!!</StyledBar>;
}
