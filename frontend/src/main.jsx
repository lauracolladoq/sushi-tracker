// index.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
{ /* import HomePage from './pages/HomePage'; */}
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import { Login } from './components/Login';
import { Register } from './components/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage/>,
  },
  {
    path: '/login',
    element: <Login />,
  },  {
    path: '/register',
    element: <Register />,
  }

]);

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
