import React from 'react';
import Catagory from '../Catagory';
import { Suspense } from 'react';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>

           <Catagory></Catagory>
            </Suspense>
        </div>
    );
};

export default LeftAside;