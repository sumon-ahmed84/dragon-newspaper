import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center items-center w-11/12">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset">
            <h1 className="font-bold text-2xl text-center py-5">Login your account</h1>
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="text-center font-semibold">Dont’t Have An Account ? <Link to="/auth/register" className="text-secondary py-5">Register</Link></p>
          </fieldset>

        </div>
      </div>
    </div>
  );
};

export default Login;
