import { createRoot } from "react-dom/client";
import App from "./src/App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./src/pages/Login";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./src/pages/Home"));

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "home",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={process.env.CLIENT_ID}>
    <RouterProvider router={appRoute}>
      <App />
    </RouterProvider>
  </GoogleOAuthProvider>
);
