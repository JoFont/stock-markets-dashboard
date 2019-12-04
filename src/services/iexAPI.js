import axios from "axios";


export const searchMarkets = async (query) => {
  const response = await axios.get(`https://cloud.iexapis.com/stable/search/${query}`, {
    params: {
      token: process.env.REACT_APP_IEX_PUB,
    }
  });
  return response.data;
}

export const fetchDataOverview = async (symbol) => {
  console.log("Heyy", symbol)
  const response = await axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/batch`, {
    params: {
      types: "quote,chart",
      range: "1m",
      token: process.env.REACT_APP_IEX_PUB,
    }
  });
  console.log(response.data);
  return response.data
}