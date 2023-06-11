import './App.css';
import ProductList from './features/Product-List/ProductList';
import Login from './features/auth/Components/Login';
import Cart from './features/cart/Cart';
import CartPage from './pages/CartPage';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  // only for testing- Page will be added
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
]);


function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      {/* <LoginPage></LoginPage> */}
      {/* <SignupPage></SignupPage> */}
      <RouterProvider router={router} />

        </div>
  );
}

export default App;
