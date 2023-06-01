import { useEffect, useState } from "react";
import axios from "axios";
const useGetCoins = () =>{
    const [coins, setCoins] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getCoin = async () => {
        setIsLoading(true)
        try{
            const response = await axios.get(
                "https://api.coingecko.com/api/v3/coin/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1"
              );
              const data = await response.data;
              console.log(data)
              setCoins(data);
              setIsLoading(false);
        }
        catch(error){
            setError(error.message)
            setIsLoading(false)
        }
      
    };
    getCoin();
  }, []);
  console.log(coins)
  let filteredCoinsArray = []
  filteredCoinsArray.push(coins[2],coins[1],coins[4], coins[17])
    return {coins, loading, error}
}
export default useGetCoins