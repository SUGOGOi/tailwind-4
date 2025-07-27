import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense } from "react";
const Navbar = React.lazy(() => import("../src/Components/Navbar")); // fro heavy components
import Loading from "./Components/Loading";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/navbar",
      element: (
        <Suspense fallback={<Loading />}>
          <Navbar />
        </Suspense>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
