import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/homelayouts/LeftAside';
import RighatAside from '../Components/homelayouts/RighatAside';

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
            <main className="w-11/12 mx-auto grid grid-cols-12">
                <aside className="grid col-span-3">
                    <LeftAside></LeftAside>
                </aside>
                <section className="main grid col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className="grid col-span-3">
                    <RighatAside></RighatAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;