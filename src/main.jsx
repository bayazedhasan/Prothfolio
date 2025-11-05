import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About"
import Root from "./Layout/Root";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Education from "./Pages/Education/Education";
import Contact from "./Pages/Contact/Contact";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index:true,
      element: <Home></Home>
      },
      {
        path: "/about",
      element: <About></About>
      },
      {
        path: "/contact",
      element: <Contact></Contact>
      },
      {
         path: "/skills",
      element: <Skills></Skills>
      },
      {
         path: "/projects",
      element: <Projects></Projects>
      },
      {
         path: "/education",
      element: <Education></Education>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);