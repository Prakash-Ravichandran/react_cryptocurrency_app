import { Col, Row, Statistic, Typography } from "antd";
import millify from "millify";
import React from "react";
import { Link } from "react-router-dom";
import { useGetCrytoMarketsQuery } from "../services/cryptoMarketsApi";
import Cryptocurrencies from "./Cryptocurrencies";
import NewsComponent from "./NewsComponent";

const { Title } = Typography;

const HomePage = () => {
  const { data, isFetching } = useGetCrytoMarketsQuery(10);
  console.log(data);
  const globalStats = data?.data?.stats;

  if (isFetching) return "Loading ....";
  return (
    <div>
      <Title level={2} className="heading">
        Global Crypto Statistics
      </Title>
      <Row gutter={[32, 32]}>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={globalStats && globalStats.total}
          ></Statistic>
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats && globalStats.totalExchanges)}
          ></Statistic>
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={`$${millify(globalStats && globalStats.totalMarketCap)}`}
          ></Statistic>
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={`$${millify(globalStats && globalStats.total24hVolume)}`}
          ></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
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
          Latest News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <NewsComponent />
    </div>
  );
};

export default HomePage;
