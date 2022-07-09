import React, {useEffect} from 'react'
import { connect } from "./../../redux/blockchain/blockchainActions";
import { fetchData } from "./../../redux/data/dataActions";
import { useDispatch, useSelector } from "react-redux";
import { ConnectButtonContainer, ConnectButtonText } from './styles';
const ConnectSection = () => {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
            dispatch(fetchData(blockchain.account));
        }
    };
    useEffect(() => {
        getData();       
    }, [blockchain.account]);
  return (
    <ConnectButtonContainer onClick = {(e)=>{
        e.preventDefault();
        dispatch(connect());
        getData();
    }}>
        <ConnectButtonText> Connect</ConnectButtonText>
    </ConnectButtonContainer>
  )
}

export default ConnectSection