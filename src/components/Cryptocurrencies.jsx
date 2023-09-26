import React, { Fragment, useEffect } from "react";
import { useGetCrytoMarketsQuery } from "../services/cryptoMarketsApi";
import { useState } from "react";
import { Card, Row, Col } from "antd";
import { Link } from "react-router-dom";
import millify from "millify";

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

  if (isFetching) return "Loading ...";

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
              <Link to={`/crypto/${currency.id}`}>
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
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  <p>Daily Change: {millify(currency.change)}</p>
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
