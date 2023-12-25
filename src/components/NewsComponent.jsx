import { Avatar, Card, Col, Row, Typography } from "antd";
import React from "react";
import { useGetgeneralNewsApiQuery } from "../services/generalNewsApi";
const { Title, Text } = Typography;
const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const NewsComponent = () => {
  const { data: news, isFetching } = useGetgeneralNewsApiQuery();

  //   console.log(JSON.stringify(news?.articles));

  if (isFetching) return "Loading ...";
  return (
    <>
      <Row gutter={[24, 24]} className="news-row">
        {news?.articles?.map((value, id) => {
          return (
            <>
              <Col xs={24} sm={12} lg={8} key={id}>
                <Card>
                  <a href={value?.url} target="_blank" rel="noreferrer">
                    <div className="news-image-container">
                      <Title className="news-title" level={4}>
                        {value?.title}
                      </Title>
                      <div>
                        <img src={value?.urlToImage || demoImage}></img>
                      </div>
                    </div>

                    <p class="news-description">{value?.description}</p>

                    <div className="provider-container">
                      <Avatar src={value?.urlToImage || demoImage}></Avatar>
                      <h3>{`Author: ${value?.author}`}</h3>
                    </div>
                  </a>
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
