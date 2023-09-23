import axios, { HttpStatusCode } from "axios";

const BASE_URL = "https://api.binance.com/api/v3";

export const getTokenAvgPrice = async (pair: string) => {
  try {
    const response = await axios.get(BASE_URL + `/avgPrice?symbol=${pair}`);
    if (response.status === HttpStatusCode.Ok) {
      return response?.data?.price;
    }
  } catch (error) {
    throw new Error(`[getTokenAvgPrice] Failed to get ${pair} avg price`);
  }
};