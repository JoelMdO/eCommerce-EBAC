import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/homePage/home";
import Register from "../pages/registerPage/register";
import Checkout from "../pages/checkoutPage/checkout";
import Login from "../pages/loginPage/login";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
