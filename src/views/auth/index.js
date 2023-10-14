import React from "react";
import { Space } from "antd";
import { Outlet } from "react-router-dom";

import logo from "../../logo-dark.svg";

const AuthLayout = () => {
  return (
    <Space
      direction="vertical"
      align="center"
      style={{ display: "flex", height: "100vh", justifyContent: "center" }}
    >
      <img src={logo} alt="Logo" height={60} />
      <Outlet />
    </Space>
  );
};

export default AuthLayout;
