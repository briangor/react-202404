import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { Provider } from 'react-redux';
// import store from './store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UsersUseEffect from './components/UsersUseEffect';
import UsersReactQuery from './components/UsersReactQuery';
import Store from './features/fakestoreapi/Store';
import Properties from './features/properties/Properties';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users1",
    element: <UsersUseEffect />,
  },
  {
    path: "/users2",
    element: <UsersReactQuery />,
  },
  {
    path: "/store",
    element: <Store />,
  }, {
    path: "/properties",
    element: <Properties />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <App />
    </Provider> */}
    <QueryClientProvider client={new QueryClient()}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
