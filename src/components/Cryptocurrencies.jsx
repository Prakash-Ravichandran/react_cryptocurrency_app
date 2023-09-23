import React from "react";
import { useGetCrytoMarketsQuery } from "../services/cryptoMarketsApi";

const Crytocurrencies = () => {
  const { data, isFetching } = useGetCrytoMarketsQuery();
  console.log(data);
  return <div>Crytocurrencies</div>;
};

export default Crytocurrencies;
