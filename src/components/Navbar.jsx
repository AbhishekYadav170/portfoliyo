import React from 'react'
import "./nav.scss"
import DateTime from './DateTime'
const Navbar = () => {
  return (
    <nav>
        <div className='left'>
            <div className='apple-icon'>
                <img src="./navbar.icons/apple.png" alt=""/>
            </div>

            <div className='nav-itme'>
                <p>Abhishek Yadav</p>
            </div>

            <div className='nav-itme'>
                <p>File</p>
            </div>
            <div className='nav-itme'>
                <p>Window</p>
            </div>
            <div className='nav-itme'>
                <p>Terminal</p>
            </div>

        </div>
        <div className='right'>
            <div className='nav-icon'>
                <img src="./navbar.icons/wifi.png" alt="wifi icon"/>
            </div>
            <div className='nav-itme'>
                <DateTime/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
