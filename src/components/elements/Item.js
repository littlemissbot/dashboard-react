import React, { useState, forwardRef, useEffect } from "react";
import { DeleteOutlined, DragOutlined } from "@ant-design/icons";
import { Col, Card, Statistic, Table, Typography, Button } from "antd";
import { Bar, Line } from "react-chartjs-2";

const { Text } = Typography;
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
    { id, withOpacity, isDragging, style, item, locked, listeners, ...props },
    ref
  ) => {
    const [itemData, setItemData] = useState(item);
    const inlineStyles = {
      opacity: withOpacity ? "0.5" : "1",
      transformOrigin: "50% 50%",

      transform: isDragging ? "scale(1.05)" : "scale(1)",
      ...style,
    };
    const onDeleteItem = () => {
      console.log("Delete item", itemData.id);
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
            <>
              <Button
                type="text"
                style={{
                  position: "absolute",
                  right: 40,
                  top: 5,
                  cursor: isDragging ? "grabbing" : "grab",
                }}
                {...props}
                icon={<DragOutlined />}
              />
              <Button
                type="text"
                danger
                icon={<DeleteOutlined />}
                style={{ position: "absolute", right: 5, top: 5 }}
                onClick={onDeleteItem}
              />
            </>
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
