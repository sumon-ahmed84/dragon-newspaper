import React from 'react';
import swiming from "../../assets/swimming.png";
import playground from "../../assets/playground.png";
import classroom from "../../assets/class.png"
import bgimg from "../../assets/bg.png"
const Qzone = () => {
    return (
        <div className="">
            <div className="bg-base-200 p-3 mb-8">
            <h1 className="font-bold mb-5">Q-Zone</h1>
            <div className="space-y-5">
                <img src={swiming} alt="" />
                <img src={classroom} alt="" />
                <img src={playground} alt="" />
            </div>
            
        </div>

        <div >
            <img className="w-full" src={bgimg} alt="" />
        </div>
        </div>
    );
};

export default Qzone;