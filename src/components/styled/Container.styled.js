import styled from 'styled-components';

export const ContainerStyled = styled.section`
  max-width: 1000px;
  width: 100%;
  margin:  0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1283px) {
    padding: 0 30px;
    height: fit-content;
  }
`