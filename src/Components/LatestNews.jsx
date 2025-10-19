import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className="flex items-center p-3 gap-5 bg-base-200">
            <p className="text-base-100 bg-secondary px-3 py-2">latest News</p>
            <Marquee pauseOnHover><p className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, similique eveniet! Enim officia nisi laborum sequi corrupti, quis labore officiis?</p></Marquee>
        </div>
    );
};

export default LatestNews;