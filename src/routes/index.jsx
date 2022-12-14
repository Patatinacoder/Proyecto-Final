
  
   import React from "react";
   import { createBrowserRouter, RouterProvider } from "react-router-dom";
   import Root from "../components/Root";
   import ItemListContainer from "../containers/ItemListContainer";
import { ItemDetailContainer } from "../containers/ItemDetailContainer";   
import CartContainer from "../containers/CartContainer";
import Checkout from "../containers/CheckOutContainer";
   const router = createBrowserRouter([
       {
           path: "/",
           element: <Root />,
           errorElement: <h1>No encontrado</h1>,
           children: [
               {
                   path: "/",
                   element: <ItemListContainer />,
               },
               {
                   path: "/category/:categoryId",
                   element: <ItemListContainer />,
               },
               {
                   path: "/detail/:id",
                   element: <ItemDetailContainer />,
               },

               {
                path: "/cart",
                element:<CartContainer/>
               },

               {
                path: "/checkout",
                element: <Checkout/>


               }

           ],
       },
   ]);
   
   const Router = () => {
       return <RouterProvider router={router} />;
   };
   
   export default Router;