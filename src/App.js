import './App.css';
import ProductDetails from './features/Product-List/components/ProductDetails';
import ProductList from './features/Product-List/components/ProductList';
import Login from './features/auth/Components/Login';
import Protected from './features/auth/Components/protected';
import Cart from './features/cart/Cart';
import CartPage from './pages/CartPage';
import Checkout from './pages/CheckoutPage';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ProductDetailPage from './pages/ProductDetailPage';
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
    element:<Protected>
     <Home></Home> 
    </Protected> ,
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
    path: "/cart",
    element: <Protected>
         <CartPage></CartPage>
    </Protected>,
  },
  {
    path: "/checkout",
    element: <Protected>
      <Checkout></Checkout>
    </Protected>,
  },
  // ProductDetails
  {
    path: "/product-detail/:id",
    element: <Protected>
      <ProductDetailPage></ProductDetailPage>
    </Protected>,
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
