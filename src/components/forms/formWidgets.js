import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppstoreAddOutlined } from "@ant-design/icons";
import {
  Space,
  Row,
  Col,
  Button,
  Drawer,
  Card,
  Form,
  Input,
  Select,
} from "antd";
import { editDashboard } from "../../redux/slices/dashboardsSlice";

const { Meta } = Card;

const FormWidgets = ({ formData }) => {
  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const [widget, setWidget] = useState(null);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const widgets = useSelector((state) => state.dashboards.widgets);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const showChildrenDrawer = (widget) => {
    setWidget(widget);
    setChildrenDrawer(true);
  };

  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  const onSubmit = (values) => {
    dispatch(editDashboard({ values, id: formData.id }));
    setChildrenDrawer(false);
    setOpen(false);
  };

  return (
    <>
      <Button
        type="default"
        icon={<AppstoreAddOutlined />}
        onClick={showDrawer}
      ></Button>
      <Drawer
        title="Select a widget"
        width={540}
        closable={false}
        onClose={onClose}
        open={open}
      >
        <Row gutter={[30, 30]}>
          {widgets.map((widget) => (
            <Col span={12} key={widget.title}>
              <Card
                hoverable
                cover={
                  <img
                    alt={widget.title}
                    src={widget.image}
                    onClick={() => showChildrenDrawer(widget)}
                  />
                }
              >
                <Meta title={widget.title} />
              </Card>
            </Col>
          ))}
        </Row>
        <Drawer
          title="Configure widget"
          width={360}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
          extra={
            <Space>
              <Button onClick={onChildrenDrawerClose}>Cancel</Button>
              <Button type="primary" onClick={form.submit}>
                Save
              </Button>
            </Space>
          }
        >
          <Form form={form} layout="vertical" requiredMark onFinish={onSubmit}>
            {widget &&
              widget.fields.map((field) => (
                <Form.Item
                  name={field.key}
                  label={field.label}
                  key={field.key}
                  rules={[
                    {
                      required: true,
                      message: "Please enter " + field.key,
                    },
                  ]}
                >
                  {field.type === "text" && <Input />}
                  {field.type === "dropdown" && (
                    <Select options={field.values} />
                  )}
                  {field.type === "number" && <Input type="number" min={0} />}
                  {field.type === "dataset" && (
                    <Select
                      options={[
                        {
                          label: "Sample",
                          value: "sample",
                        },
                      ]}
                    />
                  )}
                </Form.Item>
              ))}
          </Form>
        </Drawer>
      </Drawer>
    </>
  );
};
export default FormWidgets;
