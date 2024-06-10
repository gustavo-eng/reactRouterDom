import * as React from "react";
import * as ReactDOM from "react-dom/client";

// É possível exportar dois components apartir de um único arquivo .jsx 
import Root from "./routes/root";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import "./index.css";
import ErrorPage from "./error-page";
import Contact  from "./routes/contact";



const router  = createBrowserRouter([

    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "contacts/:contactId",
          element: <Contact />,
        }
      ]
    },
    
]);  


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);









