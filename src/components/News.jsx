import React, { useEffect } from "react";
import { useState } from "react";

import { useGetCrytoMarketsQuery } from "../services/cryptoMarketsApi";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptoList } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });
  const value = cryptoList?.value;

  console.log(value);

  useEffect(() => {
    console.log(value);
  });

  return (
    <>
      <h1>News</h1>
      <h2>{cryptoList?.value[0].description}</h2>
    </>
  );
};

export default News;
