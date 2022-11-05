import React from "react";
import {Outlet, Link } from "react-router-dom";

const Layout=()=>{
    return(
        <>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                    <li><Link to="/services">services</Link></li>
                </ul>
            </div>
            <Outlet />
        </>
    )
}
export default Layout;