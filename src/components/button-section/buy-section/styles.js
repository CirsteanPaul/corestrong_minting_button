import styled from 'styled-components'

export const BuyContainer = styled.div`
    display:flex;
    gap:10px;
    justify-content:center;
    align-items:center;
    padding:5px 10px;
    margin:0;
    width:50%;
    @media screen and (max-width:500px)
    {
        flex-direction:column;
    }
`;
export const BuyInput = styled.input`
    text-align:center;
    padding:15px 20px;
    max-width:80px;
    border:0;
    color:#fff!important;
    outline:0;
    border-radius:10px;
    background-color:gray;;
    &:hover{
        outline:0;
    }
`;
export const MintButton = styled.button`
    border-radius: 5px;
    padding:15px 20px;
    border:0;
    outline:0;
    color:white!important;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: black;
    box-shadow: 1px 3px black .8;
    

    &:hover{
        opacity: .8;
        cursor: pointer;
    }
`;