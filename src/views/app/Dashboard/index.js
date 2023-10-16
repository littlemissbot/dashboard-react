import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  FileExcelOutlined,
  FilterOutlined,
  EditOutlined,
  ExclamationCircleFilled,
  DeleteOutlined,
  DownOutlined,
} from "@ant-design/icons";
import {
  Space,
  Modal,
  Typography,
  Button,
  Divider,
  Dropdown,
  Tooltip,
  Empty,
  Row,
  Col,
} from "antd";

import FormDashboard from "../../../components/forms/formDashboard";
import { deleteDashboard } from "../../../redux/slices/dashboardsSlice";
import Item from "../../../components/elements/Item";
const { Title, Text } = Typography;
const { confirm } = Modal;

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const dashboards = useSelector((state) => state.dashboards.dashboards);
  const [dashboard, setDashboard] = useState(null);
  const items = [
    ...dashboards.map((dashboard) => ({
      label: <Link to={"/dashboard/" + dashboard.id}>{dashboard.title}</Link>,
      key: dashboard.id,
    })),
    {
      type: "divider",
    },
    {
      label: <FormDashboard />,
      key: "3",
    },
  ];
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
  const onEditDashboard = () => {
    navigate("/dashboard/" + (dashboard.id || 1) + "/edit");
  };

  useEffect(() => {
    const dashboard = dashboards.find(
      (dashboard) => dashboard.id === parseInt(id || 1)
    );
    if (dashboard) {
      setDashboard(dashboard);
    } else {
      navigate("/404");
    }
  }, [id]);

  return (
    <>
      {dashboard && (
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
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <Title level={5} style={{ marginBottom: 0 }}>
                  {dashboard.title || "Welcome Back!"} <DownOutlined />
                </Title>
              </Dropdown>
              <Text type="secondary">
                {dashboard.description || "Dashboard Overview"}
              </Text>
            </div>
            <Space>
              <Tooltip title="Edit">
                <Button
                  type="default"
                  icon={<EditOutlined />}
                  onClick={onEditDashboard}
                />
              </Tooltip>
              <Tooltip title="Delete">
                <Button
                  onClick={showDeleteConfirm}
                  type="default"
                  icon={<DeleteOutlined />}
                  disabled={dashboard.id === 1}
                />
              </Tooltip>
              <Divider type="vertical" />
              <Button type="default" icon={<FilterOutlined />}>
                Filter by
              </Button>
              <Button type="primary" icon={<FileExcelOutlined />}>
                Export
              </Button>
            </Space>
          </Space>
          {dashboard.widgets.length ? (
            <Row gutter={[30, 30]}>
              {dashboard.widgets.map((widget) => (
                <Item item={widget} key={widget.title} />
              ))}
            </Row>
          ) : (
            <Empty
              style={{
                height: "calc(100vh - 220px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Dashboard;
