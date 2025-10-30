import React from  'react'

const AppBar: React.FC = () => {
return (
    <header className='border-b shadow flex  max-w-6xl m-auto items-center justify-between'>   
    <img 
        className="w-18 h-16 shadow-xl rounded-md"
        alt="logo" 
        src='https://www.vectorlogo.zone/logos/apple/apple-tile.svg'/>
        <a href="#" className='flex items-center text-teal-400' >Sign in/ Sign Up</a>
    </header>
)
}

export default AppBar