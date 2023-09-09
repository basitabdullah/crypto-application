import {Chart as ChartJs, CategoryScale ,LinearScale,PointElement,LineElement,Title,Tooltip,Legend } from 'chart.js'
import React from 'react'
import { Line } from 'react-chartjs-2'
ChartJs.register(
    CategoryScale ,LinearScale,PointElement,LineElement,Title,Tooltip,Legend
)
const Chart = ({arr=[],currency,days}) => {
const prices= []
const dates= []
for (let i = 0 ; i< arr.length ; i++){
  if(days === "24h" ) dates.push(new Date (arr[i][0]).toLocaleTimeString())
 else   dates.push(new Date (arr[i][0]).toLocaleDateString())

  
  prices.push(arr[i][1])
}
const data={
  
    labels : dates,
    datasets : [{
      label : `Prices in ${currency}`,
      data : prices, borderColor: "gray",
       backgroundColor : "light"
    }]
  
}

  return (
    <Line options={{
      responsive : true   
    }}
    data={data}
    />
  
  )
}

export default Chart