import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App";
import { OtpForm, DragDropCard, DataTables, Connectme } from "./components/index";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Connectme />} />
      <Route path="otp-form" element={<OtpForm />} />
      <Route path="course-list" element={<DragDropCard />} />
      <Route path="batches" element={<DataTables />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
