import React from 'react';
import Logo from '../assets/logo.png';
import { Sidebar } from '../ultis/menu';
import { NavLink } from 'react-router-dom';

const SidebarLeft = () => {
    const activeStyle =
        'py-2 px-[25px] font-semibold flex gap-3 items-center text-[#0F7070]';
    const notActiveStyle =
        'py-2 px-[25px]  font-semibold flex gap-3 items-center text-[#FFFFFF]';
    return (
        <div className="flex flex-col bg-[#423E4D] h-full ">
            <div className="w-full h-[70px] py-[15px] px-[25px] flex justify-start items-center">
                <img src={Logo} alt="logo" className="w-[120px] h-10 " />
            </div>
            <div className="flex flex-col ">
                {Sidebar.map((item, i) => {
                    return (
                        <NavLink
                            to={item.path}
                            key={i}
                            end={item.end}
                            className={({ isActive }) =>
                                isActive ? activeStyle : notActiveStyle
                            }
                        >
                            {item.icon}
                            <span>{item.text}</span>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
};

export default SidebarLeft;
