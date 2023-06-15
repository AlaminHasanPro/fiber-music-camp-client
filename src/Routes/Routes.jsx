import { createBrowserRouter } from "react-router-dom";
import ManageClass from "../Dashboard/Admin/ManageClass";
import ManageUser from "../Dashboard/Admin/ManageUser";
import Dashboard from "../Layout/Dashboard";
import Root from "../Layout/Root";
import Classes from "../Pages/Classes/Classes";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instractors/Instructors";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AdminOnly from "../Private/AdminOnly";
import PrivateRouter from "../Private/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <Dashboard />
      </PrivateRouter>
    ),
    // errorElement: <Error />,
    children: [
      // {
      //   path: "/dashboard/add-class",
      //   element: (
      //     <InstructorOnly>
      //       <AddClass />
      //     </InstructorOnly>
      //   ),
      // },
      // {
      //   path: "/dashboard/my-class",
      //   element: (
      //     <InstructorOnly>
      //       <MyClass />
      //     </InstructorOnly>
      //   ),
      // },
      // {
      //   path: "/dashboard/:id/edit",
      //   element: (
      //     <InstructorOnly>
      //       <Edit />
      //     </InstructorOnly>
      //   ),
      // },
      {
        path: "/dashboard/manage-class",
        element: (
          <AdminOnly>
            <ManageClass />
          </AdminOnly>
        ),
      },
      {
        path: "/dashboard/manage-users",
        element: (
          <AdminOnly>
            <ManageUser />
          </AdminOnly>
        ),
      },
      // {
      //   path: "/dashboard/my-enroll-class",
      //   element: <MyEnrollClass />,
      // },
      // {
      //   path: "/dashboard/my-select-class",
      //   element: <MySelectClass />,
      // },
      // {
      //   path: "/dashboard/payment",
      //   element: <Payment />,
      // },
      // {
      //   path: "/dashboard/payment-history",
      //   element: <PaymentHistory />,
      // },
    ],
  },
]);

export default router;
