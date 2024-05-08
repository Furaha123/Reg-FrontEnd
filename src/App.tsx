import Password from "./components/settings/settingparts/changePassword";

import ProfileSetting from "./components/settings/settingparts/ProfileSetting";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/home";
import AdminLayout from "./Layout/AdminLayout";
import Device_config from "./Pages/Device_config";

import CropMgt from "./Pages/CropMgt";

import SettingLayout from "./components/settings/settingLayout";
import Data from "./components/reporting/DataTable";
import HelpingData from "./components/helpcenter/HelpingData";

import Prediction from "./components/prediction";
import Subscription from "./components/Subscription";
import Tablesub from "./components/Tablesub";

import DashHomePage from "./Pages/DashHomePage";
import FarmAnalyst from "./Pages/FarmAnalyst";
import SignUp from "./Pages/SignUp";

export default function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "device_config",
          element: <Device_config />,
        },
        {
          path: "prediction",
          element: <Prediction />,
        },

        {
          path: "Subscription",
          element: <Subscription />,
        },
        {
          path: "tablesub",
          element: <Tablesub />,
        },

        {
          path: "crop",
          element: <CropMgt />,
        },
        {
          path: "dashboard",
          element: <DashHomePage />,
        },

        { path: "home", element: <Home /> },
        { path: "farm", element: <FarmAnalyst /> },

        {
          path: "settings",
          element: <SettingLayout />,
          children: [
            { path: "profile", element: <ProfileSetting /> },
            { path: "ProfileSetting", element: <ProfileSetting /> },
            { path: "changePassword", element: <Password /> },
          ],
        },
        { path: "Reporting", element: <Data /> },
        { path: "helping", element: <HelpingData /> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
