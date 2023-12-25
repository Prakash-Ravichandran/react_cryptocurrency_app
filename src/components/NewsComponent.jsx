import React from "react";
import { useGetgeneralNewsApiQuery } from "../services/generalNewsApi";

const NewsComponent = () => {
  const { data: news } = useGetgeneralNewsApiQuery();

  console.log(JSON.stringify(news?.articles));
  return (
    <>
      <h2>News Component</h2>
      {news?.articles?.map((value, id) => {
        return <h3>{value?.author}</h3>;
      })}
    </>
  );
};

export default NewsComponent;
