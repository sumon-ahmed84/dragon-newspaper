import React from 'react';
import logo from "../assets/logo.png"
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className="flex justify-center flex-col items-center mt-5">
            <img className="w-[350px]" src={logo} alt="" />
            <p className="mt-2 text-accent">Journalism Without Fear or Favour</p>
            <p className="text-accent font-semibold">{format(new Date(),"EEEE , MMMM MM , yyyy" )}</p>
        </div>
    );
};

export default Header;