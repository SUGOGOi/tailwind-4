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
const Flex = React.lazy(() => import("./Components/_14_Flex")); // for heavy components
const Grid = React.lazy(() => import("./Components/_15_Grid")); // for heavy components
const Animation = React.lazy(() => import("./Components/_17_Animation")); // for heavy components
const Breakpoint = React.lazy(() => import("./Components/_18_Breakpoint")); // for heavy components
const Home = React.lazy(() => import("./Components/_000_Home")); // for heavy components
const DrakModeOS = React.lazy(() => import("./Components/_20_DrakModeOS")); // for heavy components
const DarkModeManual = React.lazy(
  () => import("./Components/_21_DarkModeManual")
); // for heavy components
const CustomPadding = React.lazy(
  () => import("./Components/_19_CustomPadding")
); // for heavy components
const TransitionTransform = React.lazy(
  () => import("./Components/_16_TransitionTransform")
); // for heavy components
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
      path: "/",
      element: (
        <Suspense fallback={<Loading />}>
          <Home />
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

    {
      path: "/14-flex",
      element: (
        <Suspense fallback={<Loading />}>
          <Flex />
        </Suspense>
      ),
    },

    {
      path: "/15-grid",
      element: (
        <Suspense fallback={<Loading />}>
          <Grid />
        </Suspense>
      ),
    },

    {
      path: "/16-transition-transform",
      element: (
        <Suspense fallback={<Loading />}>
          <TransitionTransform />
        </Suspense>
      ),
    },

    {
      path: "/17-animation",
      element: (
        <Suspense fallback={<Loading />}>
          <Animation />
        </Suspense>
      ),
    },

    {
      path: "/18-breakpoint",
      element: (
        <Suspense fallback={<Loading />}>
          <Breakpoint />
        </Suspense>
      ),
    },

    {
      path: "/19-custom-padding",
      element: (
        <Suspense fallback={<Loading />}>
          <CustomPadding />
        </Suspense>
      ),
    },

    {
      path: "/20-darkmode-from-os",
      element: (
        <Suspense fallback={<Loading />}>
          <DrakModeOS />
        </Suspense>
      ),
    },

    {
      path: "/20-darkmode-manual",
      element: (
        <Suspense fallback={<Loading />}>
          <DarkModeManual />
        </Suspense>
      ),
    },
  ]);
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
