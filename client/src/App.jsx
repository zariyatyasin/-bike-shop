import { useSelector } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

import { Navbar } from "./Components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Home from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import Products from "./Pages/Products/Products";
import Register from "./Pages/Register/Register";
import CheckOutPage from "./Pages/CheckOutPage/CheckOutPage";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MobileNav from "./Components/MobileMenu/MobileNav";
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from "./AdminDashboard/AdminDashBoard/AdminDashboard";
import AdminUserList from "./AdminDashboard/userList/AdminUserList";
import DashboardSidebar from "./Components/DashboardSidebar/DashboardSidebar";
import AdminProductList from "./AdminDashboard/AdminProductsList/AdminProductList";
import UploadProduct from "./AdminDashboard/AdminProductUpload/UploadProduct";
import Footer from "./Pages/footer/Footer";
import AdminTranList from "./AdminDashboard/AdminDashBoard/AdminTranList";
import Map from "./AdminDashboard/AdminDashBoard/Map";
import { Error } from "./Components/error/Error";

const ToHomePage = ({ children }) => {
  const { currentUser } = useSelector((state) => state.LoginInUser);

  if (currentUser) {
    return <Navigate to={"/"} />;
  }
  return children;
};
const ToLogin = ({ children }) => {
  const { currentUser } = useSelector((state) => state.LoginInUser);

  if (!currentUser) {
    return <Navigate to={"/login"} />;
  }
  return children;
};
const NotFound = () => {
  return <Error />;
};

const AdminAccess = ({ children }) => {
  const { currentUser } = useSelector((state) => state.LoginInUser);

  if (currentUser && !currentUser.isAdmin) {
    return <Navigate to={"/"} />;
  }
  return children;
};
const SidebarLayout = () => {
  const { OpenSidebar } = useSelector((state) => state.GlobalState);
  return (
    <div>
      <DashboardSidebar></DashboardSidebar>
      <div
        className={`${
          OpenSidebar ? "md:ml-64" : "md:ml-0"
        } p-2     md:p-6  mt-16`}
      >
        <Outlet />
      </div>
    </div>
  );
};

const Layout = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar></Navbar>
      <Outlet />
      <div className="md:hidden">
        <MobileNav></MobileNav>
      </div>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },

      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/",
        element: <SingleProduct />,
      },
      {
        path: "/contact",
        element: <Map />,
      },
      {
        path: "/login",
        element: (
          <ToHomePage>
            <Login />,
          </ToHomePage>
        ),
      },
      {
        path: "/register",
        element: (
          <ToHomePage>
            <Register />,
          </ToHomePage>
        ),
      },
      {
        path: "/checkout",

        element: (
          <ToLogin>
            <CheckOutPage />
          </ToLogin>
        ),
      },
      {
        path: "/profile/:id",
        element: (
          <ToLogin>
            <Dashboard />
          </ToLogin>
        ),
      },
    ],
  },
  //Admin
  {
    path: "/",
    element: <SidebarLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: (
          <ToLogin>
            <AdminAccess>
              <AdminDashboard />
            </AdminAccess>
          </ToLogin>
        ),
      },
      {
        path: "/admin/customers",
        element: (
          <ToLogin>
            <AdminAccess>
              <AdminUserList />
            </AdminAccess>
          </ToLogin>
        ),
      },
      {
        path: "/admin/transactions",
        element: (
          <ToLogin>
            <AdminAccess>
              <AdminTranList />
            </AdminAccess>
          </ToLogin>
        ),
      },
      {
        path: "/admin/product",
        element: (
          <ToLogin>
            <AdminAccess>
              <AdminProductList />
            </AdminAccess>
          </ToLogin>
        ),
      },
      {
        path: "/admin/uploadproduct",
        element: (
          <ToLogin>
            <AdminAccess>
              <UploadProduct />
            </AdminAccess>
          </ToLogin>
        ),
      },
      {
        path: "/admin/global",
        element: (
          <ToLogin>
            <AdminAccess>
              <Map />
            </AdminAccess>
          </ToLogin>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
