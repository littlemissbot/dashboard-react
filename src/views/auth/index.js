import React from "react";
import { ConfigProvider, Space } from "antd";
import { Outlet } from "react-router-dom";

import logo from "../../logo.png";

const AuthLayout = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#722ed1",
          borderRadius: 4,
          fontFamily: "Onest",
        },
      }}
    >
      <Space
        direction="vertical"
        align="center"
        style={{ display: "flex", height: "100vh", justifyContent: "center" }}
      >
        <img src={logo} alt="Logo" height={60} />
        <Outlet />
      </Space>
    </ConfigProvider>
  );
};

export default AuthLayout;
