import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { EditOutlined, AppstoreAddOutlined } from "@ant-design/icons";
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
import { editDashboard, editWidget } from "../../redux/slices/dashboardsSlice";

const { Meta } = Card;

const FormWidgets = ({ type, formData, dashboardId }) => {
  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const [widget, setWidget] = useState(null);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const widgets = useSelector((state) => state.dashboards.widgets);

  const showDrawer = () => {
    setOpen(true);
    if (type === "edit") {
      const w = widgets.find((widget) => widget.id === formData.widgetId);
      setWidget(w);
      setChildrenDrawer(true);
    }
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
    if (type === "edit") {
      dispatch(
        editWidget({
          values,
          id: formData.id,
          dashboardId: dashboardId,
          widgetId: widget.id,
        })
      );
    } else {
      dispatch(editDashboard({ values, id: formData.id }));
    }
    form.resetFields();
    setChildrenDrawer(false);
    setOpen(false);
  };

  return (
    <>
      <Button
        size={type === "edit" ? "small" : "default"}
        type={type === "edit" ? "text" : "default"}
        icon={type === "edit" ? <EditOutlined /> : <AppstoreAddOutlined />}
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
          <Form
            form={form}
            initialValues={
              type === "edit"
                ? {
                    ...formData,
                    value:
                      typeof formData.value === "object"
                        ? "sample"
                        : formData.value,
                  }
                : {}
            }
            layout="vertical"
            requiredMark
            onFinish={onSubmit}
          >
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
