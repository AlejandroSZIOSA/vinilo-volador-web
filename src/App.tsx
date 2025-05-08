import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import AdminRootLayout from "./layouts/AdminRoot";
import AddPage from "./pages/admin/Add";
import UserRootPage from "./layouts/UserRoot";
import RemovePage from "./pages/admin/Remove";
import ShowPage from "./pages/admin/Show";
import EditPage from "./pages/admin/Edit";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserRootPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "login", element: <LoginPage /> },
      ],
    },
    {
      path: "admin",
      element: <AdminRootLayout />,
      children: [
        { index: true, element: <AddPage /> },
        {
          /* index: true, */
          path: "remove",
          element: <RemovePage />,
        },
        {
          path: "show",
          element: <ShowPage />,
        },
        {
          path: "edit",
          element: <EditPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
