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
}

export default Footer