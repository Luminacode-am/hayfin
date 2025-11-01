import React from  'react'
import { Linkedin } from 'lucide-react';
import {Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className='border-b shadow flex  max-w-6xl m-auto items-center justify-between'>
           <p>Let’s work together</p>
           <div className='flex gap-2'>
           <Instagram />
           <Linkedin />
           <Twitter/>
           </div>
        </footer>

    )
}

export default Footer