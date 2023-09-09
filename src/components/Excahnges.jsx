import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Container, HStack } from "@chakra-ui/react";
import Loader from "./Loader";
import ExchangeCard from "./ExchangeCard";
import ErrorComponent from "./ErrorComponent";


const Excahnges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);
  useEffect(() => {
    const fetchExchanges = async () => {
    try{
      const {data} = await axios.get(`${server}/exchanges`);
      setExchanges(data);
      setLoading(false);
    }
    catch(error){
      setError(true)
      setLoading(false)

    }
    };
    fetchExchanges();
  }, []);
if(Error){
  return <ErrorComponent message = {"Error While Fetching The Data..."}/>
} 
  return (
    <Container maxW={"container.xl"}>
      {Loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} w={"full"} justifyContent={"center"} gap={10} marginTop={6}>
            {exchanges.map((i) => (
              <ExchangeCard name={i.name} img={i.image}  rank={i.trust_score_rank} url={i.url} key={i.id}/>
            ))}
          </HStack>
        </>                 
      )}
    </Container>
  );
};

export default Excahnges;
