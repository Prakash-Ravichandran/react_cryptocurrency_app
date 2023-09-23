import React, { useEffect } from "react";
import millify from "millify";
import { Typography, Statistic, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { useGetCrytoMarketsQuery } from "../services/cryptoMarketsApi";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";

const { Title } = Typography;

const HomePage = () => {
  const { data, isFetching } = useGetCrytoMarketsQuery();
  const globalStats = data?.data?.stats;

  if (isFetching) return "Loading ....";
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
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </div>
  );
};

export default HomePage;
