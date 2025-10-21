import React from 'react';
import { Link, NavLink } from 'react-router';
import user from "../assets/user.png"
const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-4">
            <div></div>
            <div className="flex gap-4 text-accent items-center">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="flex gap-4 text-accent items-center">
                <img src={user} alt="" />
                <Link to="/auth/login" className="btn btn-primary px-5">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;