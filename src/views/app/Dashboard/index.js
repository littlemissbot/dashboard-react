import React from "react";
import { Row, Col, Card, Statistic } from "antd";

const Dashboard = () => {
  return (
    <div>
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
