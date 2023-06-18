import { Card, Col, Row, Tag, Typography } from "antd";
import React from "react";

const cardBodyStyle = {
  padding: "1rem",
};

const { Text } = Typography;

const CustomCard = ({ priority, title, description }) => {
  return (
    <>
      <Card bodyStyle={cardBodyStyle} style={{ margin: "1rem 0rem" }}>
        <Row>
          <Col>
            <Tag color="red">{priority}</Tag>
          </Col>
        </Row>
        <Row>
          <Text strong>{title}</Text>
          <span>{description}</span>
        </Row>
      </Card>
    </>
  );
};

export default CustomCard;
