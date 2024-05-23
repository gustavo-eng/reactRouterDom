import * as React from "react";
import * as ReactDOM from "react-dom/client";

// É possível exportar dois components apartir de um único arquivo .jsx 
import Root, {loader as rootLoader} from "./routes/root";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import "./index.css";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";


const router  = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      }
    ], 
  },
  
]);


// 20/05 -> Parei em "Configure o carregador na rota"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);








