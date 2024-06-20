import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  gap: 2%;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: ${(props) => props.theme.screen.phone}px) {
    flex-direction: column-reverse;
  }

  .divider {
    width: 50%;
    height: 650px;

    @media (max-width: ${(props) => props.theme.screen.phone}px) {
      width: 100%;
    }
  }

  .left {
    overflow: hidden;
    border-radius: 20px;
    background-image: url('https://i.pinimg.com/564x/a1/fa/da/a1fada4f394f4395f881e0cbc4269924.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: end;
  }

  .left .text {
    height: 100%;
    width: 50%;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .left .text .top {
    padding: 10px 15px;
    border: 1px solid white;
    width: fit-content;
    margin-left: auto;
    border-radius: 10px;
    background-color: white;
  }

  .left .text .top p {
    width: 90px;
    text-align: center;
  } 

  .left .text .top p span {
    border: 1px solid ${({theme}) => theme.color.lightGreen};
    padding: 3px 5px;
    border-radius: 50px;
    font-size: 7px;
  }
  
  .left .text .top p span i {
    color: ${({theme}) => theme.color.lightGreen}
  }

  .left .text .top .icons {
    border: 1px solid rgba(0, 0, 0, 5%);
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    padding: 3px;
    width: fit-content;
    margin: 10px auto 0;
    border-radius: 20px;
  }

  .left .text .middle p, .left .text .middle h1  {
    color: white;
  }

  .left .text .middle h1  {
    font-weight: 500;
    font-size: 40px;
    line-height: 50px;
    margin: 20px 0;
  }

  .left .text .middle h1 div {
    color: white;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .left .text .middle h1 div i {
    border: 1px solid white;
    font-size: 30px;
    height: 50px;
    width: 50px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .left .text button {
    background-color: white;
    border: none;
    border-radius: 30px;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 5px 5px 5px 20px;
    font-weight: 900;
    cursor: pointer;
    margin-left: auto;
    transition: all .3s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme.color.black};

      p{
        color: white;
      }

      i {
        background-color: ${(props) => props.theme.color.lightGreen};
        color: ${(props) => props.theme.color.black};
      }
    }
  }

  .left .text button i {
    background-color: ${({theme}) => theme.color.black};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 45px;
    border-radius: 100%;
  } 

  .right {
    display: flex;

    @media (max-width: ${(props) => props.theme.screen.phone}px) {
      margin-bottom: 20px;
    }
  }

  .right .text {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 12%;
    gap: 20px;

    @media (max-width: ${(props) => props.theme.screen.phone}px) {
      padding: 0 12% 0 0;
    }
  }

  .right .text h1 {
    font-size: 50px;
    font-weight: 600;
    line-height: 50px;
  }

  .right .text .image {
    height: 220px;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    border-radius: 20px;
    background-image: url('https://i.pinimg.com/564x/4c/7d/70/4c7d7083d72e293030d0a575baeb39ae.jpg');
    position: relative;
  }

  .right .text .image div {
    display: flex;
    align-items: center;
    gap: 8px;
    position: absolute;
    top: 10px;
    left: 15px;
    background-color: rgba(250, 250, 250, 60%);
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 500;
  }

  .right .text .para {
    width: 200px;
  }

  .right .text p span {
    background-color: ${(props) => props.theme.color.darkGreen};
    color: white;
    padding: 0 10px;
    border-radius: 20px;
  }

  .right .icons {
    width: 20%;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
  }

  .right .icons .part {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  .right .icons .part .circle {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .right .icons .part .plus {
    border: 1px solid ${props => props.theme.color.black};
    height: 16px;
    width: 16px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .right .icons .bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .right .icons .bottom p {
    font-size: 12px;
    margin-bottom: 5px;
    color: rgba(0, 0, 0, 50%);
  }

  .right .icons .bottom i {
    border: 1px solid rgba(0, 0, 0, 50%);
    height: 60px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    font-size: 22px;
  }
`

export const Icon = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 100%;
  background-color: ${(props) => props.dark ? ({theme}) => theme.color.black : ""};
  border: 1px solid ${(props) => props.dark ? ({theme}) => theme.color.black : "rgba(0, 0, 0, 15%)"};
  display: flex;
  align-items: center;
  justify-content: center;
  
  i {
    font-size: 10px;
    color: ${(props) => props.dark && "white"};
  }
`

export const Read = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 6px;

  p {
    border-bottom: 1px solid ${(props) => !props.darkBorder ? "white" : props.theme.color.black};
  }

  span {
    height: 7px;
    width: 7px;
    border-radius: 100%;
    background-color: ${({theme}) => theme.color.lightGreen};
  }
`

export const LogoCircle = styled.div`
  height: 45px;
  width: 45px;
  background-color: ${(props) => props.bg};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`