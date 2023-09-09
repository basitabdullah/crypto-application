import React from 'react'

import  { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import CoinCard from './CoinCard';


const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState('inr');
  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€": "$"

  const pageChange =(page)=>{
   setPage(page)
   setLoading(true)
  }

  const btns = new Array(100).fill(1)
  useEffect(() => {
    const fetchCoins = async () => {
    try{
      const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
      setCoins(data);
      setLoading(false);
    }
    catch(error){
      setError(true)
      setLoading(false)

    }
    };
    fetchCoins();
  }, [currency,page]);
if(Error){
  return <ErrorComponent message = {"Error While Fetching The Data..."}/>
} 
  return (
    <Container maxW={"container.xl"}>
      {Loading ? (
        <Loader />
      ) : (
        <>

        <RadioGroup p={"8"} value={currency} onChange={setCurrency} >
          <HStack spacing={"6"}>
            <Radio value={"inr"}  >INR </Radio>
            <Radio value={"eur"}  >EUR </Radio>
            <Radio value={"usd"}  >USD </Radio>
          
          </HStack>
        </RadioGroup>
          <HStack wrap={"wrap"} w={"full"} justifyContent={"center"} gap={10} marginTop={6}>
            {coins.map((i) => (
              <CoinCard name={i.name} img={i.image} symbol = {i.symbol}  price={i.current_price} key={i.id} id={i.id} currencySymbol={currencySymbol}/>
            ))}
          </HStack>
          <HStack w={"full"} overflowX={"auto"} p={"8"}>
            {
              btns.map((i,index)=>(
            <Button bgColor={"blackAlpha.900"} color={"white"} onClick={()=>pageChange(index+1)}>{index+1}</Button>

              ))
            }
          </HStack>
        </>                 
      )}
    </Container>
  );
};


export default Coins