import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-bold mb-5">Find Us on </h1>
      <div className="">
        <div className="join join-vertical w-full">
          <button className="btn join-item bg-base-100 justify-start ">
            <FaFacebookF size={20} color="#3B599C" /> Facebook
          </button>
          <button className="btn join-item bg-base-100 justify-start ">
            <AiFillTwitterCircle size={20} color="#58A7DE" /> Twitter
          </button>
          <button className="btn join-item bg-base-100 justify-start ">
            <FaSquareInstagram size={20} color="#D82D7E" /> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
