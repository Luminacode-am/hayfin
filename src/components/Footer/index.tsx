import React from  'react'

const Footer: React.FC = () => {
    return (
        <footer className='border-b shadow flex  max-w-6xl m-auto items-center justify-between'>
           <p>Let’s work together</p>
           <div className='flex'>
           <img src="/src/Vector.png" alt="instagram"/>
           <img src="/src/Social link 2.png" alt="Linkdld"/>
           <img src="/src/Social link 3.png" alt="X"/>
           </div>
        </footer>

    )
}

export default Footer