import React from 'react';
import icons from '../ultis/icons';

const { FiSearch } = icons;

const Search = () => {
    return (
        <div className="flex items-center bg-[#38303F] rounded-full">
            <span className="flex items-center justify-center h-10 px-4">
                <FiSearch size={18} />
            </span>

            <input
                type="text"
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát... "
                className="w-full h-10 py-2 pr-4 bg-transparent outline-none"
            />
        </div>
    );
};

export default Search;
