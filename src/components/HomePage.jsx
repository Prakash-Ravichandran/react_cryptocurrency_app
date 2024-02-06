import { Avatar, Card, Col, Row, Statistic, Typography } from "antd";
import millify from "millify";
import React from "react";
import { CardBody } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGetCrytoMarketsQuery } from "../services/cryptoMarketsApi";
import Cryptocurrencies from "./Cryptocurrencies";
import GoogleSignoutButton from "./GoogleSignoutBtn";
import Loader from "./Loader";
import NewsComponent from "./NewsComponent";

const { Title } = Typography;

const HomePage = ({ setToken, user, setUser }) => {
  const { data, isFetching } = useGetCrytoMarketsQuery(10);
  console.log(data);
  console.log("user =" + JSON.stringify(user));
  const globalStats = data?.data?.stats;

  if (isFetching)
    return (
      <>
        <Row
          gutter={[24, 24]}
          className="news-row"
          justify={"center"}
          align={"middle"}
        >
          <Loader />
        </Row>
      </>
    );
  return (
    <div>
      <Card>
        <CardBody>
          <Row justify={"space-between"} align={"middle"}>
            <Title level={2} className="heading">
              Global Crypto Statistics
            </Title>
            <GoogleSignoutButton setToken={setToken} />
          </Row>
        </CardBody>
        <Row justify={"flex-start"} align={"middle"}>
          <Title level={3} className="heading" gutter={[6, 6]}>
            {`Welcome ! ${user.profileObj.name}`}
          </Title>
          <Avatar src={user.profileObj.imageUrl}></Avatar>
        </Row>
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
            <Statistic
              title="Total Cryptocurrencies"
              value={globalStats.total}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Markets"
              value={globalStats && globalStats.totalMarkets}
            ></Statistic>
          </Col>
        </Row>
      </Card>

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
