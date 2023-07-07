import React from 'react';
import icons from '../ultis/icons';
import { Search } from './';

const { HiArrowNarrowLeft, HiArrowNarrowRight } = icons;

const Header = () => {
    return (
        <div className="h-[70px] bg-[#171023] flex items-center px-[60px] w-auto">
            <div className="flex justify-between w-full">
                <div className="flex text-[#ffff] gap-6 w-full items-center">
                    <div className="flex items-center gap-2">
                        <span>
                            <HiArrowNarrowLeft size={24} />
                        </span>
                        <span>
                            <HiArrowNarrowRight size={24} />
                        </span>
                    </div>
                    <div className="w-1/2">
                        <Search />
                    </div>
                </div>
                <div className=" text-[#ffff]">login</div>
            </div>
        </div>
    );
};

export default Header;
