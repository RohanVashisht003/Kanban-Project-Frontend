import React, { useState } from "react";
import Header from "../header/Header";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { Badge, Button, Card, Col, Layout, Menu, Row, Typography } from "antd";
import logo from "../../icons/Group 7.png";
import logoText from "../../icons/Group 8.png";
import { styled } from "styled-components";
import homeIcon from "../../icons/category.png";
import messageIcon from "../../icons/message.png";
import taskIcon from "../../icons/task-square.png";
import profileIcon from "../../icons/profile-2user.png";
import settingIcon from "../../icons/setting-2.png";
import addIcon from "../../icons/add-square.png";
import MainContent from "../../pages/MainContent";

const LogoRow = styled(Row)`
  justify-content: center;
  align-items: center;
  height: 4rem;
  border-bottom: 1px solid #dbdbdb;
`;

const cardBodyStyle = {
  width: "206px",
  background: "#F5F5F5",
};
const menuItems = [
  { label: "Home", icon: <img src={homeIcon} alt={"homeIcon"} /> },
  { label: "Messages", icon: <img src={messageIcon} alt={"messageIcon"} /> },
  { label: "Tasks", icon: <img src={taskIcon} alt={"taskIcon"} /> },
  { label: "Members", icon: <img src={profileIcon} alt={"profileIcon"} /> },
  {
    label: "Settings",
    icon: <img src={settingIcon} alt={"settingIcon"} />,
  },
];

const sampleButtons = [
  { label: "Mobile App", icon: <Badge status="success" /> },
  { label: "Website Redesign", icon: <Badge status="warning" /> },
  { label: "Design System", icon: <Badge color="#E4CCFD" /> },
  { label: "Wireframes", icon: <Badge color="geekblue" /> },
];

const KanbanLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Layout>
        <Sider
          theme="light"
          style={{ borderRight: "1px solid #dbdbdb" }}
          width={240}
          collapsible
          collapsed={collapsed}
          breakpoint={"lg"}
          trigger={null}
          collapsedWidth={0}
          onBreakpoint={(broken) => {
            setCollapsed(broken);
          }}
        >
          <LogoRow>
            <Row>
              <img src={logo} alt="logo" />
              <img src={logoText} alt="logo" />
            </Row>
          </LogoRow>
          <Row style={{ borderBottom: " 1px solid #dbdbdb" }}>
            <Col span={24}>
              <Menu>
                {menuItems.map((item, index) => (
                  <Menu.Item key={index}>
                    <Row align={"middle"}>
                      {item.icon}&nbsp;
                      {item.label}
                    </Row>
                  </Menu.Item>
                ))}
              </Menu>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Row justify={"space-evenly"} align={"middle"}>
                <Typography.Text>MY PROJECTS</Typography.Text>
                <Button icon={<img src={addIcon} alt="add-icon" />} ghost />
              </Row>
              <Row className="mt-1">
                {sampleButtons.map((item, index) => (
                  <Button ghost className="color-black" key={index}>
                    <Row align={"middle"}>
                      <Col>{item.icon}</Col>
                      &nbsp; &nbsp;
                      <Col>{item.label}</Col>
                    </Row>
                  </Button>
                ))}
              </Row>
              <Row justify={"center"} className="mt-1">
                <Card bodyStyle={cardBodyStyle}>
                  <Row style={{ textAlign: "center" }}>
                    <Col>
                      <Col style={{ marginBottom: "0.5rem" }}>
                        <span>Thoughts Time</span>
                      </Col>

                      <Col>
                        <span>
                          We don’t have any notice for you, till then you can
                          share your thoughts with your peers.
                        </span>
                      </Col>
                      <Col style={{ marginTop: "1rem" }}>
                        <Button>Write a message</Button>
                      </Col>
                    </Col>
                  </Row>
                </Card>
              </Row>
            </Col>
          </Row>
        </Sider>
        <Layout>
          <Header setCollapsed={setCollapsed} collapsed={collapsed} />
          <Content style={{ background: "white" }}>
            <MainContent />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default KanbanLayout;
