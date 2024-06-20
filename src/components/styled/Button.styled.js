import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${(props) => (props.primary ? ({theme}) => theme.color.lightGreen : "white")};
    border: none;
    height: 40px;
    width: ${(props) => props.circle && "40px"};
    padding: 0 ${(props) => props.circle ? "0px" : "20px"};
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    text-transform: capitalize;
    cursor: pointer;
    transition: all .2s ease-in-out;
    font-weight: 600;

    i {
        font-size: 16px;
        color: ${ ({theme}) => theme.color.black };
    }

    div {
        height: 8px;
        width: 8px;
        border-radius: 100%;
        background-color: ${(props) => (props.primary ? ({theme}) => theme.color.black : ({theme}) => theme.color.lightGreen)};
    }

    @media (max-width: 880px) {
        display: ${(props) => !props.phone && !props.dark && "none"};
    }

    &:hover{
        background-color: ${(props) => (props.primary ? ({theme}) => theme.color.black : props.dark ? ({theme}) => theme.color.black : ({theme}) => theme.color.darkGreen )};
        color: white;

        p, i {
            color: white;
        }

        div {
            background-color: ${(props) => (props.primary && "white")};
        }
    }
`