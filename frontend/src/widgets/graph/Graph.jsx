import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import {
  LineChart,
  Line
} from "recharts";

function Graph() {
  const [data, setData] = useState();
  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily`;
    axios.get(url).then((response) => {
      console.log(response.data);
      setData(response.data.prices);
    });
  }, []);

  return (
    <LineChart width={200} height={400} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>

    //   <Tooltip />
  );
}

export default Graph;
