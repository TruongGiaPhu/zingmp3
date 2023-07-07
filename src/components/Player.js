import React from 'react';
import { useSelector } from 'react-redux';

const Player = () => {
    const { curSongId } = useSelector(item => item.music);
    console.log('🚀 ~ file: Player.js:6 ~ Player ~ curSongId:', curSongId);

    return (
        <div className="bg-[#171023] h-full px-5 text-white flex">
            <div className="w-[30%]  flex-auto">details song </div>
            <div className="w-[40%] flex-auto">main song</div>
            <div className="w-[30%] flex-auto">volum</div>
        </div>
    );
};

export default Player;
