import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider as ReduxProvider } from "react-redux";
import store from './Store/store.ts';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Login, SignUp } from './Pages/index.ts';
import { Protected as AuthLayout } from './Components/index.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <AuthLayout authentication={false}>
          <Login />
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
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <ReduxProvider store={store}>
      <FluentProvider theme={webLightTheme}>
        <RouterProvider router={router} />
      </FluentProvider>
    </ReduxProvider>
  </React.StrictMode>,
)
