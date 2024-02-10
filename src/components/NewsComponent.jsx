import { Avatar, Button, Card, Col, Row, Select, Typography } from "antd";
import React, { useState } from "react";
import { CardBody } from "react-bootstrap";
import { useGetgeneralNewsApiQuery } from "../services/generalNewsApi";
import Loader from "./Loader";
const { Title, Text } = Typography;
const { Option } = Select;

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const category = [
  "general",
  "world",
  "nation",
  "business",
  "technology",
  "entertainment",
  "sports",
  "science",
  "health",
];

const countries = [
  {
    country: "Australia",
    symbol: "au",
    lang: "en",
  },
  {
    country: "Brazil",
    symbol: "br",
    lang: "en",
  },
  {
    country: "Canada",
    symbol: "ca",
    lang: "en",
  },
  {
    country: "china",
    symbol: "cn",
    lang: "zh",
  },

  {
    country: "France",
    symbol: "fr",
    lang: "fr",
  },
  {
    country: "Germany",
    symbol: "de",
    lang: "de",
  },
  {
    country: "Greece",
    symbol: "gr",
    lang: "el",
  },
  {
    country: "Hong Kong",
    symbol: "hk",
    lang: "zh",
  },
  {
    country: "India",
    symbol: "in",
    lang: "ta",
  },
  {
    country: "Ireland",
    symbol: "ie",
    lang: "en",
  },

  {
    country: "Italy",
    symbol: "it",
    lang: "it",
  },
  {
    country: "Japan",
    symbol: "jp",
    lang: "ja",
  },
  {
    country: "Netherlands",
    symbol: "nl",
    lang: "nl",
  },
  {
    country: "Norway",
    symbol: "no",
    lang: "no",
  },
  {
    country: "United Kingdom",
    symbol: "gb",
    lang: "en",
  },
  {
    country: "United States",
    symbol: "us",
    lang: "en",
  },
];

const NewsComponent = () => {
  const [newsCategory, setNewsCategory] = useState("world");
  const [country, setCountry] = useState("us");
  const [symbol_lang, setSymbolLang] = useState({ symbol: "us", lang: "en" });
  const { data: news, isFetching } = useGetgeneralNewsApiQuery({
    newsCategory,
    symbol_lang,
  });

  // const handleCountry = (e) => {
  //   setSymbolLang({
  //     ...symbol_lang,
  //     symbol: e,
  //   });

  //   countries.map((country, id) => {
  //     if (country.symbol == e) {
  //       console.log("the country=" + e);
  //     }
  //   });

  //   console.log("c=" + e);
  // };
  // const handleLanguage = (e) => {
  //   setSymbolLang({
  //     ...symbol_lang,
  //     lang: e,
  //   });
  //   console.log("lang=" + e);
  // };

  console.log("News=" + JSON.stringify(news?.articles));

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
    <>
      <Row gutter={[24, 24]} className="news-row">
        <Col span={24}>
          <Card className="">
            <CardBody>
              <Row justify={"flex-start"} align={"middle"} className="mb-10 ">
                <Title level={5} italic className="mr-5 link">
                  Select a news Category :
                </Title>
                <Select
                  showSearch
                  className="select-news"
                  placeholder="Select a news category"
                  optionFilterProp="children"
                  onChange={(value) => setNewsCategory(value)}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase())
                  }
                  value={newsCategory}
                >
                  {category.map((value, id) => (
                    <Option value={value} key={id} className="news-title">
                      {value}
                    </Option>
                  ))}
                </Select>
              </Row>
              <Title className="news-title link" level={5} italic>
                Your Selection of news category : {newsCategory}
              </Title>
            </CardBody>
          </Card>
        </Col>
        {/* <Col span={24}>
          <Select
            showSearch
            className="country-news"
            placeholder="select a country specific news"
            optionFilterProp="children"
            onChange={(e) => handleCountry(e)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase())
            }
          >
            {countries.map((value, id) => (
              <Option value={value.lang} key={id}>
                {value.country} - {value.symbol}
              </Option>
            ))}
          </Select>
        </Col> */}
        {/* <Col span={24}>
          <Select
            showSearch
            className="country-news"
            placeholder="select a country specific news"
            optionFilterProp="children"
            onChange={(e) => handleLanguage(e)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase())
            }
          >
            {countries.map((value, id) => (
              <Option value={value.symbol} key={id}>
                {value.country} - {value.symbol}
              </Option>
            ))}
          </Select>
        </Col> */}
        {news?.articles?.map((value, id) => {
          return (
            <>
              <Col xs={24} sm={12} lg={8} key={id}>
                <Card key={id} className="card-shadow">
                  <a href={value?.url} target="_blank" rel="noreferrer">
                    <div className="news-image-container">
                      <Title className="news-title" level={4} italic>
                        {value?.source?.name}
                      </Title>
                      <Avatar src={value?.image || demoImage}></Avatar>
                    </div>

                    {/* <p className="news-description">{value?.description}</p> */}
                    <Title
                      className="news-description link"
                      level={5}
                      color="blue"
                    >
                      {value?.description}
                    </Title>
                    <div className="news-image-container news-image-center">
                      <div>
                        <img src={value?.image || demoImage}></img>
                      </div>
                    </div>
                    <div className="provider-container">
                      {/* <h3 className="news-description">{`${value?.content}`}</h3> */}
                      <Title className="news-description" level={5}>
                        {value?.content}
                      </Title>
                    </div>
                  </a>
                  <Button type="primary" className="btn-ellipsis">
                    Visit : {value?.source?.name}
                  </Button>
                </Card>
              </Col>
            </>
          );
        })}
      </Row>
    </>
  );
};

export default NewsComponent;
