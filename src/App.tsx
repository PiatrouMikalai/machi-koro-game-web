import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './containers/Main';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import LoginPage from './containers/LoginPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
    },
    {
      path: '/login',
      element: (
        <LoginPage>
          <LogIn />
        </LoginPage>
      ),
    },
    {
      path: '/signup',
      element: (
        <LoginPage>
          <SignUp />
        </LoginPage>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
