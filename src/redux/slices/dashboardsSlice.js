import { createSlice } from "@reduxjs/toolkit";

export const dashboardsSlice = createSlice({
  name: "dashboards",
  initialState: {
    widgets: [
      {
        title: "Statistic",
        fields: [
          { key: "title", type: "text" },
          { key: "value", type: "number" },
          { key: "width", type: "dropdown", values: [3, 6] },
          { key: "type", type: "text", values: ["statistic"] },
        ],
        id: "1",
      },
      {
        title: "Chart",
        fields: [
          { key: "title", type: "text" },
          { key: "value", type: "dataset" },
          { key: "width", type: "dropdown", values: [6, 12] },
          { key: "type", type: "text", values: ["bar", "line"] },
        ],
        id: "2",
      },
      {
        title: "Table",
        fields: [
          { key: "title", type: "text" },
          { key: "value", type: "dataset" },
          { key: "width", type: "dropdown", values: [6, 12, 18, 24] },
          { key: "type", type: "text", values: ["table"] },
        ],
        id: "2",
      },
    ],
    dashboards: [
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
          },
          {
            title: "Total Sales",
            value: 1000,
            id: "2",
            width: 6,
            type: "statistic",
          },
          {
            title: "Total Users",
            value: 1000,
            id: "3",
            width: 6,
            type: "statistic",
          },
          {
            title: "Total Sales",
            value: 1000,
            id: "4",
            width: 6,
            type: "statistic",
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
          },
          {
            title: "Total Orders",
            value: {
              dataSource: [
                {
                  key: "1",
                  name: "Mike",
                  age: 32,
                  address: "10 Downing Street",
                },
                {
                  key: "2",
                  name: "John",
                  age: 42,
                  address: "10 Downing Street",
                },
              ],
              columns: [
                {
                  title: "Name",
                  dataIndex: "name",
                  key: "name",
                },
                {
                  title: "Age",
                  dataIndex: "age",
                  key: "age",
                },
                {
                  title: "Address",
                  dataIndex: "address",
                  key: "address",
                },
              ],
            },
            id: "9",
            width: 18,
            type: "table",
          },
        ],
      },
    ],
    dashboard: {
      id: 1,
      title: "Default",
      description: "Default dashboard",
      widgets: [
        {
          title: "Total Users",
          value: 1000,
          id: "1",
          width: 6,
          type: "statistic",
        },
        {
          title: "Total Sales",
          value: 1000,
          id: "2",
          width: 6,
          type: "statistic",
        },
        {
          title: "Total Users",
          value: 1000,
          id: "3",
          width: 6,
          type: "statistic",
        },
        {
          title: "Total Sales",
          value: 1000,
          id: "4",
          width: 6,
          type: "statistic",
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
        },
        {
          title: "Total Orders",
          value: {
            dataSource: [
              {
                key: "1",
                name: "Mike",
                age: 32,
                address: "10 Downing Street",
              },
              {
                key: "2",
                name: "John",
                age: 42,
                address: "10 Downing Street",
              },
            ],
            columns: [
              {
                title: "Name",
                dataIndex: "name",
                key: "name",
              },
              {
                title: "Age",
                dataIndex: "age",
                key: "age",
              },
              {
                title: "Address",
                dataIndex: "address",
                key: "address",
              },
            ],
          },
          id: "9",
          width: 18,
          type: "table",
        },
      ],
    },
  },
  reducers: {
    dashboards: (state, action) => {
      state.dashboards = [...state.dashboards, ...action.payload.records];
    },
    addDashboard: (state, action) => {
      console.log(action);
      state.dashboards = [
        ...state.dashboards,
        { ...action.payload, id: state.dashboards.length + 1, widgets: [] },
      ];
    },
    editDashboard: (state, action) => {
      const index = state.dashboards.findIndex(
        (dashboard) => dashboard.id === action.payload.id
      );
      if (index !== -1) {
        state.dashboards[index] = action.payload;
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
      }
    },
  },
});

export const { dashboards, addDashboard, deleteDashboard } =
  dashboardsSlice.actions;

export default dashboardsSlice.reducer;
