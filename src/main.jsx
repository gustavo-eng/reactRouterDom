import * as React from "react";
import * as ReactDOM from "react-dom/client";

// É possível exportar dois components apartir de um único arquivo .jsx 
import Root, {
  loader as rootLoader,
  action as rootAction,

} from "./routes/root";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import EditContact, {action as editAction} from "./routes/edit";
import "./index.css";
import ErrorPage from "./error-page";
import Contact, { loader as contactLoader } from "./routes/contact";
import { action as destroyAction } from "./routes/destroy";
import Index from "./routes/index";


const router  = createBrowserRouter([

    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      loader: rootLoader,
      action: rootAction,
      children: [
        
        { index: true, element: <Index />},
        {
          path: "contacts/:contactId",
          element: <Contact />,
          loader: contactLoader,
        },{
          path: "contacts/:contactId/edit",
          element: <EditContact />,
          loader: contactLoader,
          action: editAction,
        },
        {
          path: "contacts/:contactId/destroy",
          action:  destroyAction, 
          errorElement: <div>Oops! There was an error in destroy action </div>        
        }
      ]
    },

]);  


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
