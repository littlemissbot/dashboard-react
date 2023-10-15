import React from "react";
import { FileExcelOutlined, FilterOutlined } from "@ant-design/icons";
import { Space, Typography, Button, Row, Col, Card, Statistic } from "antd";

import DragNDrop from "./DndContext";
const { Title, Text } = Typography;
const items = [
  {
    title: "Total Users",
    value: 1000,
    id: "1",
    width: 6,
  },
  {
    title: "Total Sales",
    value: 1000,
    id: "2",
    width: 6,
  },
  {
    title: "Total Orders",
    value: 1000,
    id: "3",
    width: 6,
  },
  {
    title: "Total Users",
    value: 1000,
    id: "4",
    width: 6,
  },
  {
    title: "Total Sales",
    value: 1000,
    id: "5",
    width: 6,
  },
  {
    title: "Total Orders",
    value: 1000,
    id: "6",
    width: 6,
  },
];

const Dashboard = () => {
  return (
    <div>
      <Space
        align="end"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <div>
          <Title level={5} style={{ marginBottom: 0 }}>
            Welcome Back,
          </Title>
          <Text type="secondary">Dashboard Overview</Text>
        </div>
        <Space>
          <Button type="default" icon={<FilterOutlined />}>
            Filter by
          </Button>
          <Button type="primary" icon={<FileExcelOutlined />}>
            Export
          </Button>
        </Space>
      </Space>
      <DragNDrop />
    </div>
  );
};

export default Dashboard;
