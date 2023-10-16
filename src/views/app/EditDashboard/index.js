import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { SaveOutlined } from "@ant-design/icons";
import { Space, Typography, Button, Divider, Empty } from "antd";

import DragNDrop from "../../../components/elements/DndContext";
import FormDashboard from "../../../components/forms/formDashboard";
import FormWidgets from "../../../components/forms/formWidgets";
const { Title, Text } = Typography;

const EditDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const dashboards = useSelector((state) => state.dashboards.dashboards);
  const [dashboard, setDashboard] = useState(null);

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
    console.log(dashboard);
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
              <Title level={5} style={{ marginBottom: 0 }}>
                {dashboard.title || "Welcome Back!"}
              </Title>
              <Text type="secondary">
                {dashboard.description || "Dashboard Overview"}
              </Text>
            </div>
            <Space>
              <FormDashboard type="edit" formData={dashboard} />
              <FormWidgets formData={dashboard} />
              <Divider type="vertical" />
              <Button
                type="default"
                onClick={() => navigate("/dashboard/" + dashboard.id)}
              >
                Cancel
              </Button>
              <Button type="primary" icon={<SaveOutlined />}>
                Save Dashboard
              </Button>
            </Space>
          </Space>
          {dashboard.widgets.length ? (
            <DragNDrop widgets={dashboard.widgets} key={dashboard.widgets} />
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

export default EditDashboard;
