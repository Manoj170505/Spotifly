import React from 'react';
import { useContext } from 'react';
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaForwardStep } from "react-icons/fa6";
import { FaBackwardStep } from "react-icons/fa6";
import { FaVolumeHigh } from "react-icons/fa6";
import { FaVolumeXmark } from "react-icons/fa6";
import { FaShuffle } from "react-icons/fa6";
import { RiOrderPlayFill } from "react-icons/ri";
import { FaRepeat } from "react-icons/fa6";
import { BsFilePlay } from "react-icons/bs";
import { TbMicrophone2 } from "react-icons/tb";
import { MdOutlineQueueMusic } from "react-icons/md";
import { LuMonitorSpeaker } from "react-icons/lu";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { PiScreencast } from "react-icons/pi";
import { AiOutlineFullscreen } from "react-icons/ai";
import { PlayerContext } from './PlayerContext'; // Adjust path if needed

export const Player = () => {
    const {
        seekBar,
        seekBG,
        playStatus,
        shuffle,
        shuffled,
        notShuffled,
        play,
        pause,
        next,
        previous,
        loop,
        track,
        time,
        handleSeek
    } = useContext(PlayerContext);

    const [isMuted, setIsMuted] = React.useState(false);
    const toggleMute = () => setIsMuted(!isMuted);

    const progressPercent = time.totalTime.minutes > 0 
        ? ((time.currentTime.minutes * 60 + time.currentTime.seconds) / (time.totalTime.minutes * 60 + time.totalTime.seconds)) * 100 
        : 0;

    const volumePercent = 75;

    if (!track) {
        return <div className='w-full h-20 bg-[#181818] absolute bottom-0 left-0 flex items-center justify-center text-white'>Loading track...</div>;
    }

    return (
        <div className='w-full h-20 bg-[#181818] absolute bottom-0 left-0 flex items-center justify-between px-4'>
            <div className='flex items-center gap-4'>
                <img 
                    className='rounded-md w-16 h-16' 
                    src={track.image} 
                    alt="Album Cover" 
                />
                <div className='flex flex-col hidden md:block'>
                    <p className='text-white'><b>{track.name}</b></p>
                    <p className='text-sm text-[#b3b3b3]'>{track.album}</p>
                </div>
            </div>

            {/* Controls */}
            <div className="text-white flex flex-col items-center gap-3">
                <div className='flex items-center gap-4'>
                    {shuffle ? (
                        <button className='hover:text-[#16a349]' onClick={notShuffled}><RiOrderPlayFill /></button>
                    ) : (
                        <button className='hover:text-[#16a349]' onClick={shuffled}><FaShuffle /></button>
                    )}
                    <button onClick={previous} className='hover:text-[#16a349]' ><FaBackwardStep /></button>
                    {playStatus ? (
                        <button className='hover:text-[#16a349]' onClick={pause}><FaPause /></button>
                    ) : (
                        <button className='hover:text-[#16a349]' onClick={play}><FaPlay /></button>
                    )}
                    <button onClick={next} className='hover:text-[#16a349]' ><FaForwardStep /></button>
                    <button onClick={loop} className='hover:text-[#16a349]' ><FaRepeat /></button>
                    <button className='hover:text-[#16a349]' onClick={toggleMute}>{isMuted ? <FaVolumeXmark /> : <FaVolumeHigh />}</button>
                </div>
                <div className='flex flex-row justify-center items-center gap-4 text-white'>
                    <div><p className='text-white text-sm hidden md:block'>{time.currentTime.minutes}:{time.currentTime.seconds < 10 ? `0${time.currentTime.seconds}` : time.currentTime.seconds}</p></div>
                <div 
                    ref={seekBG} 
                    className='w-64 h-1 bg-[#404040] rounded-full mt-2 cursor-pointer sm:w-20 md:w-96'
                    onClick={handleSeek}
                >
                    <div 
                        ref={seekBar} 
                        className='h-1 bg-[#16a349] rounded-full'
                        style={{ width: `${progressPercent}%` }}
                    ></div>
                </div>
                <div><p className='text-white text-sm hidden md:block'>{track.duration}</p></div>
            </div>
            </div>

            {/* Right Controls */}
            <div className='flex items-center justify-center gap-4 hidden md:block'>
                <div className='flex items-center gap-2 text-white'>
                    <button className='hover:text-[#16a349]' ><BsFilePlay /></button>
                    <button className='hover:text-[#16a349]' ><TbMicrophone2 /></button>
                    <button className='hover:text-[#16a349]' ><MdOutlineQueueMusic /></button>
                    <button className='hover:text-[#16a349]' ><LuMonitorSpeaker /></button>
                    <button className='hover:text-[#16a349]' ><HiMiniSpeakerWave /></button>
                    <div className='w-16 h-1 bg-[#404040] rounded-full mt-2 flex items-center cursor-pointer'>
                        <div 
                            className='h-1 bg-[#ffffff] rounded-full'
                            style={{ width: `${volumePercent}%` }}
                        ></div>
                    </div>
                    <button className='hover:text-[#16a349]' ><PiScreencast /></button>
                    <button className='hover:text-[#16a349]' ><AiOutlineFullscreen /></button>
                </div>
            </div>
        </div>
    );
};