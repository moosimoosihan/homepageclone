import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import AboutBrand from "../routes/AboutBrand";
import OnlineStore from "../routes/OnlineStore";
import BuisinessStore from "../routes/BuisinessStore";
import Community from "../routes/Community";
import Press from "../routes/Press";
import ContactUs from "../routes/ContactUs";
import MyAccount from "../routes/MyAccount";
import Shopingbag from "../routes/Shopingbag";
import Navigation from "../components/Navigation"

const AppRouter = () => {
    return(
        <Router>
            <Navigation />
            <div>
                <Routes>
                    <>
                        <Route path="/" element={<Home />} />
                        <Route path="/AboutBrand" element={<AboutBrand />} />
                        <Route path="/OnlineStore" element={<OnlineStore />} />
                        <Route path="/BuisinessStore" element={<BuisinessStore />} />
                        <Route path="/Community" element={<Community />} />
                        <Route path="/Press" element={<Press />} />
                        <Route path="/ContactUs" element={<ContactUs />} />
                        <Route path="/MyAccount" element={<MyAccount />} />
                        <Route path="/Shopingbag" element={<Shopingbag />} />
                    </>
                </Routes>
            </div>
        </Router>
    );
};
export default AppRouter;