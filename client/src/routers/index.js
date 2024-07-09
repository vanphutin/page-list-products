import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import ListProducts from "../components/ListProducts";
import ProductDetails from "../components/ProductDetails";
import Header from "../pages/Header";
import Admin from "../components/CRUD/Admin";

const AuthLayout = () => {
  return <Outlet />;
};

export default createBrowserRouter([
  {
    element: <AuthLayout />, // Sửa "elment" thành "element" và đảm bảo JSX được trả về
    children: [
      {
        path: "/", // Chỉ định đường dẫn
        element: <Home />, // Chỉ định phần tử
      },
      {
        element: <Header />,
        children: [
          {
            path: "/products/:id", // Thêm đường dẫn cho chi tiết sản phẩm
            element: <ProductDetails />,
          },
          {
            path: "/admin", // Thêm đường dẫn cho chi tiết sản phẩm
            element: <Admin />,
          },
        ],
      },
    ],
  },
]);
