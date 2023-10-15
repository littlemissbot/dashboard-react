import React, { forwardRef } from "react";
import { Col, Card, Statistic, Table } from "antd";
import { Bar, Line } from "react-chartjs-2";

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
  ({ id, withOpacity, isDragging, style, item, listeners, ...props }, ref) => {
    const inlineStyles = {
      opacity: withOpacity ? "0.5" : "1",
      transformOrigin: "50% 50%",
      cursor: isDragging ? "grabbing" : "grab",
      transform: isDragging ? "scale(1.05)" : "scale(1)",
      ...style,
    };

    return (
      <Col span={item.width} ref={ref} style={inlineStyles} {...props}>
        <Card>
          {item.type === "statistic" && (
            <Statistic title={item.title} value={item.value} />
          )}
          {item.type === "table" && (
            <Table
              dataSource={item.value.dataSource}
              columns={item.value.columns}
            />
          )}
          {item.type === "bar" && (
            <Bar
              options={{
                ...options,
                plugins: {
                  ...options.plugins,
                  title: { ...options.plugins.title, text: item.title },
                },
              }}
              data={item.value}
            />
          )}
          {item.type === "line" && (
            <Line
              options={{
                ...options,
                plugins: {
                  ...options.plugins,
                  title: { ...options.plugins.title, text: item.title },
                },
              }}
              data={item.value}
            />
          )}
        </Card>
      </Col>
    );
  }
);

export default Item;
