import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense } from "react";
const Navbar = React.lazy(() => import("./Components/_01_Navbar")); // for heavy components
const Colors = React.lazy(() => import("./Components/_02_Colors")); // for heavy components
const Width = React.lazy(() => import("./Components/_04_width")); // for heavy components
const MarginPadding = React.lazy(
  () => import("./Components/_03_MarginPadding")
); // for heavy components
import Loading from "./Components/_00_Loading";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/01navbar",
      element: (
        <Suspense fallback={<Loading />}>
          <Navbar />
        </Suspense>
      ),
    },
    {
      path: "/02colors",
      element: (
        <Suspense fallback={<Loading />}>
          <Colors />
        </Suspense>
      ),
    },

    {
      path: "/03marginPadding",
      element: (
        <Suspense fallback={<Loading />}>
          <MarginPadding />
        </Suspense>
      ),
    },
    {
      path: "/04width",
      element: (
        <Suspense fallback={<Loading />}>
          <Width />
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
