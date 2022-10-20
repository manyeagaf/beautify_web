import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CollectionScreen from "./screens/CollectionScreen";
import Categories from "./components/Categories";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import ReviewScreen from "./screens/ReviewScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import LoginScreen from "./screens/LoginScreen";
import OrderScreen from "./screens/OrderScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ResgisterScreen from "./screens/ResgisterScreen";
import { getUserDetails } from "./actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import CategoryHorizontalScroll from "./components/CategoryHorizontalScroll";
import Brands from "./components/Brands";

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const { userDetails, loading, error } = currentUser;
  // useEffect(() => {
  //   dispatch(getUserDetails);
  // });
  return (
    <div>
      <Router>
        <Header />
        <Categories />
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="c/:slug" element={<CollectionScreen />} exact />
          <Route path="/:slug/p/:id" element={<ProductScreen />} exact />
          <Route path="/cart" element={<CartScreen />} exact />
          <Route path="/cart/:id" element={<CartScreen />} exact />
          <Route path="/checkout/" element={<CheckoutScreen />} exact />
          <Route path="/shipping" element={<ShippingScreen />} exact />
          <Route path="/payment" element={<PaymentScreen />} exact />
          <Route path="/review" element={<ReviewScreen />} exact />
          <Route path="/place-order" element={<PlaceOrderScreen />} exact />
          <Route path="/login" element={<LoginScreen />} exact />
          <Route path="/order/:id" element={<OrderScreen />} exact />
          <Route path="/profile/" element={<ProfileScreen />} exact />
          <Route path="/register/" element={<ResgisterScreen />} exact />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
export default App;
