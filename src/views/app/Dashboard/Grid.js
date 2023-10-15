import React from "react";
import { Row } from "antd";

const Grid = ({ children, columns }) => {
  return <Row gutter={[16, 16]}>{children}</Row>;
};

export default Grid;
