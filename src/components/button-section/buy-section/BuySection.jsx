import React, { useState, useEffect } from "react";
import { BuyContainer, BuyInput, MintButton } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./../../../redux/data/dataActions";
import { mainContract } from "./../../../absolutePath";
const BuySection = (props) => {
  const { cost, alreadyMinted, totalSupply, maxSupply, maxSupplyTotal } = props;
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [amount, setAmount] = useState("0");

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };
  useEffect(() => {
    getData();
  }, [blockchain.account]);
  const claimNFTs = () => {


    const mintAmount = parseInt(amount);
    if (mintAmount === 0 || !mintAmount) return;
    const maxNumber = parseInt(maxSupply);
    const minted = parseInt(alreadyMinted)
    if(mintAmount > parseInt(maxSupply) - parseInt(alreadyMinted)){
      alert(`You can't mint more then ${maxSupply} nfts\n ${maxSupply - alreadyMinted} nfts left to mint`);
      return;
    }
    if(mintAmount + totalSupply > maxSupplyTotal){
      alert(`You can't mint that much! Max supply is ${maxSupplyTotal} `);
      return;
    }
    let gasLimit = 300000;
    let price = BigInt(cost * amount);
    let totalCostWei = String(price);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(Number(amount))
      .send({
        to: mainContract.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
    getData();
  };
  return (
    <BuyContainer>
      <BuyInput
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <MintButton
        onClick={(e) => {
          e.preventDefault();
          {
            claimingNft === false ? claimNFTs() : "";
          }
        }}
      >
        Mint
      </MintButton>
    </BuyContainer>
  );
};

export default BuySection;
