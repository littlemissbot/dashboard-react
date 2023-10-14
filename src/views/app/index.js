import React from "react";
import { UserOutlined, BellOutlined } from "@ant-design/icons";
import {
  Layout,
  Menu,
  Dropdown,
  Space,
  Avatar,
  Typography,
  Button,
} from "antd";
import { Outlet } from "react-router-dom";

import styles from "./app.module.css";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

function AppLayout() {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Account Preferences
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Feedback
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Logout
        </a>
      ),
    },
  ];
  return (
    <Layout>
      <Sider width={230} className={styles.sider}>
        <Space direction="vertical" size="large">
          <img src="https://via.placeholder.com/200x40" alt="Logo" />
          <Menu theme="dark" mode="vertical" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">Dashboard</Menu.Item>
            <Menu.Item key="2">Products</Menu.Item>
            <Menu.Item key="3">Conversation</Menu.Item>
            <Menu.Item key="4">Campaigns</Menu.Item>
            <Menu.Item key="5">Audience</Menu.Item>
            <Menu.Item key="5">Statistic</Menu.Item>
            <Menu.Item key="5">Settings</Menu.Item>
            <Menu.Item key="5">Help Center</Menu.Item>
          </Menu>
        </Space>
      </Sider>
      <Layout>
        <Header align="right" className={styles.header}>
          <Space size="large">
            <Button type="text" icon={<BellOutlined />}></Button>
            <Dropdown menu={{ items }} placement="bottomRight">
              <Space>
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  shape="circle"
                  size="large"
                  icon={<UserOutlined />}
                />
                <Title level={5} className={styles.avatarName}>
                  Samita Mondal <br />
                  <small>Lead Engineer</small>
                </Title>
              </Space>
            </Dropdown>
          </Space>
        </Header>
        <Content className={styles.content}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default AppLayout;
