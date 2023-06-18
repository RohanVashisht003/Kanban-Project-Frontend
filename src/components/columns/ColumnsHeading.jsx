import { Badge, Col, Divider, Row, Typography } from "antd";
import React from "react";

const { Text } = Typography;

const ColumnsHeading = ({ section }) => {
  return (
    <>
      <Row>
        <Col>
          {section.title === "To Do" && <Badge color="#5030E5" />}
          {section.title === "On Progress" && <Badge color="#FFA500" />}
          {section.title === "Completed" && <Badge color="#76A5EA" />}
          &nbsp;
          <Text strong>{section.title}</Text>
          &nbsp;
          <Badge
            count={section.tasks.length}
            color="#DBDBDB"
            style={{ color: "black" }}
          />
        </Col>
        {section.title === "To Do" && (
          <Divider style={{ border: "2px solid #5030E5" }} />
        )}
        {section.title === "On Progress" && (
          <Divider style={{ border: "2px solid #FFA500" }} />
        )}
        {section.title === "Completed" && (
          <Divider style={{ border: "2px solid #8BC48A" }} />
        )}
      </Row>
    </>
  );
};

export default ColumnsHeading;
