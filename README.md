## Objective

Develop a dashboard application that allows users to create and manage multiple dashboard pages. The application should utilize client-side routing to navigate between different dashboards.

### Demo

The application was deployed using Vercel in just 30 seconds. [Click here to view live demo](https://dashboard-react-nine-rho.vercel.app/)

### Features

1. **Dashboard Home**

   - Display a default dashboard page with options to "Add", "Edit", "Switch", and "Delete" dashboard.

2. **Creation**

   - Implement a form to create a new dashboard page with a title, description, and a set of predefined widgets (Statistics, Charts, Tables, etc).

3. **Editor**

   - Use a separate route to edit each landing page.
   - Allow users to add, remove, and modify widgets on the dashboard page.

4. **View Dashboard Page**

   - Implement client-side routes to display the live dashboard pages.

5. **Authentication**

   - Implement a simple login page.
   - Protect the dashboard route, making it accessible only to authenticated users.

---

## Project Framework

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and designed using [Ant Design](https://ant.design/) framework with [ChartJs](https://www.chartjs.org/) components for data visualisation. 

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
