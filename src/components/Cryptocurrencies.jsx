import { Card, Col, Row, Typography } from "antd";
import millify from "millify";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetCrytoMarketsQuery } from "../services/cryptoMarketsApi";
import Loader from "./Loader";
const { Title } = Typography;

const Crytocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCrytoMarketsQuery(count);

  const [cryptos, setcryptos] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  console.log(cryptos);

  useEffect(() => {
    const filteredData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().match(searchTerm)
    );
    setcryptos(filteredData);
  }, [cryptoList, searchTerm]);

  if (isFetching)
    return (
      <Row
        gutter={[24, 24]}
        className="news-row"
        justify={"center"}
        align={"middle"}
      >
        <Loader />
      </Row>
    );

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <input
            placeholder="Search Cryptocurrency..."
            onChange={(e) => setSearchTerm(e.target.value.toLocaleLowerCase())}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => {
          return (
            <Col xs={24} sm={12} lg={6} key={currency.id}>
              <Link to={`/crypto/${currency.uuid}`}>
                <Card
                  className="card"
                  title={`${currency.rank}.${currency.name}`}
                  extra={
                    <img
                      className="crypto-image"
                      src={currency.iconUrl}
                      hoverable="true"
                    />
                  }
                  key={currency.id}
                >
                  <Title level={5} italic type="secondary">
                    Price:{" "}
                    <span
                      className={currency.price < 0 ? "warning" : "success"}
                    >
                      {millify(currency.price)}
                    </span>
                  </Title>

                  <Title level={5} italic type="secondary">
                    Market Cap:{" "}
                    <span
                      className={currency.marketCap < 0 ? "warning" : "success"}
                    >
                      {millify(currency.marketCap)}
                    </span>{" "}
                  </Title>
                  <Title level={5} italic type="secondary">
                    Daily Change:
                    <span
                      className={currency.change < 0 ? "warning" : "success"}
                    >
                      {millify(currency.change)}
                    </span>
                  </Title>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Crytocurrencies;
