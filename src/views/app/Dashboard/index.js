import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FileExcelOutlined,
  FilterOutlined,
  EditOutlined,
  ReloadOutlined,
  ExclamationCircleFilled,
  DeleteOutlined,
} from "@ant-design/icons";
import { Space, Modal, Typography, Button, Divider } from "antd";

import DragNDrop from "../../../components/elements/DndContext";
import FormDashboard from "../../../components/forms/formDashboard";
import { deleteDashboard } from "../../../redux/slices/dashboardsSlice";
const { Title, Text } = Typography;
const { confirm } = Modal;

const Dashboard = () => {
  const dispatch = useDispatch();
  const dashboard = useSelector((state) => state.dashboards.dashboard);
  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure delete this dashboard?",
      icon: <ExclamationCircleFilled />,
      content:
        "This dashboard will be deleted permanently and cannot be recovered.",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        dispatch(deleteDashboard(dashboard.id));
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

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
            {dashboard.title || "Welcome Back!"}
          </Title>
          <Text type="secondary">
            {dashboard.description || "Dashboard Overview"}
          </Text>
        </div>
        <Space>
          <FormDashboard />
          <Divider type="vertical" />
          <Button type="default" icon={<EditOutlined />} />
          <Button type="default" icon={<ReloadOutlined />} />
          <Button
            onClick={showDeleteConfirm}
            type="default"
            icon={<DeleteOutlined />}
            disabled={dashboard.id === 1}
          />
          <Divider type="vertical" />
          <Button type="default" icon={<FilterOutlined />}>
            Filter by
          </Button>
          <Button type="primary" icon={<FileExcelOutlined />}>
            Export
          </Button>
        </Space>
      </Space>
      <DragNDrop widgets={dashboard.widgets} />
    </div>
  );
};

export default Dashboard;
