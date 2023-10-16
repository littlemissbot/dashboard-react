import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { PlusOutlined, SettingOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Form, Input, Row, Select, Space } from "antd";
import { addDashboard } from "../../redux/slices/dashboardsSlice";

const { Option } = Select;

const FormDashboard = ({ type, formData }) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onSubmit = (values) => {
    console.log(values);
    if (type === "edit") {
      // dispatch(editDashboard(values));
    } else {
      dispatch(addDashboard(values));
    }
    setOpen(false);
  };

  return (
    <>
      <Button
        type={type === "edit" ? "default" : "primary"}
        onClick={showDrawer}
        icon={type === "edit" ? <SettingOutlined /> : <PlusOutlined />}
      >
        {type === "edit" ? "Settings" : "New dashboard"}
      </Button>
      <Drawer
        title={type === "edit" ? "Settings" : "Create a new dashboard"}
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={form.submit}>
              {type === "edit" ? "Save" : "Create"}
            </Button>
          </Space>
        }
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{ ...formData }}
          requiredMark
          onFinish={onSubmit}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="title"
                label="Title"
                rules={[
                  {
                    required: true,
                    message: "Please enter title",
                  },
                ]}
              >
                <Input placeholder="Please enter dashboard title" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: "Please enter description",
                  },
                ]}
              >
                <Input placeholder="Please enter dashboard description" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="owner"
                label="Owner"
                rules={[
                  {
                    required: true,
                    message: "Please select an owner",
                  },
                ]}
              >
                <Select placeholder="Please select an owner">
                  <Option value="samita">Samita Mondal</Option>
                  <Option value="sushim">Sushim Mukul</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="type"
                label="Type"
                rules={[
                  {
                    required: true,
                    message: "Please choose the type",
                  },
                ]}
              >
                <Select placeholder="Please choose the type">
                  <Option value="private">Private</Option>
                  <Option value="public">Public</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default FormDashboard;
