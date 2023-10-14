import React from "react";
import { UserOutlined, LogoutOutlined, BellOutlined } from "@ant-design/icons";
import {
  ConfigProvider,
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
import logo from "../../logo.png";

const { Header, Sider, Content } = Layout;

function AppLayout() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#722ed1",
          borderRadius: 4,
          fontFamily: "Onest",
        },
        components: { Layout: { headerBg: "#ffffff", siderBg: "#ffffff" } },
      }}
    >
      <Layout>
        <Sider width={230} className={styles.sider}>
          <div className={styles.logo}>
            <img src={logo} alt="Logo" height={40} />
          </div>
          <Menu
            mode="vertical"
            defaultSelectedKeys={["1"]}
            className={styles.menu}
          >
            <Menu.Item key="1">Dashboard</Menu.Item>
            <Menu.Item key="2">Products</Menu.Item>
            <Menu.Item key="3">Conversation</Menu.Item>
            <Menu.Item key="4">Campaigns</Menu.Item>
            <Menu.Item key="5">Audience</Menu.Item>
            <Menu.Item key="5">Statistic</Menu.Item>
            <Menu.Item key="5">Settings</Menu.Item>
            <Menu.Item key="5">Help Center</Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header align="right" className={styles.header}>
            <Space>
              <Button type="text" icon={<BellOutlined />}></Button>
              <Button type="text" icon={<UserOutlined />}></Button>
              <Button type="text" icon={<LogoutOutlined />}></Button>
              {/* <Dropdown menu={{ items }} placement="bottomRight">
                <Space align="center">
                  <Avatar
                    style={{ backgroundColor: "#00b96b" }}
                    shape="circle"
                    size="large"
                    icon={<UserOutlined />}
                  />
                  <Title level={5} className={styles.avatarName}>
                    Samita Mondal
                    <Text type="secondary" className={styles.avatarRole}>
                      Admin
                    </Text>
                  </Title>
                </Space>
              </Dropdown> */}
            </Space>
          </Header>
          <Content className={styles.content}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export default AppLayout;
