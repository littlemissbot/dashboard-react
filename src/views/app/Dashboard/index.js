import React from "react";
import { FileExcelOutlined, FilterOutlined } from "@ant-design/icons";
import { Space, Typography, Button, Row, Col, Card, Statistic } from "antd";

const { Title, Text } = Typography;

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
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card>
            <Statistic title="Total Users" value={1000} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Total Sales" value={5000} prefix="$" />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic title="Total Orders" value={2000} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Total Orders" value={2000} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Total Revenue" value={10000} prefix="$" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
