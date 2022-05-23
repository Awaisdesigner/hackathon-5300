import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Landing from "../auth/landing/Landing";
import Login from "../auth/login/Login";
import SignUp from "../auth/signup/SignUp"

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Service from "../pages/service/Service"
import NavBar from '../navBar/NavBar';
import PrivateRoute from './PrivateRounting';
import PublicRoute from './PublicRounting';
import { useSelector } from "react-redux";
import LogOut from '../auth/logout/LogOut';


function Rounting() {
    const isLoginUser = useSelector((state) => state.AuthReducer.isLoginUser);
    return (
        <BrowserRouter>
            <NavBar />


            <Routes>
                <Route
                    path="/"
                    element={
                        <PrivateRoute isLoginUser={isLoginUser}>
                            <Landing />


                        </PrivateRoute>

                    }
                />
                <Route
                    path="/logout"
                    element={
                        <PrivateRoute isLoginUser={isLoginUser}>
                            <LogOut />


                        </PrivateRoute>

                    }
                />

                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/service" element={<Service />} />

                <Route path="/login" element={<PublicRoute isLoginUser={isLoginUser}><Login />
                </PublicRoute>} />
            </Routes>


        </BrowserRouter>
    );
}

export default Rounting;
