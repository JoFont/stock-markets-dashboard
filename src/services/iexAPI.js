import axios from "axios";


export const searchMarkets = async (query) => {
  const response = await axios.get(`https://cloud.iexapis.com/stable/search/${query}`, {
    params: {
      token: process.env.REACT_APP_IEX_PUB,
    }
  });
  return response.data;
}