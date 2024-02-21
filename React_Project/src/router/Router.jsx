import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../ui/component/pages/Home/Home";
import Header from "../ui/component/Header/Header";
import Footer from "../ui/component/Footer/Footer";
import Error404 from "../ui/component/pages/Error404/Error404";
import { Provider, useSelector } from "react-redux";
import Contact from "../ui/component/pages/Contact/Contact";
import Dashboard from "../ui/component/pages/Admin/Dashboard/Dashboard";
import Users from "../ui/component/pages/Admin/Users/Users";
import Order from "../ui/component/pages/Admin/Order/Order";
import AllProduct from "../ui/component/pages/Admin/AllProduct/AllProduct";
import { store } from "../redux/app/store";
import ShopsProduct from "../ui/component/pages/Shops/ShopsProduct";
import About1 from "../ui/component/About/About1";
import TopSale from "../ui/component/Shoes/TopSale";
import Kid from "../ui/component/pages/GenderItem/Kid";
import MalesItem from "../ui/component/pages/GenderItem/MalesItem";
import Kiditem from "../ui/component/pages/GenderItem/Kiditem";
import WomenItem from "../ui/component/pages/GenderItem/WomenItem";
import Profile from "../ui/component/pages/Profile/Profile";

export default function AppRouter() {
  const meet = useSelector((state) => state.authReducer.user) || { userType: "customer" };

  const [logs, setLogs] = useState(false);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header logs={logs} setLogs={setLogs} />
        <Routes>
          {meet.userType === "admin" ? (
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/order" element={<Order />} />
              <Route path="/admin-product" element={<AllProduct />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<About1 />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shops" element={<ShopsProduct />} />
              <Route path="/sale" element={<TopSale />} />
              <Route path="/male" element={<MalesItem />} />
              <Route path="/female" element={<WomenItem />} />
              <Route path="/kid" element={<Kiditem />} />
            </>
          )}
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}