import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root, { loader as rootLoader,action as rootAction, } from "./routes/root"; // Importing the Root component and its loader function

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css"; // Importing the main CSS file
import ErrorPage from "./error-page"; // Importing the ErrorPage component
import Contact from "./contact"; // Importing the Contact component

// Creating a router instance with route definitions
const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <Root />, // Component to render at the root path
    errorElement: <ErrorPage />, // Component to render in case of an error
    loader: rootLoader, // Loader function to fetch data for the Root component
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId", // Child route with dynamic parameter
        element: <Contact />, // Component to render at the child route
      },
    ],
  },
]);

// Rendering the React application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* Providing the router instance to the application */}
  </React.StrictMode>
);
