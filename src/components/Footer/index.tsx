<<<<<<< HEAD
import React from  'react';

const Footer: React.FC = () => {
return (
    <footer className="borde p-5">
        <div className="flex flex-row justify-between items-center">
            <p className='font-semibold'>Let's work together</p>

            <ul className="flex gap-4 text-gray-400 text-xl">
              <li>
                <a href="#">◙</a>
              </li>
              <li>
                <a href="#">in</a>
              </li>
              <li>
                <a href="#">𝕏</a>
              </li>
            </ul>
        </div>
    </footer>
)
=======
import React from  'react'

const Footer: React.FC = () => {
    return(
    <>
    <footer className="footer">
        <div className="footer-p">
         <p>Let’s work together</p>
        </div>
        <div className="footer-link">
            <a href="" className="instagram"><img src="image/instagram.svg" alt="instagram"/></a>
            <a href="" className="linkedin"><img src="image/linkedin.svg" alt="linkedin"/></a>
            <a href="" className="X"><img src="image/X.svg" alt="X"/></a>
        </div>
    </footer>
    </>
    )
>>>>>>> 2f39209511dc55c01f0e736d6996bbf92b5a37ac
}

export default Footer