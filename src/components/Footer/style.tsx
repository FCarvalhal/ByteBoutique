import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  justify-content: space-evenly;
  border: 1px solid #000;
`;

export const GithubLink = styled.button`
  background-image: url('src/assets/github-no-bg.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #fefefe;
  border: none;
  width: 40%;
  height: 40%;
  object-fit: scale-down;
  margin: 0 5px;
  cursor: pointer;
`;
