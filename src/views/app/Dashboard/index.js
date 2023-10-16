import React, { useEffect, useState, useRef } from "react";
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
  Tour,
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
  const [open, setOpen] = useState(false);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const steps = [
    {
      title: "Switch Dashboard",
      description: "Click to switch to another dashboard or create a new one.",
      target: () => ref1.current,
    },
    {
      title: "Edit",
      description: "Click to edit this dashboard.",
      target: () => ref2.current,
    },
    {
      title: "Delete",
      description:
        "Click to delete this dashboard. Default dashboard cannot be deleted.",
      target: () => ref3.current,
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
        dispatch(deleteDashboard({ id: dashboard.id }));
        navigate("/dashboard");
      },
    });
  };

  const onEditDashboard = () => {
    navigate("/dashboard/" + (dashboard.id || 1) + "/edit");
  };

  const onTourFinish = () => {
    setOpen(false);
    localStorage.setItem("tour", "true");
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

  useEffect(() => {
    const dashboard = dashboards.find(
      (dashboard) => dashboard.id === parseInt(id || 1)
    );
    setDashboard(dashboard);
  }, [dashboards]);

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
                <Title level={5} style={{ marginBottom: 0 }} ref={ref1}>
                  {dashboard.title || "Welcome Back!"} <DownOutlined />
                </Title>
              </Dropdown>
              <Text type="secondary">
                {dashboard.description || "Dashboard Overview"}
              </Text>
            </div>
            <Space>
              {localStorage.getItem("tour") ? null : (
                <>
                  <Button type="primary" onClick={() => setOpen(true)}>
                    Begin Tour
                  </Button>
                  <Divider type="vertical" />
                </>
              )}
              <Tooltip title="Edit">
                <Button
                  type="default"
                  icon={<EditOutlined />}
                  onClick={onEditDashboard}
                  ref={ref2}
                />
              </Tooltip>
              <Tooltip title="Delete">
                <Button
                  onClick={showDeleteConfirm}
                  type="default"
                  icon={<DeleteOutlined />}
                  disabled={dashboard.id === 1}
                  ref={ref3}
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
                <Item item={widget} key={widget.id} locked="true" />
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
          <Tour open={open} onClose={onTourFinish} steps={steps} />
        </div>
      )}
    </>
  );
};

export default Dashboard;
