import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/Home";
import { Admin } from "./pages/Admin";
import { Login } from "./pages/Login";
import { Networks } from "./pages/Networks";
import { ErrorPage } from "./pages/error";

import { Private } from './routes/Private'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/admin",
    element: <Private><Admin /></Private>
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/admin/redes",
    element: <Private><Networks /></Private>
  },
  {
    path: "*",
    element: <ErrorPage />
  }
])

export { router };