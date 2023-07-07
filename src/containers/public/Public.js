import React from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarLeft, SidebarRight, Player } from '../../components';

const Public = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-auto w-full h-full ">
                <div className="w-[240px] border border-blue-400  flex-none ">
                    <SidebarLeft />
                </div>
                <div className="flex-auto border-blue-400">
                    <Outlet />
                </div>
                <div className="w-[329px] border border-blue-400 flex-none">
                    <SidebarRight />
                </div>
            </div>

            <div className="flex-none h-[90px]">
                <Player />
            </div>
        </div>
    );
};

export default Public;
