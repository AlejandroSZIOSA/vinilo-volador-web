import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/admin/Login";
import OrganizePage from "./pages/admin/Organize";
import AdminRootLayout from "./layouts/AdminRoot";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      index: true,
      element: <HomePage />,
    },
    {
      path: "admin",
      element: <AdminRootLayout />,
      children: [
        { index: true, element: <LoginPage /> },
        {
          /* index: true, */
          path: "organize",
          element: <OrganizePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
