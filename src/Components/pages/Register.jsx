import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="flex justify-center items-center w-11/12">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset">
            
            <h1 className="font-bold text-2xl text-center py-5">Register your account</h1>
            <label className="label">Your Name</label>
            <input type="text" className="input" placeholder="Enter Your Name" />
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Enter Your Photo URL" />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div className='p-2'>
                
              <span className="font-semibold"><input type="checkbox" /> Accept Term & Conditions</span>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
            <p className="text-center font-semibold py-5">Already Have An Account ? <Link to="/auth/login" className="text-secondary">Login</Link></p>
          </fieldset>

        </div>
      </div>
    </div>
    );
};

export default Register;