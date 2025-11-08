import React from 'react'

const hero: React.FC = () => {
    return (
        <div id='hero'  className='max-w-6xl m-auto flex flex-col items-center text-center '>
        <h2 className='font-bold text-5xl text-stone-50 w-[740px]'>Welcome to HAYFIN ! Your friend is in finance.</h2>
        <div className='flex gap-[16px] justify-center pt-[48px] items-center'>
            <button className='text-lg text-medium pr-[16px] pl-[16px] pt-[12px] pb-[12px] text-black rounded-xl bg-white '> Call to action </button>
            <button className='text-lg text-medium pr-[16px] pl-[16px] pt-[12px] pb-[12px] text-black rounded-xl bg-white'> Secondary </button>
         </div>
         </div>
    )
}

export default hero