
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./Components";
import AuthLayout from "./Components/AuthLayout/AuthLayout";
import { Dashboard, Login, SignUp } from "./Pages";
import teamController from "./DataProvider/Controllers/TeamController";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setEmployee } from "./Store/Slices/teamSlice";
import productsController from './DataProvider/Controllers/ProductsController';
import { setProduct } from './Store/Slices/productSlice';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <AuthLayout authentication={false}>
          <Dashboard />
        </AuthLayout>
      },
      {
        path: '/orders',
        element: <AuthLayout authentication={false}>
          <h1>Orders</h1>
        </AuthLayout>
      },
      {
        path: '/billing',
        element: <AuthLayout authentication={false}>
          <h1>Billing</h1>
        </AuthLayout>
      },
      {
        path: '/teams',
        element: <AuthLayout authentication={false}>
          <h1>My Team</h1>
        </AuthLayout>
      },
      {
        path: '/inventory',
        element: <AuthLayout authentication={false}>
          <h1>Inventory</h1>
        </AuthLayout>
      },
      {
        path: '/reports',
        element: <AuthLayout authentication={false}>
          <h1>Reports</h1>
        </AuthLayout>
      },
      {
        path: '/settings',
        element: <AuthLayout authentication={false}>
          <h1>Settings</h1>
        </AuthLayout>
      },
      {
        path: '/help',
        element: <AuthLayout authentication={false}>
          <h1>Help</h1>
        </AuthLayout>
      },
      {
        path: '/logout',
        element: <AuthLayout authentication={false}>
          <h1>Logout</h1>
        </AuthLayout>
      },
    ]
  },
  {
    path: '/login',
    element: <AuthLayout authentication={false}>
      <Login />
    </AuthLayout>
  },
  {
    path: '/signup',
    element: <AuthLayout authentication={false}>
      <SignUp />
    </AuthLayout>
  }
]);
export default function App() {
  enum Theme {
    Dark = "dark",
    Light = "light"
  }
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(Theme.Light);
  const handleTheme = async () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme(Theme.Dark);
    } else {
      setTheme(Theme.Light);
    }
  }
  const fetchInitialData = async () => {
    try {
      const teams: any = await teamController.getTeams();
      const products: any = await productsController.getProducts();
      teams && dispatch(setEmployee(teams));
      products && dispatch(setProduct(products));
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchInitialData();
    handleTheme();
  }, []);


  return (
    <FluentProvider theme={theme === Theme.Light ? webLightTheme : webLightTheme}>
      {!loading ? (<RouterProvider router={router} />) : <>Loading...</>}
    </FluentProvider>
  );
}