import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense } from "react";
const Navbar = React.lazy(() => import("./Components/_01_Navbar")); // for heavy components
const Colors = React.lazy(() => import("./Components/_02_Colors")); // for heavy components
const Width = React.lazy(() => import("./Components/_04_width")); // for heavy components
const Height = React.lazy(() => import("./Components/_05_Height")); // for heavy components
const Size = React.lazy(() => import("./Components/_06_Size")); // for heavy components
const Position = React.lazy(() => import("./Components/_07_Position")); // for heavy components
const Container = React.lazy(() => import("./Components/_08_Container")); // for heavy components
const Background = React.lazy(() => import("./Components/_09_Background")); // for heavy components
const FilterImage = React.lazy(() => import("./Components/_10_FilterImage")); // for heavy components
const MediaQuery = React.lazy(() => import("./Components/_12_MediaQuery")); // for heavy components
const Column = React.lazy(() => import("./Components/_13_Column")); // for heavy components
const Interactivity = React.lazy(
  () => import("./Components/_11_Interactivity")
); // for heavy components
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

    {
      path: "/05height",
      element: (
        <Suspense fallback={<Loading />}>
          <Height />
        </Suspense>
      ),
    },
    {
      path: "/06size",
      element: (
        <Suspense fallback={<Loading />}>
          <Size />
        </Suspense>
      ),
    },

    {
      path: "/07position",
      element: (
        <Suspense fallback={<Loading />}>
          <Position />
        </Suspense>
      ),
    },

    {
      path: "/08container",
      element: (
        <Suspense fallback={<Loading />}>
          <Container />
        </Suspense>
      ),
    },

    {
      path: "/09background",
      element: (
        <Suspense fallback={<Loading />}>
          <Background />
        </Suspense>
      ),
    },
    {
      path: "/10filterimage",
      element: (
        <Suspense fallback={<Loading />}>
          <FilterImage />
        </Suspense>
      ),
    },

    {
      path: "/11-interactivity",
      element: (
        <Suspense fallback={<Loading />}>
          <Interactivity />
        </Suspense>
      ),
    },

    {
      path: "/12-mediaquery",
      element: (
        <Suspense fallback={<Loading />}>
          <MediaQuery />
        </Suspense>
      ),
    },

    {
      path: "/13-column",
      element: (
        <Suspense fallback={<Loading />}>
          <Column />
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
