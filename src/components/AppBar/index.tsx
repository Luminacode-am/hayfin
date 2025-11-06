import React from  'react'
import logo from './HayfinLogo.jpg'

const AppBar: React.FC = () => {
return (
    <header className="flex  justify-between items-center p-5">
        <img 
        className="w-18 h-16 shadow-xl rounded-md"
        alt="logo" 
        src={logo} />
        <a href="#" className="text-gray-700 text-sm">Sign In / Sign Up</a>
    </header>
)
}

export default AppBar