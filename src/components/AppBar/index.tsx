import React from  'react'

const AppBar: React.FC = () => {
return (
    <header className='flex  max-w-6xl m-auto items-center justify-between pt-[40px] pb-[40px]'>   
    <img 
        className="w-18 h-16  rounded-md"
        alt="logo" 
        src='favicon.ico'/>
        <a href="#" className='flex items-center text-[#0d7680] text-xl font-bold' >Sign in/ Sign Up</a>
    </header>
)
}

export default AppBar