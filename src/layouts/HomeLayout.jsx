import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/homelayouts/LeftAside';

const HomeLayout = () => {
    return (
        <div>
            <header><Header></Header>
                    <section className="w-11/12 mx-auto my-3">
                        <LatestNews></LatestNews>
                    </section>
                    <section className="w-11/12 mx-auto my-3">
                        <Navbar></Navbar>
                    </section>
             </header>
            <main className="w-11/12 mx-auto">
                <aside>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="right_nav"></section>
            </main>
        </div>
    );
};

export default HomeLayout;