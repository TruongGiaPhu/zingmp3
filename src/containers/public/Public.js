import React from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarLeft, SidebarRight } from '../../components';

const Public = () => {
    return (
        <div className="flex w-full h-screen">
            <div className="w-[240px] flex-none ">
                <SidebarLeft />
            </div>
            <div className="flex-auto">
                <Outlet />
            </div>
            <div className="w-[329px] flex-none">
                <SidebarRight />
            </div>
        </div>
    );
};

export default Public;
