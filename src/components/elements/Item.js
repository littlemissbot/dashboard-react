import React, { useState, forwardRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  DeleteOutlined,
  DragOutlined,
  EditOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import {
  Space,
  Col,
  Card,
  Statistic,
  Table,
  Typography,
  Button,
  Modal,
} from "antd";
import { Bar, Line } from "react-chartjs-2";

import FormWidgets from "../forms/formWidgets";
import { deleteWidget } from "../../redux/slices/dashboardsSlice";
const { Text } = Typography;
const { confirm } = Modal;
const options = {
  responsive: true,
  aspectRatio: 2,
  plugins: {
    legend: {
      position: "top",
      align: "end",
      labels: {
        boxWidth: 12,
        useBorderRadius: true,
        borderRadius: 6,
        font: {
          color: "rgba(0, 0, 0, 0.45)",
          family: "Onest",
          weight: 300,
        },
      },
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
      align: "start",
      font: {
        color: "rgba(0, 0, 0, 0.45)",
        family: "Onest",
        size: 14,
        weight: 300,
      },
    },
    tooltip: {
      titleFont: {
        color: "rgba(0, 0, 0, 0.45)",
        family: "Onest",
      },
      bodyFont: {
        color: "rgba(0, 0, 0, 0.45)",
        family: "Onest",
      },
    },
  },
  elements: {
    bar: {
      borderRadius: 4,
    },
  },
};

const Item = forwardRef(
  (
    {
      id,
      withOpacity,
      isDragging,
      style,
      item,
      dashboardId,
      locked,
      listeners,
      ...props
    },
    ref
  ) => {
    const [itemData, setItemData] = useState(item);
    const inlineStyles = {
      opacity: withOpacity ? "0.5" : "1",
      transformOrigin: "50% 50%",

      transform: isDragging ? "scale(1.05)" : "scale(1)",
      ...style,
    };
    const dispatch = useDispatch();

    const onDeleteItem = () => {
      confirm({
        title: "Are you sure delete this dashboard?",
        icon: <ExclamationCircleFilled />,
        content:
          "This dashboard will be deleted permanently and cannot be recovered.",
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        onOk() {
          console.log(dashboardId);
          dispatch(deleteWidget({ id: item.id, dashboardId }));
        },
      });
    };

    useEffect(() => {
      setItemData(item);
    }, [item]);

    return (
      <Col
        span={itemData.width}
        ref={ref}
        style={locked ? null : inlineStyles}
        key={itemData.id}
      >
        <Card>
          {!locked && (
            <Space style={{ position: "absolute", right: 5, top: 5 }}>
              <Button
                size="small"
                type="text"
                style={{
                  cursor: isDragging ? "grabbing" : "grab",
                }}
                {...props}
                icon={<DragOutlined />}
              />
              <FormWidgets
                type="edit"
                formData={itemData}
                dashboardId={dashboardId}
              />
              <Button
                size="small"
                type="text"
                danger
                icon={<DeleteOutlined />}
                onClick={onDeleteItem}
              />
            </Space>
          )}
          {itemData.type === "statistic" && (
            <Statistic title={itemData.title} value={itemData.value} />
          )}
          {itemData.type === "table" && (
            <Table
              dataSource={itemData.value.dataSource}
              columns={itemData.value.columns}
              pagination={false}
              title={() => <Text type="secondary">{itemData.title}</Text>}
            />
          )}
          {itemData.type === "bar" && (
            <Bar
              options={{
                ...options,
                plugins: {
                  ...options.plugins,
                  title: { ...options.plugins.title, text: itemData.title },
                },
              }}
              data={itemData.value}
            />
          )}
          {itemData.type === "line" && (
            <Line
              options={{
                ...options,
                plugins: {
                  ...options.plugins,
                  title: { ...options.plugins.title, text: itemData.title },
                },
              }}
              data={itemData.value}
            />
          )}
        </Card>
      </Col>
    );
  }
);

export default Item;
