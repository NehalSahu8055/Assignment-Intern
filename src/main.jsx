import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/Main.jsx";
import Response from "./components/response/Response.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./layout/RootLayout.jsx";
import { quizData } from "./data/quizData";

let data = quizData;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<App data={data} />} />
      <Route path="/response" element={<Response data={data} />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
