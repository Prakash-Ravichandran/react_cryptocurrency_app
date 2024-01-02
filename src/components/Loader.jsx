import { Col, Row } from "antd";
import "./Loader.css";

const Loader = () => {
  return (
    <Row>
      <Col>
        <div class="loader">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </Col>
    </Row>
  );
};

export default Loader;
