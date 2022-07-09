import styled from 'styled-components'

export const ConnectButtonContainer = styled.button`
    border-radius: 5px;
    padding:5px 25px;
    border:0;
    outline:0;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: black;
    box-shadow: 1px 3px black .8;


    &:hover{
        cursor: pointer;
        opacity: .8;
    }
`;
export const ConnectButtonText = styled.p`
    text-align: center;
    color:white!important;
    font-size:17px;
    letter-spacing:0.3px;
`;
