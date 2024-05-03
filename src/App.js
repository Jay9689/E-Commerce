import './App.css';
import CartPage from './pages/CartPage';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage'


import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


const router = createBrowserRouter([
  { //Array of routes
    path: "/",
    element: (<Home></Home>),
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    // only for testing then the code will be added
    path: "/cart",
    element: <CartPage></CartPage>,
  },
]);

function App() {
  return (
    <div className="App">
      {/* <LoginPage></LoginPage> */}
      {/* very Imp RouterProvider use it where you need to do routing */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
