import React from "react";
import { Row } from "antd";

const Grid = ({ children, columns }) => {
  return <Row gutter={[30, 30]}>{children}</Row>;
};

export default Grid;
