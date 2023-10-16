import React from "react";
import { Result, Button, ConfigProvider } from "antd";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

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
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => navigate("/")}>
            Back Home
          </Button>
        }
        style={{
          height: "calc(100vh - 220px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      />
    </ConfigProvider>
  );
};

export default NotFound;
