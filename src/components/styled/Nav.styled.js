import styled from 'styled-components';

export const Nav = styled.nav`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  gap: 8%;
  width: 100%;

  .outside {
    width: 50%; 
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .second {
    justify-content: end;
  }

  .left {
    display: flex;
    gap: 10px;
  }
`

export const Logo = styled.button`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 100%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1px;
  cursor: pointer;
  transition: .2s all ease-in-out;

  span {
    display: flex; 
    flex-direction: column;
    gap: 1px;
  }

  span div {
    height: 7px;
    width: 7px;
    border-radius: 1px;
    background-color: ${ ({theme}) => theme.color.black };
  }

  &:hover{
    background-color: ${({theme}) => theme.color.darkGreen};

    span div {
      background-color: white;
    }
  }
`

export const Flex = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const Hamber = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({theme}) => theme.color.darkGreen};
  height: 100vh;
  color: white; 
  width: 280px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 

  .top {
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 32px;
  }

  .middle {
    margin: 60px;
    list-style: none;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .middle li {
    cursor: pointer;
    transition: all .3s ease-in-out;
  }

  .middle li:hover {
    letter-spacing: 1px;
  }

  .top p, .top i, .middle li {
    color: white;
  }
`