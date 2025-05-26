import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import AdminRootLayout from "./layouts/AdminRoot";
import AddPage from "./pages/admin/Add";
import UserRootLayout from "./layouts/UserRoot";
import RemovePage from "./pages/admin/Remove";
import ShowPage from "./pages/admin/Show";
import EditPage from "./pages/admin/Edit";
import EventPage from "./pages/admin/Event";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserRootLayout />,
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
        {
          path: "event",
          element: <EventPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
