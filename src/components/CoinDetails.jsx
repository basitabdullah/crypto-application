import { Badge, Box, Button, Container, HStack, Image, Radio, RadioGroup, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import axios from "axios";
import { server } from "../index";
import {useParams} from 'react-router-dom'
import ErrorComponent from './ErrorComponent';
import CustomBar from './CustomBar';
import Item from './Item';
import ChartFile from './ChartFile';



const CoinDetails = () => {
  const [coin, setCoin] = useState({});
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);
  const [currency, setCurrency] = useState('inr');
  const [days,setDays] = useState("24h")
  const [chartArray,setChartArray] = useState([])
  
  const btns = ["24h" , "7d" , "14d" , "60d","200d", "365d" , "Max"]
  const switchChart=(key)=>{
switch(key){
  case "24h" :
    setDays("24h")
    setLoading(true)
    break;

    case "7d" :
      setDays("7d")
      setLoading(true)
      break;

      case "14d" :
        setDays("14d")
        setLoading(true)
        break;

        case "60d" :
          setDays("60d")
          setLoading(true)
          break;

          case "200d" :
            setDays("200d")
            setLoading(true)
            break;

            case "365d" :
              setDays("1yr")
              setLoading(true)
              break;

              case "Max" :
                setDays("max")
                setLoading(true)
                break;

    default:
      setDays("7d")
      setLoading(true)
    break;
}
  }
  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€": "$"
  const prams = useParams()

  useEffect(() => {
    const fetchCoin = async () => {
    try{
      const {data} = await axios.get(`${server}/coins/${prams.id}`);
      const {data:chartData} = await axios.get(`${server}/coins/${prams.id}/market_chart?vs_currency=${currency}&days=${days}`);
      setCoin(data);
      setChartArray(chartData.prices)
      setLoading(false);
    }
    catch(error){
      setError(true)
      setLoading(false)

    }
    };
    fetchCoin();
  },[prams.id,currency,days]);

  if(Error){
    return <ErrorComponent message = {"Error While Fetching The Data..."}/>
  } 
  return (
    <Container maxW={"container.xl"}>

{
Loading?  <Loader/> : (
  <>
  
  <Box borderWidth={1} width={"full"}>
<ChartFile currency={currencySymbol} arr={chartArray} days={days}/>
  </Box>

<HStack p={"4"} overflowX={"auto"}>
{
  btns.map((i)=>(
    <Button key={i} onClick={()=>switchChart(i)}>{i}</Button>
  ))
}
</HStack>

  <RadioGroup p={"8"} value={currency} onChange={setCurrency} >
          <HStack spacing={"6"}>
            <Radio value={"inr"}  >INR </Radio>
            <Radio value={"eur"}  >EUR </Radio>
            <Radio value={"usd"}  >USD </Radio>
          
          </HStack>
        </RadioGroup>

        <VStack spacing={"4"} p={"16"} alignItems={"flex-start"}>
          <Text alignSelf={"center"} opacity={0.7} fontSize={"small"}>Last Updated on {Date(coin.last_updated).split("G")[0]}</Text>
         <Image src={coin.image.large} w={"16"} h={"16"} objectFit={"contain"} />
         <Stat>
          <StatLabel>{coin.name}</StatLabel>
          <StatNumber>{currencySymbol}{coin.market_data.current_price[currency]}</StatNumber>
          <StatHelpText>
            <StatArrow type={coin.market_data.price_change_24h > 0 ? "increase" : "decrease"}/>
            {coin.market_data.price_change_24h}%
          </StatHelpText>
         </Stat>

         <Badge fontSize={"2xl"} bgColor={"blackAlpha.500"} color={"white"}>{`#${coin.market_cap_rank}`}</Badge>
         <CustomBar high={`${currencySymbol}${coin.market_data.high_24h[currency]}`} low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}/>

         <Box width={"full"} p={"4"}>
          <Item title={"Max Supply"} value={coin.market_data.max_supply ? coin.market_data.max_supply : "Unknown" } />
          <Item title={"Circulating Supply"} value={coin.market_data.circulating_supply} />
          <Item title={"Market Cap"} value={`${currencySymbol}${coin.market_data.market_cap[currency]}`} />
          <Item title={"All Time High"} value={`${currencySymbol}${coin.market_data.ath[currency]}`} />
          <Item title={"All Time Low"} value={`${currencySymbol}${coin.market_data.atl[currency]}`} />
         </Box>
        </VStack>
  
  </>
)

}

    </Container>
  )

}

export default CoinDetails