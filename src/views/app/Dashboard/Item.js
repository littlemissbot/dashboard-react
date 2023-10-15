import React, { forwardRef } from "react";
import { Col, Card, Statistic } from "antd";

const Item = forwardRef(
  ({ id, withOpacity, isDragging, style, item, ...props }, ref) => {
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
          <Statistic title={item.title} value={item.value} />
        </Card>
      </Col>
    );
  }
);

export default Item;
