import { Button, Col, Input, Row } from "antd";
import React from "react";
import { styled } from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
import icon1 from "../../icons/Group 640.png";
import icon2 from "../../icons/Group 603.png";
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";

const HeaderContainer = styled(Row)`
  height: 4rem;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 1rem;
  background: white;
  border-bottom: 1px solid #dbdbdb;
`;

const Header = ({ setCollapsed, collapsed }) => {
  return (
    <>
      <HeaderContainer>
        <Col>
          <Row>
            <Button
              type="text"
              icon={
                collapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />
              }
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Row>
        </Col>

        <Col sm={0} lg={7} xs={0}>
          <Input
            size="large"
            placeholder="Search for anything..."
            prefix={<SearchOutlined />}
          />
        </Col>
        <Col>
          <img src={icon1} alt="icon" />
        </Col>
        <Col>
          <img src={icon2} alt="icon" />
        </Col>
      </HeaderContainer>
    </>
  );
};

export default Header;
