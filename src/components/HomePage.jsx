import React, { useEffect } from "react";
import millify from "millify";
import { Typography, Statistic, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { useGetCrytoMarketsQuery } from "../services/cryptoMarketsApi";

const { Title } = Typography;

const HomePage = () => {
  const { data, isLoading } = useGetCrytoMarketsQuery();
  const globalStats = data?.data?.stats;

  console.log(data);
  return (
    <div>
      <Title level={2} className="heading">
        Global Crypto Statistics
      </Title>
      <Row>
        <Col>
          <Statistic
            span={12}
            title="Total Cryptocurrencies"
            value={globalStats && globalStats.total}
          ></Statistic>

          <Statistic
            span={12}
            title="Total Exchanges"
            value={millify(globalStats && globalStats.totalExchanges)}
          ></Statistic>
          <Statistic
            span={12}
            title="Total Market Cap"
            value={`$${millify(globalStats && globalStats.totalMarketCap)}`}
          ></Statistic>
          <Statistic
            span={12}
            title="Total 24h Volume"
            value={`$${millify(globalStats && globalStats.total24hVolume)}`}
          ></Statistic>
          <Statistic
            span={12}
            title="Total Markets"
            value={globalStats && globalStats.totalMarkets}
          ></Statistic>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
