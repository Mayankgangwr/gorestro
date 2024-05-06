import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider as ReduxProvider } from "react-redux";
import store from './Store/store.ts';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <ReduxProvider store={store}>
      <FluentProvider theme={webLightTheme}>
        <App />
      </FluentProvider>
    </ReduxProvider>
  </React.StrictMode>,
)
