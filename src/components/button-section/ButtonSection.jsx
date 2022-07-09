import React, { useEffect, useMemo } from 'react'
import { ButtonSectionContainer, WarningMessage } from './styles';
import { useSelector } from "react-redux";
import BuySection from './buy-section';
import ConnectSection from '../connect-section';
const ButtonSection = () => {
    const data = useSelector(state =>state.data);
    const totalSupply = useMemo(() =>{
        return data.totalSupply
    },[data])
    const maxSupply = useMemo(() =>{
        return data.maxPerWallet;
    },[data.loading]);
    const cost = useMemo(() =>{
        return data.cost;
    },[data.loading]);
    const alreadyMinted = useMemo(() =>{
        return data.alreadyMinted;
    },[data.loading])
    const maxSupplyTotal = useMemo(() =>{
        return data.maxSupply;
    },[data.loading])
    const blockchain = useSelector((state) => state.blockchain);
if(!blockchain.account)
 return (
    <ButtonSectionContainer >
        <ConnectSection/>
        {blockchain.errorMsg && <WarningMessage>{blockchain.errorMsg}</WarningMessage>}
    </ButtonSectionContainer>
   
 )
  return (
    <ButtonSectionContainer>
        <BuySection maxSupply = {maxSupply} totalSupply = {totalSupply} 
        alreadyMinted= {alreadyMinted} cost ={cost} 
        maxSupplyTotal = {maxSupplyTotal}/>
    </ButtonSectionContainer>
  )
}

export default ButtonSection