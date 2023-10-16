import { createSlice } from "@reduxjs/toolkit";
import widgetStatistics from "../../assets/widget-statistics.png";
import widgetChart from "../../assets/widget-chart.png";
import widgetTable from "../../assets/widget-table.png";

export const dashboardsSlice = createSlice({
  name: "dashboards",
  initialState: {
    widgets: [
      {
        image: widgetStatistics,
        title: "Statistic",
        fields: [
          { key: "title", label: "Title", type: "text" },
          { key: "value", label: "Value", type: "number" },
          {
            key: "width",
            label: "Size",
            type: "dropdown",
            values: [
              {
                label: "3x2",
                value: 3,
              },
              {
                label: "6x2",
                value: 6,
              },
              {
                label: "12x2",
                value: 12,
              },
            ],
          },
          {
            key: "type",
            label: "Type",
            type: "dropdown",
            values: [
              {
                label: "Statistic",
                value: "statistic",
              },
            ],
          },
        ],
        id: "1",
      },
      {
        image: widgetChart,
        title: "Chart",
        fields: [
          { key: "title", label: "Title", type: "text" },
          { key: "value", label: "Value", type: "dataset" },
          {
            key: "width",
            label: "Size",
            type: "dropdown",
            values: [
              {
                label: "12x4",
                value: 12,
              },
              {
                label: "18x6",
                value: 18,
              },
            ],
          },
          {
            key: "type",
            label: "Type",
            type: "dropdown",
            values: [
              {
                label: "Bar",
                value: "bar",
              },
              {
                label: "Line",
                value: "line",
              },
            ],
          },
        ],
        id: "2",
      },
      {
        image: widgetTable,
        title: "Table",
        fields: [
          { key: "title", label: "Title", type: "text" },
          { key: "value", label: "Value", type: "dataset" },
          {
            key: "width",
            label: "Size",
            type: "dropdown",
            values: [
              {
                label: "12x4",
                value: 12,
              },
              {
                label: "18x4",
                value: 18,
              },
              {
                label: "24x4",
                value: 24,
              },
            ],
          },
          {
            key: "type",
            label: "Type",
            type: "dropdown",
            values: [
              {
                label: "Table",
                value: "table",
              },
            ],
          },
        ],
        id: "2",
      },
    ],
    sample: {
      bar: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
          {
            label: "2023",
            data: [100, 250, 650, 450, 325],
            backgroundColor: "#722ed1",
          },
          {
            label: "2022",
            data: [500, 750, 1000, 250, 125],
            backgroundColor: "#d3adf7",
          },
        ],
      },
      line: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
          {
            label: "2023",
            data: [100, 250, 650, 450, 325],
            backgroundColor: "#722ed1",
          },
          {
            label: "2022",
            data: [500, 750, 1000, 250, 125],
            backgroundColor: "#d3adf7",
          },
        ],
      },
      table: {
        columns: [
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
          },
          {
            title: "Address",
            dataIndex: "address",
            key: "address",
          },
        ],
        dataSource: [
          {
            key: "1",
            name: "Mike",
            address: "10 Downing Street, NY 21332",
          },
          {
            key: "2",
            name: "John",
            address: "10 Downing Street, NY 21332",
          },
        ],
      },
    },
    dashboards: JSON.parse(localStorage.getItem("dashboards")) || [
      {
        id: 1,
        title: "Default",
        description: "Default dashboard",
        published: true,
        widgets: [
          {
            title: "Total Users",
            value: 1000,
            id: "1",
            width: 6,
            type: "statistic",
            widgetId: "1",
          },
          {
            title: "Total Sales",
            value: 1000,
            id: "2",
            width: 6,
            type: "statistic",
            widgetId: "1",
          },
          {
            title: "Total Users",
            value: 1000,
            id: "3",
            width: 6,
            type: "statistic",
            widgetId: "1",
          },
          {
            title: "Total Sales",
            value: 1000,
            id: "4",
            width: 6,
            type: "statistic",
            widgetId: "1",
          },
          {
            title: "Total Orders",
            value: {
              labels: ["Jan", "Feb", "Mar", "Apr", "May"],
              datasets: [
                {
                  label: "2023",
                  data: [100, 250, 650, 450, 325],
                  backgroundColor: "#722ed1",
                },
                {
                  label: "2022",
                  data: [500, 750, 1000, 250, 125],
                  backgroundColor: "#d3adf7",
                },
              ],
            },
            id: "5",
            width: 12,
            type: "bar",
            widgetId: "2",
          },
          {
            title: "Total Orders",
            value: {
              labels: ["Jan", "Feb", "Mar", "Apr", "May"],
              datasets: [
                {
                  label: "2023",
                  data: [100, 250, 650, 450, 325],
                  backgroundColor: "#722ed1",
                },
                {
                  label: "2022",
                  data: [500, 750, 1000, 250, 125],
                  backgroundColor: "#d3adf7",
                },
              ],
            },
            id: "6",
            width: 12,
            type: "line",
            widgetId: "2",
          },
          {
            title: "Latest Orders",
            value: {
              columns: [
                {
                  title: "Name",
                  dataIndex: "name",
                  key: "name",
                },
                {
                  title: "Address",
                  dataIndex: "address",
                  key: "address",
                },
              ],
              dataSource: [
                {
                  key: "1",
                  name: "Mike",
                  address: "10 Downing Street, NY 21332",
                },
                {
                  key: "2",
                  name: "John",
                  address: "10 Downing Street, NY 21332",
                },
              ],
            },
            id: "7",
            width: 12,
            type: "table",
            widgetId: "3",
          },
        ],
      },
    ],
  },
  reducers: {
    dashboards: (state, action) => {
      state.dashboards = [...state.dashboards, ...action.payload.records];
    },
    addDashboard: (state, action) => {
      state.dashboards = [
        ...state.dashboards,
        { ...action.payload, id: state.dashboards.length + 1, widgets: [] },
      ];
      localStorage.setItem("dashboards", JSON.stringify(state.dashboards));
    },
    editDashboard: (state, action) => {
      const index = state.dashboards.findIndex(
        (dashboard) => dashboard.id === action.payload.id
      );
      if (index !== -1) {
        if (action.payload.type === "widgets") {
          state.dashboards[index].widgets = action.payload.values;
        } else {
          state.dashboards[index] =
            action.payload.type === "settings"
              ? { ...state.dashboards[index], ...action.payload.values }
              : {
                  ...state.dashboards[index],
                  widgets: [
                    ...state.dashboards[index].widgets,
                    {
                      widgetId: action.payload.values.widgetId,
                      id: (
                        state.dashboards[index].widgets.length + 1
                      ).toString(),
                      ...action.payload.values,
                      value:
                        action.payload.values.value === "sample"
                          ? state.sample[action.payload.values.type]
                          : action.payload.values.value,
                    },
                  ],
                };
        }
        localStorage.setItem("dashboards", JSON.stringify(state.dashboards));
      }
    },
    deleteDashboard: (state, action) => {
      const index = state.dashboards.findIndex(
        (dashboard) => dashboard.id === action.payload.id
      );
      if (index !== -1) {
        state.dashboards = [
          ...state.dashboards.slice(0, index),
          ...state.dashboards.slice(index + 1),
        ];
        localStorage.setItem("dashboards", JSON.stringify(state.dashboards));
      }
    },
    editWidget: (state, action) => {
      console.log(action.payload);
      const dashboardIndex = state.dashboards.findIndex(
        (dashboard) => dashboard.id === action.payload.dashboardId
      );
      const widgetIndex = state.dashboards[dashboardIndex].widgets.findIndex(
        (widget) => widget.id === action.payload.id
      );
      if (widgetIndex !== -1) {
        state.dashboards[dashboardIndex].widgets[widgetIndex] = {
          ...state.dashboards[dashboardIndex].widgets[widgetIndex],
          ...action.payload.values,
          value:
            action.payload.values.value === "sample"
              ? state.sample[action.payload.values.type]
              : action.payload.values.value,
        };
        localStorage.setItem("dashboards", JSON.stringify(state.dashboards));
      }
    },
    deleteWidget: (state, action) => {
      const dashboardIndex = state.dashboards.findIndex(
        (dashboard) => dashboard.id === action.payload.dashboardId
      );
      const widgetIndex = state.dashboards[dashboardIndex].widgets.findIndex(
        (widget) => widget.id === action.payload.id
      );
      if (widgetIndex !== -1) {
        state.dashboards[dashboardIndex].widgets.splice(widgetIndex, 1);
        localStorage.setItem("dashboards", JSON.stringify(state.dashboards));
      }
    },
  },
});

export const {
  dashboards,
  addDashboard,
  editDashboard,
  deleteDashboard,
  editWidget,
  deleteWidget,
} = dashboardsSlice.actions;

export default dashboardsSlice.reducer;
